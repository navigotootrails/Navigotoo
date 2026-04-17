import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: "Let's Talk",
  description: "Tell us about your dream trip and let's plan it together.",
};

export default function LetsTalkPage() {
  return (
    <>
      <HeroSection
        title="Let's Plan Your Adventure"
        subtitle="Fill in the form below and we'll get back to you within 24 hours."
        backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
        height="medium"
      />

      <section className="py-20 px-4 sm:px-6">
        <ContactForm />
      </section>
    </>
  );
}
