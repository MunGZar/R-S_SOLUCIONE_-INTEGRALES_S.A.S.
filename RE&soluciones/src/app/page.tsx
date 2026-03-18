import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Nosotros from '@/components/Nosotros';
import Servicios from '@/components/Servicios';
import Sectores from '@/components/Sectores';
import Contratacion from '@/components/Contratacion';
import Diferenciadores from '@/components/Diferenciadores';
import SIG from '@/components/SIG';
import Portafolio from '@/components/Portafolio';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Sectores />
        <Contratacion />
        <Diferenciadores />
        <SIG />
        <Portafolio />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
