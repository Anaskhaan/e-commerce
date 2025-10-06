import { Hero } from "./Components/UI/Home/Hero";
import { PlansPricing } from "./Components/UI/Home/PlansPricing";
import { ProductsInfo } from "./Components/UI/Home/ProductsInfo";
import { TestimonialsSlider } from "./Components/UI/Home/TestimonialsSlider";
import { WhyChoose } from "./Components/UI/Home/WhyChoose";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <ProductsInfo />
      <PlansPricing />
      <TestimonialsSlider />
    </div>
  );
}
