"use client";

import Container from "@/components/container";
import React from "react";

import { useState } from "react";

const accordionData = [
  {
    id: 1,
    question: "What is included in the price?",
    answer:
      "Drivado promises to deliver exceptional services from the moment you book with us. We guarantee safety, professionalism and satisfaction with every ride.",
  },
  {
    id: 2,
    question: "What is Drivado’s cancellation policy?",
    answer:
      "All bookings can be cancelled free of charge until 24 hours before scheduled pick time. Cancellation would be 100% of the original price, if ride is cancelled within 24 hrs of scheduled pick time or in case of no show. In cases Cancellation Policy is different, it would be notified in advance by us.",
  },
  {
    id: 3,
    question: "How to  make amendments to my booking?",
    answer: "All our drivers are trained, licensed, and experienced.",
  },
  {
    id: 4,
    question: "When is my ride charged to my credit card?",
    answer: "All our drivers are trained, licensed, and experienced.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-10 md:py-15">
      <Container className="3xl:px-104 px-5 md:px-16 lg:px-26 xl:px-56 2xl:px-80">
        <header className="space-y-3 text-center">
          <h2
            // id={heading.toLowerCase().replaceAll(" ", "-")}
            className="text-choose-us-text text-2xl font-semibold md:text-[2rem] xl:text-[2.5rem] text-[31C232D]"
          >
            Frequently Asked Questions
          </h2>
          <p
            // id={`${heading.toLowerCase().replaceAll(" ", "-")}-description`}
            className="text-base md:text-lg font-normal text-[#606060]"
          >
            Find quick answers to the most common questions about our chauffeur
            services.
          </p>
        </header>
        <div className="mt-12 space-y-6 max-w-4xl mx-auto">
          {accordionData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-sm bg-white px-2.5 shadow-[0px_3px_25px_0px_rgba(0,0,0,0.05)] md:rounded-lg md:px-4 md:shadow-[0px_1.9155510663986206px_15.962925910949707px_0px_rgba(0,0,0,0.05)] xl:rounded-[10px] 2xl:rounded-xl 2xl:px-6"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center cursor-pointer justify-between py-4 text-left"
                >
                  <span className="text-base font-medium text-[#0d0d0d]">
                    {item.question}
                  </span>

                  {/* Plus Icon */}
                  <span className="w-8 h-8 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className={`size-7
                    transition-transform duration-300 ease-in-out
                    origin-center
                    [transform-box:fill-box]
                    ${isOpen ? "rotate-45" : ""}
                  `}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-4 text-[#0d0d0d] font-normal text-sm">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
