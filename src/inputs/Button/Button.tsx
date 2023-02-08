import { PropsWithChildren } from 'preact/compat';
import { h } from 'preact';

import * as styles from './Button.module.css';

interface ButtonProps {}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  return <button>{props.children}</button>;
};
