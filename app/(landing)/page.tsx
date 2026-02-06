import Faq from "./components/faq";
import WhyTravelSmarter from "./components/why-travel-smarter";
import OurFleets from "./components/our-fleets/index";

export default function page() {
  return (
    <div>
      <WhyTravelSmarter />
      <OurFleets />
      <Faq />
    </div>
  );
}
