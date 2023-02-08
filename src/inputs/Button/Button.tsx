import { PropsWithChildren } from 'preact/compat';
import { h } from 'preact';
import React from 'react';

import * as styles from './Button.module.css';
import { Primary } from './Button.stories';

interface ButtonProps {
  type?: 'button' | 'submit';
  disabled?: boolean;
  icon?: React.ReactElement;
  isLoading?: boolean;
  onClick(): void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  disabled = false,
  variant = 'primary',
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const variantClass =
    variant === 'primary' ? styles.primary : styles.secondary;

  const getDisabledClass = (): string => {
    if (disabled) {
      return variant === 'primary'
        ? styles.disabledPrimary
        : styles.disabledSecondary;
    }
    return '';
  };

  const classNames = [styles.template, variantClass, getDisabledClass()].join(
    ' '
  );

  return (
    <button className={classNames} onClick={props.onClick} disabled={disabled}>
      {props.children}
    </button>
  );
};
