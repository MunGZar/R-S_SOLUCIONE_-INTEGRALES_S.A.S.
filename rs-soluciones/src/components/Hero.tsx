import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge">Expertos en el sector público, privado y mixto</span>
          <h1 className="hero-title">Soluciones Integrales y Estratégicas para el Éxito de su Organización.</h1>
          <p className="hero-desc">Ofrecemos capacitación teórica, consultoría administrativa y comercialización especializada con el más alto estándar de eficiencia, transparencia y responsabilidad. Cobertura total en Colombia y el exterior.</p>
          <div className="hero-buttons">
            <Link href="#servicios" className="btn btn-primary btn-lg">Conozca Nuestros Servicios</Link>
            <a href="https://wa.me/570000000000" className="btn btn-outline btn-lg" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-whatsapp'></i> Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
