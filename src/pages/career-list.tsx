import { Button } from "@/components/ui/button";
import { Clock, Dot } from "lucide-react";

export const CareerList = () => {
  return (
    <div>
      <div className="min-h-96 w-full relative" id="banner">
        <img
          src="https://amt-it.com/wp-content/uploads/2022/03/Apa-perbedaan-WFH-dan-Remote-Working.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 pt-32 max-w-6xl mx-auto px-4">
          <p className="text-2xl text-[#2FDDAD]">Career</p>
          <h1 className="text-4xl font-semibold mt-4 mb-2">Join Our Team</h1>
          <p className="text-gray-300">Bring your creative ideas to life </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-16">
        {Array.from({ length: 2 }).map((_, __) => (
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-6">
              <h1 className="text-4xl">Design</h1>
              <p className="text-gray-300 mt-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="col-span-12 sm:col-span-6">
              {Array.from({ length: 3 }).map((_, __) => (
                <div className="bg-[#111827] rounded-md p-8 grid grid-cols-12 gap-4 mb-8">
                  <div className="col-span-12">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-gray-300">
                          Product Designer
                        </p>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border border-[#2FDDAD] bg-transparent rounded-full hover:bg-transparent"
                        >
                          <Dot className="size-4 text-[#2FDDAD]" />
                          <span className="text-[#2FDDAD]">Design</span>
                        </Button>
                      </div>
                      <p className="text-xs text-gray-300">Remote</p>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <p className="text-gray-300">
                      Lorem ipsum dolor sit amet consectetur. Adipiscing aliquet
                      tempus nisl.
                    </p>
                  </div>
                  <div className="col-span-12">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 border border-[#1F2937] rounded-md pr-4 w-fit">
                        <Button className="bg-[#2FDDAD]">
                          <Clock className="size-4 text-white" />
                        </Button>
                        <p className="text-sm text-gray-300">Full Time</p>
                      </div>
                      <div className="flex items-center gap-2 border border-[#1F2937] rounded-md pr-4 w-fit">
                        <Button className="bg-[#2FDDAD]">
                          <Clock className="size-4 text-white" />
                        </Button>
                        <p className="text-sm text-gray-300">Full Time</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
