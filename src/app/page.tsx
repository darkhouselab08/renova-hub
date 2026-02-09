import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Gallery from '@/components/sections/Gallery';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Gallery />
      <ContactForm />
    </main>
  );
}
