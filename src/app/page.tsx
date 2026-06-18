import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TargetAudience from '@/components/TargetAudience';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import WhyTelegram from '@/components/WhyTelegram';
import AltegioAlternative from '@/components/AltegioAlternative';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TargetAudience />
        <HowItWorks />
        <Features />
        <WhyTelegram />
        <AltegioAlternative />
        <Benefits />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
