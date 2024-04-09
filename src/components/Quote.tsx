
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Quote = () => {
  const words = `"The customer support i recieved was exceptional, The support team
  went above and beyond to address my concerns"`;
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-3xl font-bold"> 
            <TextGenerateEffect words={words} />
          </div>
          <div className="max-w-md text-xl font-semibold mt-4">Dhairya Gupta</div>
          <div className="text-slate-400">Web | App developer</div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
