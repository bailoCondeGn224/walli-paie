import { forwardRef, HTMLInputTypeAttribute, useState } from "react";
import { v4 as uuid } from "uuid";
import { cn } from "../../helpers/cn.helper";
import {
  ReactInputProps,
  ReactTextareaProps,
} from "../../types/react.props.type";
import { ErrorIcon, EyeIcon, EyeSlashIcon } from "../../assets/icons";

interface BaseProps {
  variant?: "neutral" | "error";
  errorText?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
}

export interface TextInputProps extends BaseProps, ReactInputProps {
  multiline?: false;
}

export interface TextAreaProps extends BaseProps, ReactTextareaProps {
  multiline: true;
}

export type InputProps = TextInputProps | TextAreaProps;

export const Input = forwardRef(function Input(
  {
    className,
    errorText,
    disabled,
    label,
    type,
    variant = "neutral",
    multiline,
    ...restProps
  }: InputProps,
  ref: React.ForwardedRef<null>
) {
  const inputId = uuid();

  const defaultCn = cn(
    "border-2 border-[#D1E5D1] focus:border-[#D1E5D1]  focus:border-2 rounded-sm outline-none px-2 py-1 text-lg text-secondary font-medium placeholder:text-gray-500",
    variant === "error" && "border-red-700 focus:border-red-700",
    disabled && "bg-gray-300"
  );

  const [typeInput, setTypeInput] = useState<string>(type || "text");

  let component;

  if (multiline) {
    component = (
      <textarea
        ref={ref}
        id={inputId}
        className={cn(defaultCn)}
        disabled={disabled}
        {...(restProps as TextAreaProps)}
      />
    );
  } else {
    const { type } = restProps as TextInputProps;
    component = (
      <input
        ref={ref}
        id={inputId}
        type={typeInput}
        className={cn(
          defaultCn,
          type === "file" &&
            "px-1 text-[#666666] font-bold file:font-bold file:text-lg file:border-0 file:rounded-sm file:px-5 file:bg-[#DDDDDD]"
        )}
        disabled={disabled}
        {...(restProps as TextInputProps)}
      />
    );
  }

  const errorBlock = errorText && (
    <div className="flex text-red-700">
      <ErrorIcon className="size-5 mr-1 mt-1" />
      <span className="text-lg font-bold">{errorText}</span>
    </div>
  );

  const eyesBlock = type === "password" && (
    <div
      className="absolute top-[2.55rem] right-2 cursor-pointer"
      onClick={() =>
        setTypeInput((prevTypeInput) =>
          prevTypeInput === "password" ? "text" : "password"
        )
      }
    >
      {typeInput === "password" ? (
        <EyeSlashIcon className="w-5 h-5 text-secondary/85" />
      ) : (
        <EyeIcon className="w-5 h-5 text-secondary/85" />
      )}
    </div>
  );

  return (
    <div className={cn("flex flex-col relative", className)}>
      {label && (
        <label htmlFor={inputId} className="font-bold text-lg mb-1">
          {label}
        </label>
      )}
      {component}
      {eyesBlock}
      {errorBlock}
    </div>
  );
});
