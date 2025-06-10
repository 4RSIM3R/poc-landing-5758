import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import { Clapperboard, Dot, MessageCircle, Share } from "lucide-react";

const tabs = [
  {
    name: "pnpm",
    value: "pnpm",
    content: "pnpm dlx shadcn@latest add tabs",
  },
  {
    name: "npm",
    value: "npm",
    content: "npx shadcn@latest add tabs",
  },
  {
    name: "yarn",
    value: "yarn",
    content: "npx shadcn@latest add tabs",
  },
  {
    name: "bun",
    value: "bun",
    content: "bunx --bun shadcn@latest add tabs",
  },
];

export const ArticleList = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto pt-32">
        <h1 className="text-4xl font-semibold">Explore Our Latest Insights</h1>
        <p className="mt-4 text-base text-gray-300">
          Stay informed with our expertly crafted articles covering business
          strategies, industry trends, and actionable advice. Whether you're
          looking to optimize operations, boost marketing efforts, or embrace
          new technologies, our articles provide the knowledge you need to stay
          ahead.
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-8">
        <Tabs defaultValue={tabs[0].value} className="w-full">
          <TabsList className="w-full p-0 bg-transparent justify-start border-b border-[#2FDDAD] rounded-none">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-none bg-transparent h-full data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary"
              >
                <code className="text-[13px]">{tab.name}</code>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="min-h-screen flex flex-col gap-4 mt-4"
            >
              {Array.from({ length: 5 }).map((_, __) => (
                <div className="bg-[#111827] rounded-md p-8 grid grid-cols-12 gap-4">
                  <div className="col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-gray-300">Strategy</p>
                          <Dot />
                          <p className="text-xs text-gray-300">Jan 11, 2024</p>
                        </div>
                        <p className="text-xs text-gray-300">5 Min Read</p>
                      </div>
                      <div>
                        <h1 className="text-4xl mt-8">
                          How Ultramilk Nailed It in Their Ramadan Campaign
                        </h1>
                        <p className="text-gray-300 mt-4">
                          This is why you should make your ad relevant and
                          really fun to get instant hook
                        </p>
                      </div>
                    </div>
                    <div className="flex items-end gap-4 flex-1">
                      <div className="flex items-center gap-2">
                        <Clapperboard className="size-4" />
                        <p className="text-gray-300">21</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="size-4" />
                        <p className="text-gray-300">21</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Share className="size-4" />
                        <p className="text-gray-300">21</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2"></div>
                  <div className="col-span-4 pl-20">
                    <img
                      src="/assets/value.png"
                      alt=""
                      className="size-80 object-cover rounded-md"
                    />
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
