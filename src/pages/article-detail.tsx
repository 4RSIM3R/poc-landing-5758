import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const ArticleDetail = () => {
  return (
    <div className="max-w-6xl mx-auto pt-32">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-1">
          <Button
            variant="outline"
            className="border border-brand-500 bg-transparent hover:bg-transparent"
          >
            <ArrowLeft className="size-4 text-brand-500" />
          </Button>
        </div>
        <div className="col-span-12 sm:col-span-11">
          <div>

          </div>
        </div>
        <div className="col-span-12">
          <h1>Similar Article</h1>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-4 p-8 bg-gray-900">
              <p>Card Here</p>
            </div>
            <div className="col-span-12 sm:col-span-4 p-8 bg-gray-900">
              <p>Card Here</p>
            </div>
            <div className="col-span-12 sm:col-span-4 p-8 bg-gray-900">
              <p>Card Here</p>
            </div>
            <div className="col-span-12 sm:col-span-4 p-8 bg-gray-900">
              <p>Card Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
