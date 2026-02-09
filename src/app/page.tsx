import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Gallery from '@/components/sections/Gallery';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
