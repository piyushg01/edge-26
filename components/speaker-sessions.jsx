import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import MagicCard from "./ui/magic-card";
import speakers from "@/utils/constants/speakers.json";
// import { Instagram, Linkedin, Twitter } from "lucide-react";

const SpeakerSessions = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker, id) => (
          <MagicCard key={id} className="p-0 md:p-0 relative w-80 sm:w-full">
            <Card className="group border-0 h-full">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center justify-center h-80 overflow-hidden">
                  {speaker.image ? (
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={1024}
                      height={1024}
                      unoptimized
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg flex items-center justify-center">
                      <span className="text-4xl font-bold text-neutral-600">{speaker.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-start justify-start mt-4">
                  <CardTitle className="text-lg font-semibold text-foreground/80 group-hover:text-foreground transition-all duration-300">
                    {speaker.name}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {speaker.description}
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </MagicCard>
        ))}
      </div>
    </div>
  );
};

export default SpeakerSessions;
