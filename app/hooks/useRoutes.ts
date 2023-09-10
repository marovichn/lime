import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";
import { Citrus } from "lucide-react";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Lime",
        href: "/conversations",
        icon: Citrus,
        active: false,
        logo: true,
      },
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
        logo: false,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
        logo: false,
      },
      {
        label: "Logout",
        onClick: () => signOut(),
        href: "#",
        icon: HiArrowLeftOnRectangle,
        logo: false,
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoutes;
