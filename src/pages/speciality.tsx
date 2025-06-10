import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
        <h1>What is 360 Strategy?</h1>
        <p>
          Our 360 Strategy is a comprehensive, all-encompassing approach
          designed to address every facet of your business. From operations to
          marketing, technology to customer engagement, we integrate all
          elements into a cohesive strategy that drives sustainable growth and
          maximizes impact. This specialty ensures no stone is left unturned in
          your journey to success.
        </p>
        <h1>Key Components of 360 Strategy</h1>
      </div>
      <div className="bg-[#111827] w-full p-20" id="why-work">
        <h1>Why 360 Strategy Works</h1>
      </div>
      <div className="min-h-56 w-full relative" id="trailer">
        <img
          src="https://amt-it.com/wp-content/uploads/2022/03/Apa-perbedaan-WFH-dan-Remote-Working.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <p className="text-4xl font-semibold">
            Ready to Transform Your Business?
          </p>
          <Button className="rounded-full bg-emerald-400 text-black hover:bg-emerald-300">
            Let's Talk <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>  
    </div>
  );
};
