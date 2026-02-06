import Container from "@/components/container";
import Image from "next/image";
import Shield from "@/assets/images/icon/shield.png";
import Chat from "@/assets/images/icon/chat.png";
import Location from "@/assets/images/icon/location.png";
import Hidden from "@/assets/images/icon/hidden.png";
import React from "react";

export default function WhyTravelSmarter() {
  const cards = [
    {
      id: 1,
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Drivado promises to deliver exceptional services from the moment you book with us. We guarantee safety, professionalism and satisfaction with every ride.",
    },
    {
      id: 2,
      icon: Location,
      title: "Global Network",
      description:
        "Whether you plan to travel to bustling cities or remote locations, we serve across 65+ countries and 425+ cities.",
    },
    {
      id: 3,
      icon: Chat,
      title: "24 x 7 Support",
      description:
        "Ride peacefully anytime anywhere, with our team available to assist you with live support 24/7.",
    },
    {
      id: 4,
      icon: Hidden,
      title: "No Hidden Cost",
      description:
        "At Drivado, we offer competitive and transparent pricing that gives you full control.",
    },
  ];
  return (
    <section
      className="py-10 md:py-15"
      //   aria-labelledby={heading.toLowerCase().replaceAll(" ", "-")}
      //   aria-describedby={`${heading.toLowerCase().replaceAll(" ", "-")}-description`}
    >
      <Container className="space-y-6 md:space-y-10 2xl:space-y-15">
        <header className="space-y-3 text-center">
          <h2
            // id={heading.toLowerCase().replaceAll(" ", "-")}
            className="text-2xl font-bold text-[#161823] md:text-[2rem] xl:text-[2.5rem]"
          >
            Why Travel Smarter with Drivado
          </h2>
          <p
            // id={`${heading.toLowerCase().replaceAll(" ", "-")}-description`}
            className="text-base md:text-lg text-[#3F4254] font-normal"
          >
            Travel with our bespoke chauffeur driven transportation solutions,
            tailored to meet your demands.
          </p>
        </header>

        <div className="relative flex flex-col items-center justify-center">
          <ul className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {cards.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="shadow-choose-us-card grid grid-rows-[auto_1fr] space-y-4 rounded-2xl bg-white shadow-[0_6px_22px_0_#00000017] p-4 text-left md:pt-5"
              >
                <div className="relative size-15">
                  <Image
                    src={icon}
                    className="h-15 w-auto object-contain"
                    alt={title}
                  />
                </div>

                <div>
                  <div className="space-y-3 bg-[#F7F7F8] rounded-lg p-2 h-full">
                    <h3 className="text-choose-us-text text-[1.25rem] font-semibold xl:text-2xl text-[#161823]">
                      {title}
                    </h3>
                    <p className="text-base text-[#3F4254] font-normal">
                      {description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
