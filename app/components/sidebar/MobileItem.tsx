import Link from "next/link";

import clsx from "clsx";

interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
  logo?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  icon: Icon,
  active,
  onClick,
  logo,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <>
      {logo ? (
        <div
          onClick={onClick}
          className={clsx(
            `
        group 
        flex 
        gap-x-3 
        text-sm 
        leading-6 
        font-semibold 
        w-full 
        justify-center 
        p-4 
        text-gray-500 
        hover:text-black 
        hover:bg-lime-100
      `,
            active && "bg-gray-100 text-black"
          )}
        >
          <Icon className='h-6 w-6 text-lime-500' />
        </div>
      ) : (
        <Link
          onClick={handleClick}
          href={href}
          className={clsx(
            `
        group 
        flex 
        gap-x-3 
        text-sm 
        leading-6 
        font-semibold 
        w-full 
        justify-center 
        p-4 
        text-gray-500 
        hover:text-black 
        hover:bg-gray-100
      `,
            active && "bg-gray-100 text-black"
          )}
        >
          <Icon className='h-6 w-6' />
        </Link>
      )}
    </>
  );
};

export default MobileItem;
