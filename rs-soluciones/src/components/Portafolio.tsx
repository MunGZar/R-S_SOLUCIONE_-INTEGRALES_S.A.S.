export default function Portafolio() {
  return (
    <section className="portafolio section" id="portafolio">
      <div className="container text-center">
        <div className="section-header">
          <span className="section-subtitle">Trayectoria</span>
          <h2 className="section-title">Portafolio y Experiencia</h2>
          <p className="section-desc">Resultados palpables que respaldan nuestra capacidad ejecutiva.</p>
        </div>

        <div className="portafolio-grid">
          <div className="portfolio-item">
            <div className="portfolio-img bg-placeholder">
              <i className='bx bx-buildings text-muted'></i>
            </div>
            <div className="portfolio-info">
              <h4>Consultoría Sector Público</h4>
              <p>Optimización administrativa y actualización normativa.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-img bg-placeholder">
              <i className='bx bx-package text-muted'></i>
            </div>
            <div className="portfolio-info">
              <h4>Dotación Integral de Bienes</h4>
              <p>Suministro masivo para entidades corporativas.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-img bg-placeholder">
              <i className='bx bx-library text-muted'></i>
            </div>
            <div className="portfolio-info">
              <h4>Capacitación Comunal</h4>
              <p>Formación especializada en legislación para líderes.</p>
            </div>
          </div>
        </div>
        
        <div className="trust-banners mt-5">
          <span className="text-muted">Desarrollando Alianzas y Certificaciones de Excelencia Intelectual e Institucional.</span>
        </div>
      </div>
    </section>
  );
}
