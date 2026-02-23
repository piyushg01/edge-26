import { COMPANIES } from "@/utils/constants/misc";
import AnimationContainer from "./animation-container";
import Image from "next/image";

const Sponsors = () => {
  return (
    <AnimationContainer delay={0.3} className="w-full">
      <section className="py-16">
        <div className="mx-auto px-4 md:px-8">
          <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase tracking-wider">
            Trusted by the best in the industry
          </h2>

          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-12">
            {COMPANIES.filter((company) => company.logo).map((company) => (
              <li
                key={company.name}
                className="
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-105
                "
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={220}
                  height={120}
                  quality={100}
                  className="
                    w-40 md:w-44 h-auto object-contain
                    opacity-80
                    hover:opacity-100
                    hover:drop-shadow-[0_0_14px_rgba(255,200,80,0.25)]
                    transition-all duration-300
                  "
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AnimationContainer>
  );
};

export default Sponsors;