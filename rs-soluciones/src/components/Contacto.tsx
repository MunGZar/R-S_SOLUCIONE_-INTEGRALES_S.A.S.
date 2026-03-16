'use client';
import { useState } from 'react';

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API interaction (1.5 seconds delay)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      (e.target as HTMLFormElement).reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="contacto section bg-light" id="contacto">
      <div className="container">
        <div className="contacto-grid">
          {/* Información */}
          <div className="contacto-info">
            <div className="section-header">
              <span className="section-subtitle">Contáctenos</span>
              <h2 className="section-title">¿Listo para impulsar su Institución?</h2>
              <p>Solicite una cotización o agende una asesoría personalizada con nuestros expertos.</p>
            </div>

            <div className="contact-methods">
              <div className="c-method">
                <div className="c-icon"><i className='bx bxl-whatsapp'></i></div>
                <div className="c-text">
                  <h5>Línea de WhatsApp</h5>
                  <a href="https://wa.me/570000000000" target="_blank" rel="noopener noreferrer">+57 (000) 000-0000</a>
                </div>
              </div>
              <div className="c-method">
                <div className="c-icon"><i className='bx bx-envelope'></i></div>
                <div className="c-text">
                  <h5>Correo Electrónico</h5>
                  <a href="mailto:info@rs-soluciones.com">info@rs-soluciones.com</a>
                </div>
              </div>
              <div className="c-method">
                <div className="c-icon"><i className='bx bx-map'></i></div>
                <div className="c-text">
                  <h5>Sede Principal</h5>
                  <span>Colombia - Atención Nacional e Internacional</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="contacto-form-card">
            <form id="contactForm" className="form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo *</label>
                  <input type="text" id="nombre" name="nombre" required placeholder="Ej. Juan Pérez" />
                </div>
                <div className="form-group">
                  <label htmlFor="empresa">Organización/Empresa</label>
                  <input type="text" id="empresa" name="empresa" placeholder="Ej. Alcaldía / Corp. S.A." />
                </div>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="correo">Correo Electrónico *</label>
                  <input type="email" id="correo" name="correo" required placeholder="correo@empresa.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono *</label>
                  <input type="tel" id="telefono" name="telefono" required placeholder="Número de contacto" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="asunto">Asunto / Servicio de Interés *</label>
                <select id="asunto" name="asunto" required defaultValue="">
                  <option value="" disabled>Seleccione una opción</option>
                  <option value="capacitacion">Capacitación y Formación</option>
                  <option value="consultoria">Consultoría Organizacional</option>
                  <option value="suministros">Suministro y Comercialización</option>
                  <option value="asesoria">Asesoría Especializada</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea id="mensaje" name="mensaje" rows={4} required placeholder="Cuéntenos cómo podemos apoyarlo..."></textarea>
              </div>
              
              <div className="form-check">
                <input type="checkbox" id="privacidad" name="privacidad" required />
                <label htmlFor="privacidad">Acepto la <a href="#">Política de Tratamiento de Datos Personales</a>.</label>
              </div>

              <button type="submit" className="btn btn-primary btn-block btn-lg" id="submitBtn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><i className='bx bx-loader-alt bx-spin mr-2'></i> Enviando...</>
                ) : (
                  <>Enviar Solicitud <i className='bx bx-send ml-2'></i></>
                )}
              </button>
              
              {/* Mensaje Éxito */}
              <div id="formSuccess" className={`form-success-msg ${showSuccess ? '' : 'hidden'}`}>
                <i className='bx bx-check-circle'></i>
                <span>¡Mensaje enviado con éxito! Un asesor se contactará muy pronto.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
