import React from "react";
import { v4 as uuid } from "uuid";
import { cn } from "../../helpers/cn.helper";
import { ReactSelectProps } from "../../types/react.props.type";
import { ArrowDownIcon, ErrorIcon } from "../../assets/icons";

export interface SelectProps extends ReactSelectProps, React.PropsWithChildren {
  label?: string;
  errorText?: string;
  variant?: "neutral" | "error";
}

export const Select = React.forwardRef(function Select(
  props: SelectProps,
  ref: React.ForwardedRef<HTMLSelectElement>
) {
  const {
    label,
    children,
    disabled,
    className,
    errorText,
    variant = "neutral",
    ...restProps
  } = props;
  const idSelect = uuid();

  const defaultCn = cn(
    "appearance-none w-full px-2 py-1 text-lg rounded-sm text-secondary font-medium border-2 border-[#D1E5D1] focus:border-[#D1E5D1] focus:outline-none",
    variant === "error" && "border-red-700 focus:border-red-700",
    disabled && "bg-gray-300"
  );

  const component = (
    <select
      ref={ref}
      id={idSelect}
      className={defaultCn}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </select>
  );

  const errorBlock = errorText && (
    <div className="flex text-red-700">
      <ErrorIcon className="size-5 mr-1 mt-1" />
      <span className="text-lg font-bold">{errorText}</span>
    </div>
  );

  return (
    <div className={cn("flex flex-col", className)}>
      {label && (
        <label htmlFor={idSelect} className="font-bold text-lg mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {component}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ArrowDownIcon className="w-5 h-5" />
        </div>
      </div>
      {errorBlock}
    </div>
  );
});
