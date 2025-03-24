import { useState } from 'react';

export default function Skills() {
    const [search, setSearch] = useState('');
    
    // Structured skills data with categories
    const skillsData = {
        Frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Bootstrap', 'Tailwind CSS'],
        Backend: ['Node.js', 'Express'],
        Database: ['MongoDB', 'MySQL', 'SQL', 'Firebase'],
        Programming: ['Python', 'Java', 'C', 'PHP'],
        DevOps: ['Docker', 'CI/CD', 'AWS', 'Git', 'GitHub Actions'],
        Mobile: ['React Native', 'Kotlin']
    };

    // Combined function to handle both category visibility and skill filtering
    const processCategory = (category, skillsList) => {
        // If no search, show everything
        if (!search) {
            return { 
                shouldShow: true, 
                filteredSkills: skillsList 
            };
        }
        
        // Check if category matches search
        const categoryMatches = category.toLowerCase().includes(search.toLowerCase());
        
        // If category matches, show all skills in that category
        if (categoryMatches) {
            return {
                shouldShow: true,
                filteredSkills: skillsList
            };
        }
        
        // Filter skills that match search
        const matchingSkills = skillsList.filter(skill => 
            skill.toLowerCase().includes(search.toLowerCase())
        );
        
        // Only show category if it has matching skills
        return {
            shouldShow: matchingSkills.length > 0,
            filteredSkills: matchingSkills
        };
    };

    return (
        <div className="container my-4">
            <h2 className="mb-4">Skills</h2>
            <input
                type="text"
                className="form-control mb-4"
                placeholder="Search skills or categories (e.g. 'Frontend', 'React', 'Java')"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            
            <div className="skills-container">
                {Object.entries(skillsData).map(([category, skillsList]) => {
                    const { shouldShow, filteredSkills } = processCategory(category, skillsList);
                    return shouldShow && (
                        <div key={category} className="category-section mb-4">
                            <h4 className="category-title">{category}</h4>
                            <ul className="list-group">
                                {filteredSkills.map(skill => (
                                    <li key={skill} className="list-group-item">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>

            {search && !Object.entries(skillsData).some(([category, skillsList]) => 
                processCategory(category, skillsList).shouldShow
            ) && (
                <div className="alert alert-info">
                    No skills found matching "{search}"
                </div>
            )}
        </div>
    );
}