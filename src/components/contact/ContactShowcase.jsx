import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';
import curriculumPDF from '../../assets/files/Curriculum Vitae augusto.pdf';

const ContactShowcase = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleDownload = (e) => {
        e.preventDefault();
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        confetti({
            particleCount: 80,
            spread: 70,
            origin: { x, y }
        });

        Swal.fire({
            title: '¡Descarga Exitosa! 🎉',
            text: 'Descargaste el CV de Augusto Romera.',
            icon: 'success',
            confirmButtonText: 'Genial',
            background: '#0e121a',
            color: '#ffffff',
            confirmButtonColor: '#10b981'
        });

        setTimeout(() => {
            const link = document.createElement('a');
            link.href = curriculumPDF;
            link.download = 'Curriculum_Vitae_Augusto_Romera.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 1200);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/mqkenjbr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            if (response.ok) {
                confetti({ particleCount: 60, spread: 60, origin: { y: 0.8 } });
                Swal.fire({
                    title: '¡Mensaje Enviado con Éxito! ✉️',
                    text: 'Gracias por tu contacto. Te responderé a la brevedad.',
                    icon: 'success',
                    background: '#0e121a',
                    color: '#ffffff',
                    confirmButtonColor: '#3b82f6'
                });
                setFormState({ name: '', email: '', message: '' });
            } else {
                throw new Error('Formspree fallback');
            }
        } catch (error) {
            window.location.href = `mailto:newsromers@gmail.com?subject=Contacto de ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message + '\n\nEmail: ' + formState.email)}`;
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-showcase-section">
            <div className="container">
                
                {/* Header Pitch */}
                <div className="contact-hero-card text-center mb-5">
                    <div className="contact-status-pill d-inline-flex align-items-center gap-2 mb-3">
                        <span className="pulse-indicator"></span>
                        <span>🟢 Disponible para Nuevos Desafíos & Contratación</span>
                    </div>

                    <h2 className="contact-hero-title mb-3">
                        “Si buscas un profesional con capacidad de <span className="gradient-highlight">análisis profundo</span>, <span className="gradient-highlight">pensamiento sistémico</span> y <span className="gradient-highlight">rigor documental</span>, conversemos.”
                    </h2>

                    <p className="contact-hero-desc" style={{ maxWidth: '780px', margin: '0 auto' }}>
                        Desarrollador de Software &amp; Analista Funcional (UTN-FRT). Especializado en arquitectura limpia, especificación de requerimientos de negocio y diseño de sistemas escalables.
                    </p>
                </div>

                {/* Asymmetric 60/40 Hub: Form Left (60%) | Direct Channels Right (40%) */}
                <div className="row g-4 align-items-stretch">
                    
                    {/* Left Column (60%): Clean Async Form */}
                    <div className="col-12 col-lg-7">
                        <div className="contact-form-card h-100 p-4 p-md-5">
                            <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
                                <h3 className="text-white font-heading mb-0" style={{ fontSize: '1.4rem' }}>
                                    <i className="fas fa-paper-plane text-primary me-2"></i>
                                    Enviar Mensaje Directo
                                </h3>
                                <span className="contact-badge-time">
                                    <i className="fas fa-bolt me-1"></i> Respuesta en &lt;24h
                                </span>
                            </div>

                            <form onSubmit={handleFormSubmit} className="contact-compact-form">
                                <div className="row g-3">
                                    <div className="col-12 col-md-6">
                                        <label className="contact-form-label">Nombre o Empresa</label>
                                        <input 
                                            type="text" 
                                            required 
                                            className="form-control compact-input" 
                                            placeholder="Ej. Juan Pérez / Tech Co." 
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="contact-form-label">Correo Electrónico</label>
                                        <input 
                                            type="email" 
                                            required 
                                            className="form-control compact-input" 
                                            placeholder="correo@ejemplo.com" 
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="contact-form-label">Mensaje / Desafío Técnico</label>
                                        <textarea 
                                            required 
                                            rows="4" 
                                            className="form-control compact-input" 
                                            placeholder="¿En qué desafío técnico o proyecto podemos colaborar?" 
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <div className="col-12 text-end mt-4">
                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting}
                                            className="btn btn-primary px-4 py-3 fw-bold w-100 w-sm-auto"
                                        >
                                            {isSubmitting ? (
                                                <span><i className="fas fa-spinner fa-spin me-2"></i>Enviando...</span>
                                            ) : (
                                                <span>Enviar Mensaje Ahora <i className="fas fa-arrow-right ms-2"></i></span>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Column (40%): Direct Channels & CV */}
                    <div className="col-12 col-lg-5">
                        <div className="contact-channels-wrapper d-flex flex-column gap-3 h-100">
                            
                            {/* Prominent CV Download Card */}
                            <div 
                                className="contact-cv-card p-4 rounded-4" 
                                onClick={handleDownload}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && handleDownload(e)}
                            >
                                <div className="d-flex align-items-center justify-content-end mb-2">
                                    <span className="contact-pdf-badge">
                                        <i className="fas fa-file-pdf text-danger me-1"></i> PDF · 330 KB
                                    </span>
                                </div>
                                <h4 className="text-white mb-2 font-heading" style={{ fontSize: '1.25rem' }}>
                                    Descargar Curriculum Vitae
                                </h4>
                                <p className="contact-cv-desc mb-3">
                                    Perfil profesional, formación en UTN-FRT, experiencia técnica y detalle de proyectos.
                                </p>
                                <div className="btn btn-outline-light btn-sm w-100 fw-bold py-2">
                                    <i className="fas fa-download me-2"></i> Descargar PDF
                                </div>
                            </div>

                            {/* Direct Network Links */}
                            <a 
                                href="https://www.linkedin.com/in/augusto-romera" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="contact-channel-item p-3 rounded-3"
                            >
                                <div className="contact-channel-icon linkedin">
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="contact-channel-label">LinkedIn</div>
                                    <div className="contact-channel-val">in/augusto-romera</div>
                                </div>
                                <i className="fas fa-arrow-right contact-channel-arrow"></i>
                            </a>

                            <a 
                                href="https://wa.me/5493865204411?text=Hola%20Augusto,%20estuve%20viendo%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar." 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="contact-channel-item p-3 rounded-3"
                            >
                                <div className="contact-channel-icon whatsapp">
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="contact-channel-label">WhatsApp</div>
                                    <div className="contact-channel-val">+54 (3865) 20-4411</div>
                                </div>
                                <i className="fas fa-arrow-right contact-channel-arrow"></i>
                            </a>

                            <a 
                                href="https://github.com/romeraugustoo" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="contact-channel-item p-3 rounded-3"
                            >
                                <div className="contact-channel-icon github">
                                    <i className="fab fa-github"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="contact-channel-label">GitHub</div>
                                    <div className="contact-channel-val">github.com/romeraugustoo</div>
                                </div>
                                <i className="fas fa-arrow-right contact-channel-arrow"></i>
                            </a>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactShowcase;
