import Link from 'next/link';

export default function Servicios() {
  return (
    <section className="servicios section bg-light" id="servicios">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Servicios de Consultoría y Asesoría</span>
          <h2 className="section-title">Nuestras Soluciones Integrales</h2>
          <p className="section-desc">Estrategias a la medida en consultoría empresarial, capacitación y apoyo administrativo para potenciar su crecimiento.</p>
        </div>
        
        <div className="servicios-grid">
          {/* Servicio 1 */}
          <div className="servicio-card">
            <div className="servicio-icon"><i className='bx bx-book-reader'></i></div>
            <h3>Capacitación Organizacional</h3>
            <p>Programas de formación profesional en legislación, normatividad y metodologías corporativas de alto nivel.</p>
            <ul className="servicio-benefits">
              <li><i className='bx bx-check'></i> Gestión del conocimiento</li>
              <li><i className='bx bx-check'></i> Cumplimiento normativo</li>
            </ul>
            <Link href="#contacto" className="btn btn-outline btn-sm">Solicitar Cotización</Link>
          </div>

          {/* Servicio 2 */}
          <div className="servicio-card">
            <div className="servicio-icon"><i className='bx bx-bar-chart-alt-2'></i></div>
            <h3>Consultoría Administrativa</h3>
            <p>Diagnóstico integral y optimización de procesos para la modernización estructural de entidades públicas y privadas.</p>
            <ul className="servicio-benefits">
              <li><i className='bx bx-check'></i> Eficiencia operativa</li>
              <li><i className='bx bx-check'></i> Transformación técnica</li>
            </ul>
            <Link href="#contacto" className="btn btn-outline btn-sm">Agendar Consultoría</Link>
          </div>

          {/* Servicio 3 */}
          <div className="servicio-card">
            <div className="servicio-icon"><i className='bx bx-directions'></i></div>
            <h3>Asesoría Especializada</h3>
            <p>Orientación técnica y jurídica experta para la toma de decisiones estratégicas en entornos complejos.</p>
            <ul className="servicio-benefits">
              <li><i className='bx bx-check'></i> Soporte jurídico senior</li>
              <li><i className='bx bx-check'></i> Análisis de riesgos</li>
            </ul>
            <Link href="#contacto" className="btn btn-outline btn-sm">Contactar Especialista</Link>
          </div>

          {/* Servicio 4 */}
          <div className="servicio-card">
            <div className="servicio-icon"><i className='bx bx-support'></i></div>
            <h3>Apoyo Técnico Institucional</h3>
            <p>Acompañamiento profesional en la gestión administrativa y operativa para el cumplimiento de objetivos.</p>
            <ul className="servicio-benefits">
              <li><i className='bx bx-check'></i> Ejecución de proyectos</li>
              <li><i className='bx bx-check'></i> Respaldo administrativo</li>
            </ul>
            <Link href="#contacto" className="btn btn-outline btn-sm">Solicitar Apoyo</Link>
          </div>

          {/* Servicio 5 */}
          <div className="servicio-card servicio-card-wide">
            <div className="servicio-card-content">
              <div className="servicio-icon"><i className='bx bx-package'></i></div>
              <div className="servicio-text-wide">
                <h3>Suministro y Comercialización de Bienes</h3>
                <p>Provisión estratégica de insumos y bienes técnicos fundamentales para entidades públicas y privadas. Garantizamos calidad y tiempos de respuesta óptimos en toda Colombia.</p>
                <Link href="#contacto" className="btn btn-outline btn-sm mt-3 text-white">Solicitar Cotización de Suministros</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
