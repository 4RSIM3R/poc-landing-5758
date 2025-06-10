import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { Link } from "react-router";

export const Home = () => {
  return (
    <div className="">
      <div className="relative min-h-screen w-full" id="banner">
        <img
          src="/assets/home_banner.webp"
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
        <img
          src="/assets/say_hello.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 max-w-6xl mx-auto min-h-screen">
          <div className="grid grid-cols-12 gap-4 min-h-screen">
            <div className="hidden col-span-12 sm:col-span-6 sm:flex sm:items-center sm:justify-center">
              {/* This column now has proper height matching with flex properties */}
            </div>
            <div className="col-span-12 sm:col-span-6 flex flex-col justify-center gap-4">
              <h1 className="text-4xl font-semibold">
                Say Hello to <span className="text-[#2FDDAD]">Your Next</span>{" "}
                Growth Partner
              </h1>
              <h1 className="text-3xl text-[#2FDDAD]">
                (a.k.a Maju Mapan – yes, we love wordplay)
              </h1>
              <p className="text-gray-300">
                We're a 360 digital agency that understands, every brand and
                campaign craves impact! That's why we craft tailor-made
                strategies to deliver results that truly hit the mark.
              </p>
            </div>
          </div>
        </div>
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
        <div className="grid grid-cols-12 mt-16 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="col-span-4 relative group overflow-hidden rounded-lg">
              <img
                src="/assets/net.svg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#242424] to-transparent 
                     group-hover:from-[#2FDDAD]/30 transition-colors duration-300 z-10"
              ></div>
              <div className="relative z-20 px-8 py-12 flex flex-col items-center justify-center h-full">
                <div className="size-11 bg-[#2FDDAD] rounded-md flex items-center justify-center">
                  <LayoutGrid className="size-6 text-white" />
                </div>
                <h1 className="text-xl font-semibold mt-8">
                  Tailored Strategies
                </h1>
                <p className="text-gray-300 text-center mt-2">
                  No generic playbooks here.
                </p>
                <p className="text-gray-300 text-center mt-4">
                  We build custom strategies powered by data and shaped by real
                  audience insights — because great brands deserve better than
                  “just okay.”
                </p>
                <Link
                  to="/value/tailored-strategies"
                  className="flex items-center gap-2 text-[#2FDDAD] hover:text-[#2FDDAD]/80 mt-4"
                >
                  Learn More
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
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
        <div className="grid grid-cols-12 gap-4 mt-16">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="col-span-12 sm:col-span-3 border border-[#374151] rounded-md p-8 flex flex-col gap-4 items-start justify-between">
              <div className="flex flex-col gap-4">
                <div className="size-11 bg-[#2FDDAD] rounded-md flex flex-col justify-center items-center">
                  <LayoutGrid className="size-6 text-white" />
                </div>
                <h1 className="text-xl font-semibold">360 Strategy </h1>
                <p className="text-base text-gray-300">
                  Full-circle thinking for brands that want to grow smart.From
                  comprehensive audit to integrated digital and KOL strategy, we
                  build the blueprint that moves the needle.
                </p>
              </div>
              <Link
                to="/speciality/360-strategy"
                className="flex items-center gap-2 text-[#2FDDAD] hover:text-[#2FDDAD]/80"
              >
                Learn More
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
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
        <div className="grid grid-cols-12 gap-4 mt-16">
          {Array.from({ length: 11 }).map((_, index) => (
            <div className="col-span-12 sm:col-span-3 border border-[#374151] rounded-md p-8 flex items-center justify-center">
              <img src="/assets/grab.svg" className="h-12 w-auto" alt="" />
            </div>
          ))}
          <div className="col-span-12 sm:col-span-3 border border-[#374151] rounded-md p-8 flex items-center justify-center">
            <p className="text-xl text=[]">Plus more names we’re proud of...</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-16" id="contact-us">
        <form className="border border-[#374151] p-10 w-full rounded-md flex flex-col gap-4 items-center">
          <h1 className="text-4xl font-semibold">
            Slide Into Our Inbox — We Don’t Bite!
          </h1>
          <div className="flex flex-col gap-2 w-full">
            <Label className="">Name</Label>
            <Input name="name" className="border border-[#374151]" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label className="">Email</Label>
            <Input
              name="email"
              type="email"
              className="border border-[#374151]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label className="">Phone</Label>
            <Input
              name="phone"
              type="tel"
              className="border border-[#374151]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label className="">Message</Label>
            <Textarea className="border border-[#374151]" />
          </div>
          <Button className="w-full rounded-full bg-emerald-400 text-black hover:bg-emerald-300">
            Let's Talk <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};
