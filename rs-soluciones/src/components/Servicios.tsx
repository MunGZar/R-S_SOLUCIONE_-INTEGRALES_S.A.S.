import Link from 'next/link';

export default function Servicios() {
  return (
    <section className="servicios section bg-light" id="servicios">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Nuestro Portafolio de Soluciones</span>
          <h2 className="section-title">Servicios Principales</h2>
          <p className="section-desc">Estrategias a la medida para potenciar su crecimiento y optimizar sus procesos clave.</p>
        </div>
        
        <div className="servicios-grid">
          {/* Servicio 1 */}
          <div className="servicio-card">
            <div className="servicio-icon"><i className='bx bx-book-reader'></i></div>
            <h3>Capacitación y Formación</h3>
            <p>Especializados en legislación comunal, normativas vigentes y metodologías corporativas avanzadas.</p>
            <ul className="servicio-benefits">
              <li><i className='bx bx-check'></i> Equipos actualizados</li>
              <li><i className='bx bx-check'></i> Reducción de riesgos legales</li>
            </ul>
            <Link href="#contacto" className="btn btn-outline btn-sm">Solicitar propuesta</Link>
          </div>

          {/* Servicio 2 */}
          <div className="servicio-card">
            <div className="servicio-icon"><i className='bx bx-bar-chart-alt-2'></i></div>
            <h3>Consultoría Organizacional</h3>
            <p>Diagnóstico, optimización de procesos internos y modernización estructural de entidades.</p>
            <ul className="servicio-benefits">
              <li><i className='bx bx-check'></i> Aumento de eficiencia</li>
              <li><i className='bx bx-check'></i> Eliminación de cuellos de botella</li>
            </ul>
            <Link href="#contacto" className="btn btn-outline btn-sm">Solicitar propuesta</Link>
          </div>

          {/* Servicio 3 */}
          <div className="servicio-card">
            <div className="servicio-icon"><i className='bx bx-directions'></i></div>
            <h3>Asesoría Especializada</h3>
            <p>Orientación precisa, técnica y jurídica para la toma de decisiones complejas y estratégicas.</p>
            <ul className="servicio-benefits">
              <li><i className='bx bx-check'></i> Rutas de acción viables</li>
              <li><i className='bx bx-check'></i> Soporte normativo</li>
            </ul>
            <Link href="#contacto" className="btn btn-outline btn-sm">Solicitar propuesta</Link>
          </div>

          {/* Servicio 4 */}
          <div className="servicio-card">
            <div className="servicio-icon"><i className='bx bx-support'></i></div>
            <h3>Apoyo Técnico y Administrativo</h3>
            <p>Acompañamiento por profesionales senior en la gestión integral de sus recursos y proyectos.</p>
            <ul className="servicio-benefits">
              <li><i className='bx bx-check'></i> Agilidad operativa</li>
              <li><i className='bx bx-check'></i> Experticia técnica in-house</li>
            </ul>
            <Link href="#contacto" className="btn btn-outline btn-sm">Solicitar propuesta</Link>
          </div>

          {/* Servicio 5 */}
          <div className="servicio-card servicio-card-wide">
            <div className="servicio-card-content">
              <div className="servicio-icon"><i className='bx bx-package'></i></div>
              <div className="servicio-text-wide">
                <h3>Suministro y Comercialización</h3>
                <p>Provisión estratégica de bienes e insumos fundamentales para entidades públicas y privadas. Garantizamos calidad y tiempos de respuesta óptimos.</p>
                <Link href="#contacto" className="btn btn-outline btn-sm mt-3 text-white">Solicitar propuesta de suministro</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
