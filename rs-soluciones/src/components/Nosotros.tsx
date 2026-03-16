export default function Nosotros() {
  return (
    <section className="nosotros section" id="nosotros">
      <div className="container">
        <div className="nosotros-grid">
          <div className="nosotros-text">
            <div className="section-header">
              <span className="section-subtitle">Identidad Institucional</span>
              <h2 className="section-title">Quiénes Somos</h2>
            </div>
            <p>Somos una firma líder en el desarrollo, asesoramiento e implementación de estrategias transversales, brindando soporte técnico-administrativo integral a lo largo de toda la cadena de valor institucional.</p>
            
            <div className="mv-cards">
              <div className="mv-card">
                <i className='bx bx-target-lock mv-icon'></i>
                <h3>Misión</h3>
                <p>Impulsar el desarrollo de entidades públicas, privadas y organizaciones sociales mediante la excelencia en nuestro servicio, consultoría experta e insumos de primera categoría.</p>
              </div>
              <div className="mv-card">
                <i className='bx bx-globe mv-icon'></i>
                <h3>Visión 2035</h3>
                <p>Consolidarnos internacionalmente como el aliado integral número uno, reconocidos por nuestra eficiencia operativa, calidad indiscutible y transparencia rotunda.</p>
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
