/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navbar, SideBarProps } from "./sidebar.type";
import { NavLink } from "react-router-dom";
import { useSidebarHooks } from "./hooks/use-sidebar.hook";
import { cn } from "../../helpers/cn.helper";

export function NavBar({
  subMenu,
  onLogout,
  user,
  children,
  ...rest
}: SideBarProps) {
  const { toggleMenu, checkIsActiveMenu } = useSidebarHooks(subMenu!);

  return (
    <div className="w-full flex flex-col ">
      {subMenu?.map((item: Navbar) => {
        const isActiveMenu = checkIsActiveMenu(item);
        return (
          <ul key={item.id} className="flex flex-col space-y-0 ">
            <NavLink
              className={`flex items-center justify-between p-[6px] gap-[8px] cursor-pointer ${
                isActiveMenu ? "bg-[#E8F2E8]" : ""
              }`}
              onClick={() => toggleMenu(item.title)}
              to={item.url}
            >
              <button
                type="button"
                className="flex items-center space-x-1 text-[16px] leading-[20.83px]"
                {...rest}
              >
                {item.icon}
                <span>{item.title}</span>
              </button>
            </NavLink>
          </ul>
        );
      })}
    </div>
  );
}
export function SideBar({ user, subMenu, onLogout }: SideBarProps) {
  return (
    <div className="flex">
      <div
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
        className={cn(
          "w-[250px] h-full fixed inset-y-0 start-0 z-[59] px-1 ml-[10px] bg-[#F7FAF7] border-e border-[#E8F2E8] border-[1px]",
          "-translate-x-full transition-all duration-300 transform lg:translate-x-0",
          "top-[61px]"
        )}
      >
        <div className="h-[80%] overflow-auto">
          <div className="relative flex flex-col h-full">
            <div className="mb-[30px] h-full overflow-y-auto">
              <NavBar
                subMenu={subMenu}
                onLogout={onLogout}
                user={user}
                children
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
