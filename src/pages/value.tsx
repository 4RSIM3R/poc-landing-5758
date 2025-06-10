import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Value = () => {
  return (
    <div>
      <div className="min-h-96 w-full relative" id="banner">
        <img
          src="https://amt-it.com/wp-content/uploads/2022/03/Apa-perbedaan-WFH-dan-Remote-Working.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 pt-32 max-w-6xl mx-auto px-4">
          <p className="text-2xl text-[#2FDDAD]">Our Service</p>
          <h1 className="text-4xl font-semibold mt-4 mb-2">
            Tailored Strategies
          </h1>
          <p className="text-gray-300">No generic playbooks here.</p>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto py-16 grid grid-cols-12 gap-4"
        id="why-choose"
      >
        <div className="col-span-12 sm:col-span-6">
          <h1 className="text-4xl font-semibold">
            Why Choose Tailored Strategies?
          </h1>
          <p className="text-gray-300 mt-4 mb-8">
            At Tailored Strategies, we understand that every business is unique.
            Our approach is to craft personalized strategies that align with
            your specific goals, challenges, and market dynamics. Whether you're
            a startup or an established enterprise, our solutions are designed
            to drive growth, efficiency, and long-term success.
          </p>
          <h2 className="text-4xl font-semibold mb-8">
            Why Choose Our Tailored Strategies?
          </h2>
          {Array.from({ length: 3 }).map((_, __) => (
            <div className="p-6 border border-[#374151] rounded-md my-4">
              <h1 className="text-2xl text-[#2FDDAD]">Business Consulting</h1>
              <p className="text-gray-300 mt-4">
                We analyze your operations and market position to develop
                strategies that enhance performance and competitiveness.
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-12 sm:col-span-6 pl-42">
          <img
            src="/assets/value.png"
            alt=""
            className="w-full h-fit object-cover"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto" id="our-process">
        <h1 className="text-4xl font-semibold text-center">Our process</h1>
        <img
          src="/assets/process.svg"
          alt=""
          className="w-full h-80 object-contain mb-16"
        />
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
