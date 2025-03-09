
/* eslint-disable @typescript-eslint/no-empty-object-type */
 
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  JSX,
  PropsWithChildren,
  SVGProps
} from 'react'

export type User = {
  name: string;
  role: string;
  profileImage: string;
};

export type Submenu = {
  title: string;
  url: string;
};

export type Navbar = {
  id: number;
  title: string;
  url: string;
  icon: JSX.Element;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export interface UserInfoProps {
  user: User;
  onLogout: () => void;
  logoutLabel?: string;
}

export interface NavProps extends HTMLAttributes<HTMLElement> {}

export interface SideBarProps extends PropsWithChildren {
  user: User;
  subMenu: Navbar[];
  onLogout: () => void;
}

export interface NavLinkIconProps extends SVGProps<SVGSVGElement> {
  isOpen: boolean;
}

export interface NavLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface NavItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  subMenu?: Submenu[];
}

export interface BarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  subMenu?: Navbar[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
