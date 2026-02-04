import Faq from "./components/Faq";
import WhyTravelSmarter from "./components/WhyTravelSmarter";
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
