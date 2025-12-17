import Header from "./components/Header";
import Hero from "./components/Hero";
import StartGuide from "./components/StartGuide";
import HowWeWork from "./components/HowWeWork";
import QASection from "./components/QASection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import DifferenceSection from "./components/DifferenceSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <StartGuide />
      <HowWeWork />
      <DifferenceSection />
      <QASection />
      <BlogSection />

      <Footer />
    </>
  );
}
