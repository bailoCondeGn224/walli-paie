import { CgSpinnerIcon } from "../../assets/icons";
import { ReactButtonProps } from "../../types/react.props.type";
import { cn } from "./../../helpers/cn.helper";

export interface ButtonProps extends ReactButtonProps {
  variant?: "primary" | "secondary" | "ternary" | "negative" | "danger";
  label?: string;
  isLoading?: boolean;
}

export function Button({
  className,
  variant = "primary",
  label,
  children,
  disabled,
  isLoading,
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center p-5 font-bold text-white h-10 rounded-sm cursor-pointer",
        variant === "primary" && "bg-[#1AB21A]",
        variant === "secondary" && "bg-[#E8F2E8] text-[#0D1C0D]",
        variant === "ternary" && "bg-ternary",
        variant === "negative" &&
          "text-[#0D1C0D] border-2 border-[#D1E5D1] py-3",
        variant === "danger" && "text-[#DB2E3B] border-2 border-[#DB2E3B] py-3",
        disabled && "bg-[#DDDDDD]",
        className
      )}
      disabled={disabled || isLoading}
      {...restProps}
    >
      {label ? label : children}
      {isLoading && <CgSpinnerIcon className="animate-spin size-6 ml-2" />}
    </button>
  );
}
