import React from "react";

import Currency from "../assets/image-currency.jpg";
import Restaurant from "../assets/image-restaurant.jpg";
import Plane from "../assets/image-plane.jpg";
import Confetti from "../assets/image-confetti.jpg";

const articles = [
  {
    id: 1,
    image: Currency,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single…",
  },
  {
    id: 2,
    image: Restaurant,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.",
  },
  {
    id: 3,
    image: Plane,
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don’t charge fees on purchases while abroad.",
  },
  {
    id: 4,
    image: Confetti,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta platform.",
  },
];

const Articles = () => {
  return (
    <section className="bg-gray-100 px-6 py-24 lg:px-40">
      <div className="mx-auto max-w-360">
        <div className="mb-14 text-center md:text-left">
          <h2 className="text-4xl font-light text-slate-800">
            Latest Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {articles.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden rounded-xl bg-white"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-56 w-full object-cover"
              />
              <div className="flex flex-col gap-4 p-6">
                <span className="text-xs text-gray-500">
                  By {article.author}
                </span>

                <h3 className="text-lg font-light leading-7 text-slate-800">
                  {article.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
