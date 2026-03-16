export default function Nosotros() {
  return (
    <section className="nosotros section bg-light" id="nosotros">
      <div className="container">
        <div className="nosotros-grid">
          <div className="nosotros-text">
            <div className="section-header">
              <span className="section-subtitle">Nuestra Trayectoria Profesional</span>
              <h2 className="section-title">Excelencia en Consultoría Administrativa</h2>
            </div>
            <p>R&S Soluciones Integrales S.A.S. es una firma líder en el desarrollo e implementación de servicios de consultoría estratégica y asesoría técnica en Colombia, brindando soporte integral en toda la cadena de valor institucional.</p>
            
            <div className="mv-cards">
              <div className="mv-card">
                <i className='bx bx-target-lock mv-icon'></i>
                <h3>Nuestra Misión</h3>
                <p>Impulsar el crecimiento de entidades mediante servicios de consultoría especializada, capacitación organizacional de alto nivel y comercialización de insumos técnicos de primera categoría.</p>
              </div>
              <div className="mv-card">
                <i className='bx bx-globe mv-icon'></i>
                <h3>Visión Estratégica</h3>
                <p>Consolidarnos como el aliado número uno en soluciones integrales en Colombia, siendo reconocidos por nuestra eficiencia, transparencia y calidad indiscutible en procesos administrativos.</p>
              </div>
            </div>
          </div>
          
          <div className="valores-container">
            <h3>Nuestros Valores Corporativos</h3>
            <div className="valores-list">
              <div className="valor-item">
                <div className="valor-icon"><i className='bx bx-check-shield'></i></div>
                <div className="valor-text">
                  <h4>Responsabilidad</h4>
                  <p>Cumplimos nuestras promesas a tiempo y con excelencia.</p>
                </div>
              </div>
              <div className="valor-item">
                <div className="valor-icon"><i className='bx bx-certification'></i></div>
                <div className="valor-text">
                  <h4>Honestidad</h4>
                  <p>El norte ético que guía absolutamente toda operación.</p>
                </div>
              </div>
              <div className="valor-item">
                <div className="valor-icon"><i className='bx bx-shape-polygon'></i></div>
                <div className="valor-text">
                  <h4>Transparencia</h4>
                  <p>Procesos claros, trazables y auditables desde el primer día.</p>
                </div>
              </div>
              <div className="valor-item">
                <div className="valor-icon"><i className='bx bxs-user-badge'></i></div>
                <div className="valor-text">
                  <h4>Respeto</h4>
                  <p>Construcción de relaciones sólidas, empáticas y a largo plazo.</p>
                </div>
              </div>
              <div className="valor-item">
                <div className="valor-icon"><i className='bx bx-briefcase-alt-2'></i></div>
                <div className="valor-text">
                  <h4>Compromiso</h4>
                  <p>Nos ponemos la camiseta de su organización en cada proyecto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
