import clsx from 'clsx';
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
  logo?:boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({ 
  label, 
  href, 
  icon: Icon, 
  active,
  onClick,
  logo
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handleClick} key={label}>
      {logo ? (
        <div className='flex items-center justify-center gap-x-3 my-3 mb-4'>
          <Icon className='h-8 w-8 shrink-0 text-lime-500' aria-hidden='true' />
          <span className='sr-only'>{label}</span>
        </div>
      ) : (
        <Link
          href={href}
          className={clsx(
            `
            group 
            flex 
            gap-x-3 
            rounded-md 
            p-3 
            text-sm 
            leading-6 
            font-semibold 
            text-gray-500 
            hover:text-black 
            hover:bg-gray-100
          `,
            active && "bg-gray-100 text-black"
          )}
        >
          <Icon className='h-6 w-6 shrink-0' aria-hidden='true' />
          <span className='sr-only'>{label}</span>
        </Link>
      )}
    </li>
  );
}
 
export default DesktopItem;