import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="#" className="logo footer-logo mb-4 inline-block">
              <Image
                src="/images/logo-white.svg"
                alt="R&S Soluciones Integrales"
                width={200}
                height={66}
              />
            </Link>
            <p className="mt-3 text-white-50">Soluciones integrales, eficientes y transparentes para el desarrollo institucional de entidades públicas, privadas y mixtas a nivel nacional e internacional.</p>
            <div className="social-links mt-4">
              <a href="#" aria-label="LinkedIn"><i className='bx bxl-linkedin'></i></a>
              <a href="#" aria-label="Facebook"><i className='bx bxl-facebook'></i></a>
              <a href="#" aria-label="Instagram"><i className='bx bxl-instagram'></i></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navegación</h4>
            <ul>
              <li><Link href="#hero">Inicio</Link></li>
              <li><Link href="#nosotros">Nosotros</Link></li>
              <li><Link href="#servicios">Servicios</Link></li>
              <li><Link href="#sectores">Sectores</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Servicios</h4>
            <ul>
              <li><Link href="#servicios">Capacitación</Link></li>
              <li><Link href="#servicios">Consultoría</Link></li>
              <li><Link href="#servicios">Suministro</Link></li>
              <li><Link href="#contratacion">Contratación</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Legal & Privacidad</h4>
            <ul>
              <li><Link href="#">Aviso Legal</Link></li>
              <li><Link href="#">Términos y Condiciones</Link></li>
              <li><Link href="#">Política de Privacidad</Link></li>
              <li><Link href="#">Tratamiento de Datos</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} R&S Soluciones Integrales S.A.S. Todos los derechos reservados.</p>
          <p className="developer">Diseñado para la excelencia corporativa.</p>
        </div>
      </div>
    </footer>
  );
}
