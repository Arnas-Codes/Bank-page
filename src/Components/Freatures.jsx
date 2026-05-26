import React from "react";

import IconOnline from "../assets/icon-online.svg";
import Onboarding from "../assets/icon-onboarding.svg";
import Budgeting from "../assets/icon-budgeting.svg";
import Api from "../assets/icon-api.svg";

const features = [
  {
    id: 1,
    image: IconOnline,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 2,
    image: Budgeting,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: 3,
    image: Onboarding,
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 4,
    image: Api,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const Features = () => {
  return (
    <section className="relative z-10 bg-gray-100 px-6 py-10 md:-mt-10 xl:-mt-30 lg:px-40">
      <div className="mx-auto max-w-360">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="pb-6 text-4xl font-light text-slate-800">
            Why choose Digitalbank?
          </h2>

          <p className="text-base leading-7 text-gray-600">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center gap-6 text-center md:items-start md:text-left"
            >
              <img src={feature.image} alt={feature.title} className="mb-2" />

              <h3 className="text-2xl font-light text-slate-800 md:text-lg">
                {feature.title}
              </h3>

              <p className="text-base leading-7 text-gray-600 md:text-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
