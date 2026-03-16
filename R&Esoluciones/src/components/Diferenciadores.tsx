export default function Diferenciadores() {
  return (
    <section className="diferenciadores bg-light section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Por qué elegirnos</span>
          <h2 className="section-title">Valores que Diferencian nuestra Consultoría</h2>
        </div>
        <div className="diferenciadores-grid">
          <div className="dif-card">
            <div className="dif-icon"><i className='bx bxs-medal'></i></div>
            <h4>Calidad Impecable</h4>
            <p>Excelencia probada en cada servicio, sin excepciones.</p>
          </div>
          <div className="dif-card">
            <div className="dif-icon"><i className='bx bx-rocket'></i></div>
            <h4>Alta Eficiencia</h4>
            <p>Ágiles, proactivos y orientados a resultados medibles.</p>
          </div>
          <div className="dif-card">
            <div className="dif-icon"><i className='bx bx-shield-quarter'></i></div>
            <h4>Transparencia Total</h4>
            <p>Cuentas claras, comunicación abierta siempre.</p>
          </div>
          <div className="dif-card">
            <div className="dif-icon"><i className='bx bx-check-shield'></i></div>
            <h4>Cumplimiento Jurídico</h4>
            <p>Cero riesgos legales. Apegados 100% a la norma.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
