import React from 'react';
import { PROJECT_CATEGORIES } from '../../data/projects';

const ProjectFilterTabs = ({ activeCategory, onSelectCategory, counts }) => {
    return (
        <div className="project-filter-tabs-container mb-4">
            <div className="d-flex justify-content-center flex-wrap gap-2">
                {PROJECT_CATEGORIES.map((cat) => {
                    const count = counts[cat.id] || 0;
                    const isActive = activeCategory === cat.id;

                    return (
                        <button
                            key={cat.id}
                            type="button"
                            className={`filter-tab-btn ${isActive ? 'active' : ''}`}
                            onClick={() => onSelectCategory(cat.id)}
                            aria-pressed={isActive}
                        >
                            <span>{cat.label}</span>
                            <span className="filter-tab-count">{count}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectFilterTabs;
