export default function Sectores() {
  return (
    <section className="sectores section text-center dark-section" id="sectores">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Sectores de Impacto en Colombia</span>
          <h2 className="section-title text-white">Sectores a los que Servimos</h2>
          <p className="section-desc text-white-50">Impactamos positivamente en la gestión administrativa y operativa en diversos ámbitos institucionales.</p>
        </div>

        <div className="sectores-grid">
          <div className="sector-card">
            <i className='bx bxs-city'></i>
            <h3>Sector Público</h3>
            <p>Especialistas en consultoría para el sector público y procesos de contratación estatal bajo la normativa colombiana.</p>
          </div>
          <div className="sector-card">
            <i className='bx bx-buildings'></i>
            <h3>Sector Privado</h3>
            <p>Optimizamos la rentabilidad y gobernanza mediante asesoría empresarial estratégica y capacitación corporativa.</p>
          </div>
          <div className="sector-card">
            <i className='bx bx-network-chart'></i>
            <h3>Sector Mixto</h3>
            <p>Construimos puentes técnicos y financieros entre los sectores público y privado con transparencia operativa.</p>
          </div>
          <div className="sector-card">
            <i className='bx bxs-group'></i>
            <h3>Organizaciones Sociales</h3>
            <p>Fortalecimiento legal y administrativo para líderes sociales, comunales y de base comunitaria en el país.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
