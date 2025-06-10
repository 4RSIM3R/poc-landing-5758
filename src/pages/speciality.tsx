import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutGrid } from "lucide-react";

export const Speciality = () => {
  return (
    <div className="pt-32">
      <div
        className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto"
        id="banner"
      >
        <h1 className="font-semibold text-[#2FDDAD]">Our Specialties</h1>
        <h1 className="text-4xl font-semibold">360 Strategy</h1>
        <p className="text-base text-gray-300 text-center">
          Full-circle thinking for brands that want to grow smart.
        </p>
      </div>
      <div id="image-container" className="py-16">
        <img
          src="https://uptown.id/wp-content/uploads/2020/03/Fasilitas-Co-working-Space-Konsep-Ruangan-Yang-Fun.jpg"
          className="h-96 w-full object-cover"
          alt=""
        />
      </div>
      <div className="max-w-6xl mx-auto" id="what-is">
        <h1 className="text-4xl font-semibold">What is 360 Strategy?</h1>
        <p className="text-gray-300 mt-4 mb-16">
          Our 360 Strategy is a comprehensive, all-encompassing approach
          designed to address every facet of your business. From operations to
          marketing, technology to customer engagement, we integrate all
          elements into a cohesive strategy that drives sustainable growth and
          maximizes impact. This specialty ensures no stone is left unturned in
          your journey to success.
        </p>
        <h1 className="text-3xl font-semibold">
          Key Components of 360 Strategy
        </h1>
        <div className="grid grid-cols-12 gap-4 mt-8 mb-32">
          {Array.from({ length: 3 }).map((_, __) => (
            <div className="col-span-12 sm:col-span-4 border border-[#374151] rounded-md p-8 flex flex-col gap-4">
              <LayoutGrid className="text-[#2FDDAD] size-10 " />
              <h1 className="text-xl font-semibold mt-14">
                Business Consulting
              </h1>
              <p className="text-gray-300">
                We analyze your operations and market position to develop
                strategies that enhance performance and competitiveness.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#111827] w-full p-20" id="why-work">
        <h1 className="text-4xl font-semibold text-center">
          Why 360 Strategy Works
        </h1>
        <div className="grid grid-cols-12 gap-4 mt-16">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="col-span-12 sm:col-span-3 flex flex-col items-center justify-center gap-4">
              <div className="rounded-full bg-[#2FDDAD] p-4 text-white size-14 flex flex-col justify-center items-center">
                <span className="text-xl font-semibold">0{index + 1}</span>
              </div>
              <h1 className="text-xl text-center">Holistic Perspective</h1>
              <p className="text-center text-gray-300">
                We consider every aspect of your business to ensure alignment
                and synergy.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-80 w-full relative" id="trailer">
        <img
          src="https://amt-it.com/wp-content/uploads/2022/03/Apa-perbedaan-WFH-dan-Remote-Working.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="relative z-10 max-w-6xl mx-auto px-4 min-h-80 flex items-center justify-start"
          id="cta"
        >
          <div className="flex flex-col items-start justify-start ">
            <p className="text-4xl font-semibold text-white mb-4 max-w-sm">
              Ready to Transform Your Business?
            </p>
            <Button className="rounded-full bg-emerald-400 text-black hover:bg-emerald-300">
              Let's Talk <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
