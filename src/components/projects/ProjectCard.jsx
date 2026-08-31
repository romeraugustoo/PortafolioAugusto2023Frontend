import React from 'react';
import { Link } from 'react-router-dom';
import inDevCover from '../../assets/images/portfolio/in_development_cover.svg';

const ProjectCard = ({ project }) => {
    const isTier1 = project.tier === 1;
    const isUnderDevelopment = !project.website || project.inDevelopment || project.isProtected;

    // Use specific image if available and not generic, else use the high-tech in-dev cover
    const displayImage = (!project.website && !project.hasCustomScreenshot)
        ? inDevCover
        : (project.image || inDevCover);

    return (
        <div className={`project-modern-card ${isTier1 ? 'tier-1-featured' : ''}`}>
            {/* Header / Thumbnail with Overlay */}
            <div className="project-card-image-wrap">
                <img 
                    src={displayImage} 
                    alt={project.title} 
                    className="project-card-img"
                    loading="lazy"
                />
                
                {/* Tier Badge */}
                <div className="project-card-tier-badge">
                    {isTier1 ? (
                        <span className="badge-tier-1">⭐ CORE PROJECT</span>
                    ) : project.tier === 2 ? (
                        <span className="badge-tier-2">🚀 ENTERPRISE & TOOLS</span>
                    ) : (
                        <span className="badge-tier-3">💡 SPECIALIZED WORK</span>
                    )}
                </div>

                {/* In-Development Overlay Pill if applicable */}
                {isUnderDevelopment && (
                    <div className="project-in-dev-ribbon">
                        <i className="fas fa-tools me-1"></i> EN DESARROLLO
                    </div>
                )}

                {/* Impact Metric Strip */}
                {project.impactMetric && (
                    <div className="project-card-metric-strip">
                        <span>{project.impactMetric}</span>
                    </div>
                )}
            </div>

            {/* Body */}
            <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-subtitle">{project.subtitle}</p>

                {/* Tech Stack Pills */}
                <div className="project-card-tech-stack">
                    {project.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-pill-item">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Context Note (Metodología CAR) */}
                {project.contextNote && (
                    <div className="project-card-context-note mb-3">
                        <i className="fas fa-info-circle me-1 text-primary"></i>
                        <span>{project.contextNote}</span>
                    </div>
                )}

                {/* Action Buttons */}
                <div className={`project-card-actions ${!project.website ? 'is-private-actions' : ''}`}>
                    {project.website ? (
                        <>
                            <a 
                                href={project.website} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn-card-action primary"
                            >
                                <i className="fas fa-external-link-alt"></i>
                                <span>Demo en Vivo</span>
                            </a>

                            {project.solutionRoute && (
                                <Link 
                                    to={project.solutionRoute} 
                                    className="btn-card-action secondary"
                                >
                                    <i className="fas fa-microscope"></i>
                                    <span>Mi Solución</span>
                                </Link>
                            )}

                            {project.github && project.github !== '#' && (
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn-card-action ghost"
                                    aria-label={`Ver código de ${project.title} en GitHub`}
                                    title="Ver código fuente en GitHub"
                                >
                                    <i className="fab fa-github"></i>
                                    <span className="d-none d-sm-inline">GitHub</span>
                                </a>
                            )}
                        </>
                    ) : (
                        <span className="btn-card-action in-dev-badge badge-private-centered" title="Proyecto Confidencial / Privado">
                            <i className="fas fa-lock"></i>
                            <span>Privado</span>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
