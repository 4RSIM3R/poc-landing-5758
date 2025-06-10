import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Home = () => {
  return (
    <div className="">
      <div className="relative min-h-screen w-full" id="banner">
        <img
          src="/assets/home.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-end h-screen max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-8">
            <img src="/assets/turning.svg" alt="" className="h-48" />
            <Button
              size="lg"
              className="rounded-full bg-emerald-400 text-black hover:bg-emerald-300"
            >
              Download Credential <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="relative min-h-screen w-full" id="say-hello">
        <div className="bg-emerald-200 absolute inset-0 w-full h-full object-cover"></div>
      </div>
      <div className="max-w-6xl mx-auto py-16" id="what-we-stand-for">
        <div className="flex flex-col items-center justify-center gap-4 max-w-sm mx-auto">
          <h1 className="text-4xl font-semibold">
            What We <span className="text-[#2FDDAD]">Stand for</span>
          </h1>
          <p className="text-base text-gray-300 text-center">
            Three beliefs guide everything we do — and yes, they make a
            difference.
          </p>
        </div>
        <div className="grid grid-cols-12 mt-16">
          <div className="col-span-4 relative">
            <img
              src="/assets/net.svg"
              alt=""
              className="absolute inset-0 w-full h-[50%] object-cover"
            />
            <div className="relative z-15 bg-gradient-to-t hover:from-[#2FDDAD]/30 from-[#242424] to-transparent h-full rounded-md mx-2"></div>
            <div className="relative z-10 px-8 py-12 flex flex-col justify-center items-center gap-16"></div>
          </div>
          <div className="col-span-4 relative">
            <img
              src="/assets/net.svg"
              alt=""
              className="absolute inset-0 w-full h-[50%] object-cover"
            />
            <div className="relative z-15 bg-gradient-to-t hover:from-[#2FDDAD]/30 from-[#242424] to-transparent h-full rounded-md mx-2"></div>
            <div className="relative z-10 px-8 py-12 mx-2"></div>
          </div>
          <div className="col-span-4 relative">
            <img
              src="/assets/net.svg"
              alt=""
              className="absolute inset-0 w-full h-[50%] object-cover"
            />
            <div className="relative z-15 bg-gradient-to-t hover:from-[#2FDDAD]/30 from-[#242424] to-transparent h-full rounded-md mx-2"></div>
            <div className="relative z-10 px-8 py-12 mx-2 "></div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-16" id="our-specialties">
        <div className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto">
          <h1 className="text-4xl font-semibold">
            Our <span className="text-[#2FDDAD]">Specialties</span>
          </h1>
          <p className="text-base text-gray-300 text-center">
            We build your brand across every platform — creating bold, cohesive
            campaigns that hit home with your audience.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-16" id="our-works">
        <div className="flex flex-col items-center justify-center gap-4 max-w-2xl mx-auto">
          <h1 className="text-4xl font-semibold">
            Our <span className="text-[#2FDDAD]">Works</span>
          </h1>
          <p className="text-base text-gray-300 text-center">
            Smart strategies. Bold executions. Measurable wins. That’s how we
            deliver impact
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-16" id="contact-us">
        <form className="border border-[#374151] p-10 w-full rounded-md flex flex-col gap-4 items-center">
          <h1 className="text-4xl font-semibold">
            Slide Into Our Inbox — We Don’t Bite!
          </h1>
          
        </form>
      </div>
    </div>
  );
};
