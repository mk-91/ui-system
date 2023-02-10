import { PropsWithChildren } from 'preact/compat';
import { Fragment, h } from 'preact';
import React from 'react';

import * as styles from './Button.module.css';
import { Primary } from './Button.stories';
import { Spinner } from '../../icons/Spinner';

interface ButtonProps {
  type?: 'button' | 'submit';
  disabled?: boolean;
  icon?: h.JSX.Element;
  isLoading?: boolean;
  onClick(): void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  disabled = false,
  variant = 'primary',
  isLoading,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const variantClass =
    variant === 'primary' ? styles.primary : styles.secondary;

  const getDisabledClassWithVariant = (): string => {
    if (disabled) {
      return variant === 'primary'
        ? styles.disabledPrimary
        : styles.disabledSecondary;
    }
  };

  const getLoadingClassWithVariant = (): string => {
    if (isLoading) {
      return variant === 'primary'
        ? styles.loadingPrimary
        : styles.loadingSecondary;
    }
  };

  const classNames = [
    styles.template,
    variantClass,
    getDisabledClassWithVariant(),
    getLoadingClassWithVariant(),
  ].join(' ');

  return (
    <button className={classNames} onClick={props.onClick} disabled={disabled}>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {props.children} {props.icon}
        </>
      )}
    </button>
  );
};
