"use client";

import AnimationContainer from "@/components/animation-container";
import Lightup from "@/components/lightup";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Sponsors from "@/components/sponsors";
import MagicBadge from "@/components/ui/magic-badge";
import Image from "next/image";
import { motion } from "framer-motion";

/* Text-only animation for Lightup */
const textAnimation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* 🔹 SUBTLE TIMELINE HOVER */
const timelineHover = {
  y: -1,
  boxShadow: "0 6px 18px rgba(255, 215, 100, 0.12)",
  backgroundColor: "rgba(255, 215, 100, 0.035)",
};

const MainEventPage = () => {
  return (
    <>
      <MaxWidthWrapper>
        {/* Header */}
        <AnimationContainer delay={0.1} className="w-full">
          <div className="flex flex-col items-center justify-center py-12 max-w-xl mx-auto">
            <MagicBadge title="Flagship Event" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold font-heading text-center mt-6 !leading-tight">
              MOCK GDPI
            </h1>
            <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
              A two-day flagship experience designed to sharpen communication,
              confidence, career clarity, and placement readiness.
            </p>
          </div>
        </AnimationContainer>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6 place-content-center">
          {[
            {
              title: "Group Discussions",
              img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1184&auto=format&fit=crop",
              desc:
                "Experience real interview-style group discussions that test your clarity of thought, teamwork, and leadership skills.",
            },
            {
              title: "Personal Interviews",
              img: "https://images.unsplash.com/photo-1622674777904-386b3ef30c4a?q=80&w=870&auto=format&fit=crop",
              desc:
                "One-on-one mock interviews with expert feedback to help you crack technical and HR rounds with confidence.",
            },
          ].map((item, i) => (
            <AnimationContainer delay={0.2} key={i}>
              <div className="flex flex-col items-center space-y-4 py-10">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={720}
                  height={720}
                  className="w-full h-[360px] rounded-lg object-cover"
                />
                <MagicBadge title={item.title} />
                <p className="text-muted-foreground text-center">
                  {item.desc}
                </p>
              </div>
            </AnimationContainer>
          ))}
        </div>

        {/* Schedule */}
        <AnimationContainer delay={0.3} className="w-full mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
              Event Schedule
            </h2>

            {/* Friday */}
            <div className="mb-14">
              <h3 className="text-xl font-semibold text-center mb-6">
                Friday – Day 1
              </h3>
              <table className="w-full border border-muted/40 rounded-xl overflow-hidden">
                <thead className="bg-muted/20">
                  <tr>
                    <th className="border border-muted/40 p-4">Activity</th>
                    <th className="border border-muted/40 p-4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Panel Discussion", "2.00 PM – 3.15 PM"],
                    ["Outreach Activity", "3.15 PM – 3.30 PM"],
                    ["Workshop", "3.30 PM – 4.15 PM"],
                    ["Break", "4.15 PM – 4.30 PM"],
                    ["Speaker Session", "4.30 PM – 5.30 PM"],
                    ["Jamming Session (Band / Standup)", "5.30 PM – 6.00 PM"],
                  ].map(([a, t], i) => (
                    <motion.tr
                      key={i}
                      whileHover={timelineHover}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 22,
                      }}
                      className="cursor-pointer"
                    >
                      <td className="border border-muted/40 p-4">{a}</td>
                      <td className="border border-muted/40 p-4">{t}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Saturday */}
            <div>
              <h3 className="text-xl font-semibold text-center mb-6">
                Saturday – Day 2
              </h3>
              <table className="w-full border border-muted/40 rounded-xl overflow-hidden">
                <thead className="bg-muted/20">
                  <tr>
                    <th className="border border-muted/40 p-4">Activity</th>
                    <th className="border border-muted/40 p-4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Technical Test (Mock GDPI)", "9.00 AM – 10.00 AM"],
                    ["Group Discussions", "9.00 AM – 3.00 PM"],
                    ["Technical & HR Interviews", "As per schedule"],
                  ].map(([a, t], i) => (
                    <motion.tr
                      key={i}
                      whileHover={timelineHover}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 22,
                      }}
                      className="cursor-pointer"
                    >
                      <td className="border border-muted/40 p-4">{a}</td>
                      <td className="border border-muted/40 p-4">{t}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimationContainer>

        {/* Deep Dive Content */}
        <AnimationContainer delay={0.4} className="w-full mt-28">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                badge: "Panel Discussion",
                title: "Career Roadmap & Goal Setting Session",
                items: [
                  "How to choose your path (tech, non-tech, higher studies ,entrepreneurship)",
                  "How to set realistic goals",
                  "Planning internships & projects",
                  "Career confusion solutions",
                  "Build a 2-year or 5-year career plan",
                ],
              },
              {
                badge: "Speaker Session",
                title: "Your 20s: How to Plan, Grow & Take Control of Your Life",
                items: [
                  "Life lessons",
                  "Mindset building",
                  "Habits",
                  "Confidence & self-discovery",
                  "Personal growth",
                  "Handling failures",
                  "Taking responsibility",
                ],
              },
              {
                badge: "Workshop",
                title: "Resume Building with AI",
                items: [
                  "Create professional resumes using AI tools",
                  "Write strong bullet points with AI",
                  "Tailor resumes for specific roles",
                  "Improve resumes using ATS checkers",
                  "Structure resumes for placements & internships",
                ],
              },
            ].map((block, i) => (
              <AnimationContainer delay={0.1 * i} key={i}>
                <div className="rounded-2xl p-6 border border-muted/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(255,215,0,0.08)]">
                  <MagicBadge title={block.badge} />
                  <h3 className="text-xl font-semibold mt-3">
                    {block.title}
                  </h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2 mt-4">
                    {block.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </AnimationContainer>
            ))}
          </div>
        </AnimationContainer>

        <Sponsors />
      </MaxWidthWrapper>

      {/* CTA */}
      <motion.div
        variants={textAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Lightup
          title="Not Just an Event — A Career Turning Point"
          desc="EDGE MOCK GDPI is a flagship experience combining clarity, confidence, mentorship, and execution. Walk out with skills, direction, and a winning mindset."
        />
      </motion.div>
    </>
  );
};

export default MainEventPage;
