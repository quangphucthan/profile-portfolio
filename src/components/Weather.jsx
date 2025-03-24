import { useState, useEffect } from 'react';
import { Card, Spinner, Form, Button } from 'react-bootstrap';
import { usePageMode } from '../context/PageMode';

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Halifax');
  const [inputCity, setInputCity] = useState('Halifax');
  const { theme } = usePageMode();

  const API_BASE = import.meta.env.DEV 
    ? 'http://localhost:5000' 
    : '';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${API_BASE}/api/weather?city=${encodeURIComponent(city)}`);
        
        if (!response.ok) {
          throw new Error(`Weather data not available (${response.status})`);
        }
        
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching weather:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, API_BASE]);

  const handleCitySubmit = (e) => {
    e.preventDefault();
    setCity(inputCity);
  };

  const cardBg = theme === 'dark' ? 'dark' : 'light';
  const textClass = theme === 'dark' ? 'text-light' : 'text-dark';

  return (
    <Card className={`my-4 bg-${cardBg} ${textClass}`}>
      <Card.Header>
        <h3 className="mb-0">Current Weather</h3>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleCitySubmit} className="mb-3">
          <div className="d-flex">
            <Form.Control
              type="text"
              placeholder="Enter city name"
              value={inputCity}
              onChange={(e) => setInputCity(e.target.value)}
              className="me-2"
            />
            <Button type="submit" variant={theme === 'dark' ? 'light' : 'dark'}>
              Check Weather
            </Button>
          </div>
        </Form>

        {loading && (
          <div className="text-center my-4">
            <Spinner animation="border" />
          </div>
        )}

        {error && (
          <div className="alert alert-danger">{error}</div>
        )}

        {!loading && !error && weatherData && (
          <div>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <img 
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
                style={{ width: '60px' }}
              />
              <div className="ms-3">
                <h2>{Math.round(weatherData.main.temp)}°C</h2>
                <p className="text-capitalize mb-0">{weatherData.weather[0].description}</p>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-6 mb-3">
                <strong>City:</strong> {weatherData.name}
              </div>
              <div className="col-6 mb-3">
                <strong>Humidity:</strong> {weatherData.main.humidity}%
              </div>
              <div className="col-6">
                <strong>Wind:</strong> {Math.round(weatherData.wind.speed)} km/h
              </div>
              <div className="col-6">
                <strong>Feels Like:</strong> {Math.round(weatherData.main.feels_like)}°C
              </div>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}