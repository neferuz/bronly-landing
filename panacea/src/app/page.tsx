import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Certificates from "@/components/Certificates";
import Values from "@/components/Values";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Categories />
      <Products />
      <Certificates />
      <Values />
    </div>
  );
}
