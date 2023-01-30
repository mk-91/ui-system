import { PropsWithChildren } from "preact/compat";
import { h } from "preact";

interface ButtonProps {}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  return <button>{props.children}</button>;
};
