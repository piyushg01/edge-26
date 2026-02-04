"use client";
import AnimationContainer from "@/components/animation-container";
import Lightup from "@/components/lightup";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/utils/constants/misc";
import { Bold } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AboutPage = () => {
  const [isLearnMore, setLearnMore] = useState(false);

  const teamMembers = [
    {
      name: "Vaishnav Bhor",
      role: "President",
      number: "+91 9876543210",
    },
    {
      name: "Piyush Bhutada",
      role: "President",
      number: "+91 8765432109",
    },
    {
      name: "Shubham Pathak",
      role: "Outreach Executive",
      number: "+91 7654321098",
    },
    {
      name: "Simran Roham",
      role: "Outreach Executive",
      number: "+91 6543210987",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <AnimationContainer delay={0.1} className="w-full">
         <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
          About EDGE'26
        </h1>
        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
          Explore, Develop, Grow, Excel
        </p>
        <MaxWidthWrapper>
          <AnimationContainer delay={0.1} className="w-full">
            <div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
              <MagicBadge title="New" />
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                What is E.D.G.E?
              </h1>
              <p className="text-base md:text-lg mt-6 text-center text-muted-foreground font-semibold">
                The world is full of blunt ambitions—EDGE is the force that sharpens your potential into a weapon of mass success.
              </p>
              <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                E.D.G.E is VIT Pune's Annual Student Summit—a two-day corporate simulation designed to replicate the intensity of recruitment drives. We bring together industry experts, HR professionals, and ambitious students to focus on one single goal: Employability.
              </p>
              <div className="flex items-center justify-center gap-x-4 mt-8">
                <Button size="sm" asChild>
                  <Link href="https://learner.vierp.in">Find Your Edge</Link>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setLearnMore((prev) => !prev)}
                >
                  {isLearnMore ? "Close" : "Learn more"}
                </Button>
              </div>
              {isLearnMore && (
                <div className="text-base md:text-lg mt-6 text-center text-muted-foreground space-y-4">
                  <h3 className="font-semibold text-lg">Why EDGE?</h3>
                  <p>
                    <span className="font-semibold">Purpose:</span> Refining the Raw, Defining the Professional.
                  </p>
                  <p>
                    The transition from a classroom to a boardroom is often the hardest leap a student makes. EDGE serves as the catalyst for this transformation. Its mission is to take your Genesis—that spark of raw technical potential—and evolve it into your Telos, the ultimate realization of a professional career. By sharpening soft skills through real-world simulations, the platform ensures aspirants don't just face the industry—they dominate it.
                  </p>
                  <p className="font-semibold text-lg pt-2">
                    Don't just make the cut. Be the EDGE.
                  </p>
                </div>
              )}
            </div>
          </AnimationContainer>
          <AnimationContainer delay={0.2} className="w-full">
            <div className="w-full flex max-w-4xl py-10 mx-auto">
              <Image
                src="/assets/thumbnail.png"
                alt="EDGE"
                width={1024}
                height={1024}
                className="w-full h-auto"
              />
            </div>
          </AnimationContainer>
          <AnimationContainer delay={0.3} className="w-full">
            <div className="py-14">
              <div className="mx-auto px-4 md:px-8">
                <h2 className="text-center text-sm font-medium font-heading text-muted-foreground uppercase">
                  Powered by Industry Leaders
                </h2>
                <div className="mt-8">
                  <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center py-8">
                    {COMPANIES.map((company) => (
                      <li key={company.name}>
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={80}
                          height={80}
                          quality={100}
                          className="w-28 h-auto"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimationContainer>

          {/* Team Details Section */}
          <AnimationContainer delay={0.4} className="w-full py-10">
            <div className="mx-auto text-center w-full">
              <h2 className="text-2xl md:text-3xl font-semibold font-heading mb-6">
                Contact Our Team
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="px-2 py-6 bg-card/30 backdrop-blur-lg rounded-lg ring-1 ring-border/40 shadow-lg"
                  >
                    <h3 className="text-xl font-medium">{member.name}</h3>
                    <p className="text-lg text-muted-foreground">
                      {member.role}
                    </p>
                    <p className="text-sm mt-2 text-muted-foreground">
                      {member.number}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimationContainer>

          <Lightup
  title={"Refining the Raw, Defining the Professional"}
  desc={
    "EDGE transforms your Genesis—raw technical potential—into your Telos, the ultimate realization of a professional career. Through real-world simulations, we ensure you don't just face the industry—you dominate it."
  }
/>
        </MaxWidthWrapper>
      </AnimationContainer>
    </div>
  );
};

export default AboutPage;