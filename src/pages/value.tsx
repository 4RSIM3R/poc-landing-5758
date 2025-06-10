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
          <p>Our Service</p>
          <h1>Tailored Strategies</h1>
          <p>No generic playbooks here.</p>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto py-16 grid grid-cols-12 gap-4"
        id="why-choose"
      >
        <div className="col-span-12 sm:col-span-6">
          <h1>Why Choose Tailored Strategies?</h1>
          <p>
            At Tailored Strategies, we understand that every business is unique.
            Our approach is to craft personalized strategies that align with
            your specific goals, challenges, and market dynamics. Whether you're
            a startup or an established enterprise, our solutions are designed
            to drive growth, efficiency, and long-term success.
          </p>
          <h2>Why Choose Our Tailored Strategies?</h2>
          <div></div>
        </div>
        <div className="col-span-12 sm:col-span-6"></div>
      </div>
      <div className="max-w-6xl mx-auto" id="our-process">
        <h1 className="text-4xl font-semibold">Our process</h1>
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
