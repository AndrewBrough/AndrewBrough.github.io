import { HeartIcon, HomeIcon, StarIcon } from "lucide-react";

export const StylesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl font-bold mb-4">Main</h1>
      <p className="text-lg mb-6">Testing Roboto font</p>
      <div className="flex items-center gap-4">
        <HomeIcon className="text-3xl text-blue-500" />
        <HeartIcon className="text-3xl text-red-500" />
        <StarIcon className="text-3xl text-yellow-500" />
      </div>
      <div className="mt-6 space-y-2">
        <p className="font-light">Light weight text</p>
        <p className="font-normal">Normal weight text</p>
        <p className="font-medium">Medium weight text</p>
        <p className="font-semibold">Semibold weight text</p>
        <p className="font-bold">Bold weight text</p>
        <p className="font-extrabold">Extra bold weight text</p>
      </div>

      <div className="flex flex-row gap-4 mt-6 space-y-2">
        <a href="https://daisyui.com/docs" className="btn btn-primary">
          DaisyUI Documentation
        </a>
        <a href="https://daisyui.com/components" className="btn btn-primary">
          DaisyUI Components
        </a>
        <a href="https://lucide.dev/icons" className="btn btn-primary">
          Lucide Icons
        </a>
      </div>
    </div>
  );
};
