export default function Sectores() {
  return (
    <section className="sectores section text-center dark-section" id="sectores">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Audiencia Objetivo</span>
          <h2 className="section-title text-white">Sectores a los que Servimos</h2>
          <p className="section-desc text-white-50">Impactamos positivamente en una gran diversidad de ecosistemas institucionales.</p>
        </div>

        <div className="sectores-grid">
          <div className="sector-card">
            <i className='bx bxs-city'></i>
            <h3>Sector Público</h3>
            <p>Apoyo experto 100% alineado a la normativa y contratación estatal.</p>
          </div>
          <div className="sector-card">
            <i className='bx bx-buildings'></i>
            <h3>Sector Privado</h3>
            <p>Optimizando la rentabilidad, escalabilidad y gobernanza corporativa.</p>
          </div>
          <div className="sector-card">
            <i className='bx bx-network-chart'></i>
            <h3>Sector Mixto</h3>
            <p>Construimos puentes operativos y financieros entre lo público y privado.</p>
          </div>
          <div className="sector-card">
            <i className='bx bxs-group'></i>
            <h3>Org. Sociales y Comunales</h3>
            <p>Fortalecimiento legal y administrativo para impacto comunitario directo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
