import classNames from "classnames";
import { ReactAnchorProps } from "../../types/react.props.type";
export interface LinkProps extends ReactAnchorProps {
  label: string;
}

export function Link({ label, className, ...restProps }: LinkProps) {
  return (
    <a
      className={classNames("font-bold text-xl cursor-pointer", className)}
      {...restProps}
    >
      {label}
    </a>
  );
}
