"use client";

import { useState, FC } from "react";
import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import SettingsModal from "./SettingsModal";
import { User } from "@prisma/client";

interface MobileFooterProps {
  currentUser: User;
}

const MobileFooter: FC<MobileFooterProps> = ({ currentUser }) => {
  const [isOpenModal, setIsOpen] = useState(false);
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpenModal}
        onClose={() => setIsOpen(false)}
      />
      <div
        className='
        fixed 
        justify-between 
        w-full 
        bottom-0 
        z-40 
        flex 
        items-center 
        bg-white 
        border-t-[1px] 
        lg:hidden
      '
      >
        {routes.map((route) => {
          if (route.logo) {
            return <MobileItem
                key={route.href}
                href={route.href}
                active={route.active}
                icon={route.icon}
                onClick={()=>setIsOpen(true)}
                logo={route.logo}
                />
          } else {
            return (
              <MobileItem
                key={route.href}
                href={route.href}
                active={route.active}
                icon={route.icon}
                onClick={route.onClick}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default MobileFooter;
