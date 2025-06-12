import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, CopySlash, Dot, Mail } from "lucide-react";

export const CareerDetail = () => {
  return (
    <div className="pt-32 max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 sm:col-span-1">
          <Button
            variant="outline"
            className="border border-brand-500 bg-transparent hover:bg-transparent"
          >
            <ArrowLeft className="size-4 text-brand-500" />
          </Button>
        </div>
        <div className="col-span-12 sm:col-span-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-300">Remote</p>
            <p className="text-gray-300">Posted on 28 May</p>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-semibold">Product Designer</h1>
              <Button
                size="sm"
                variant="outline"
                className="border border-brand-500 bg-transparent rounded-full hover:bg-transparent"
              >
                <Dot className="size-4 text-brand-500" />
                <span className="text-brand-500">Design</span>
              </Button>
            </div>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Adipiscing aliquet tempus
              nisl.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border border-[#1F2937] rounded-md pr-4 w-fit">
                <Button className="bg-brand-500">
                  <Clock className="size-4 text-white" />
                </Button>
                <p className="text-sm text-gray-300">Full Time</p>
              </div>
              <div className="flex items-center gap-2 border border-[#1F2937] rounded-md pr-4 w-fit">
                <Button className="bg-brand-500">
                  <CopySlash className="size-4 text-white" />
                </Button>
                <p className="text-sm text-gray-300">10-30K $</p>
              </div>
            </div>
          </div>
          <hr className="bg-gray-300 my-8" />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold">Job Description</h1>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur. Sagittis gravida
                adipiscing platea parturient sit volutpat leo magna sociis.
                Pretium tortor donec convallis lacus viverra in. Pretium nisl
                amet id diam viverra. Lacus id molestie duis posuere sapien non.
                Magna volutpat quis cras facilisis scelerisque eros lectus nec
                tortor. Quis tristique in a gravida pellentesque dui.
                Ullamcorper urna nec pellentesque lorem viverra egestas lorem
                arcu est. Praesent dignissim risus non odio interdum bibendum.
                Malesuada elementum elementum semper fermentum mattis malesuada
                tempus enim risus. Sit enim tristique etiam augue nisi ut dui
                morbi. Est tincidunt a suspendisse nec. Ac urna pellentesque
                mattis nunc accumsan iaculis nunc mus pulvinar. Nam orci arcu
                enim nunc sed interdum morbi eget augue. Eget ipsum ac etiam
                velit.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold">Expertise</h1>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur. Sagittis gravida
                adipiscing platea parturient sit volutpat leo magna sociis.
                Pretium tortor donec convallis lacus viverra in. Pretium nisl
                amet id diam viverra. Lacus id molestie duis posuere sapien non.
                Magna volutpat quis cras facilisis scelerisque eros lectus nec
                tortor. Quis tristique in a gravida pellentesque dui.
                Ullamcorper urna nec pellentesque lorem viverra egestas lorem
                arcu est. Praesent dignissim risus non odio interdum bibendum.
                Malesuada elementum elementum semper fermentum mattis malesuada
                tempus enim risus. Sit enim tristique etiam augue nisi ut dui
                morbi. Est tincidunt a suspendisse nec. Ac urna pellentesque
                mattis nunc accumsan iaculis nunc mus pulvinar. Nam orci arcu
                enim nunc sed interdum morbi eget augue. Eget ipsum ac etiam
                velit.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold">Skill</h1>
              <p className="text-gray-300 pb-32">
                Lorem ipsum dolor sit amet consectetur. Sagittis gravida
                adipiscing platea parturient sit volutpat leo magna sociis.
                Pretium tortor donec convallis lacus viverra in. Pretium nisl
                amet id diam viverra. Lacus id molestie duis posuere sapien non.
                Magna volutpat quis cras facilisis scelerisque eros lectus nec
                tortor. Quis tristique in a gravida pellentesque dui.
                Ullamcorper urna nec pellentesque lorem viverra egestas lorem
                arcu est. Praesent dignissim risus non odio interdum bibendum.
                Malesuada elementum elementum semper fermentum mattis malesuada
                tempus enim risus. Sit enim tristique etiam augue nisi ut dui
                morbi. Est tincidunt a suspendisse nec. Ac urna pellentesque
                mattis nunc accumsan iaculis nunc mus pulvinar. Nam orci arcu
                enim nunc sed interdum morbi eget augue. Eget ipsum ac etiam
                velit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-3">
          <div className="bg-gray-900 p-8 rounded-xl flex flex-col gap-4">
            <div className="size-14 bg-brand-500 rounded-md flex items-center justify-center">
              <Mail className="size-6 text-white" />
            </div>
            <h1 className="mt-2 text-xl font-semibold">Apply this Job</h1>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Adipiscing aliquet tempus
              nisl.
            </p>
            <Button className="rounded-full bg-brand-500 text-black hover:bg-brand-500/80 mt-4">
              Let's Talk <ArrowRight className="ml-1 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
