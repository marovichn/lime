import { FC } from "react";
import { Citrus } from "lucide-react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className='flex items-center justify-center bg-white w-full h-full'>
      <Citrus size={200} className='text-lime-500' />
      <h1 className='font-extrabold text-8xl text-lime-500 relative right-11 top-[3px] -rotate-[45deg]'>
        Lime
      </h1>
    </div>
  );
};

export default Logo;
