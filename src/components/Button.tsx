import React from 'react';
// import PropTypes from 'prop-types';
import { ReactNode } from 'react';

export type ButtonType = {
  isPrimary?: boolean;
  size?: string;
  type?: 'submit' | 'button' | 'reset';
  isIcon?: boolean;
  label?: string;
  title?: string;
  classes?: string;
  onClickAction?: () => void;
  children?: ReactNode;
};

const Button: React.FC<ButtonType> = ({
  isPrimary = true,
  type,
  isIcon = false,
  label,
  title,
  classes = '',
  onClickAction,
  children,
  size = 'md',
}) => {
  const mode = !isIcon ? (isPrimary ? 'bg-primary' : 'bg-secondary text-slate-600') : '';
  const sizeType =
    size === 'lg'
      ? 'text-lg py-2.5 px-5'
      : size === 'md'
        ? 'text-md py-2 px-4'
        : size === 'sm'
          ? 'text-sm py-2 px-4'
          : '';
  const iconType = !isIcon
    ? `${classes} hover:bg-opacity-90 uppercase text-gray py-2 px-4 rounded-md`
    : `${classes}`;

  return (
    <button
      type={type || null}
      className={`${mode} ${iconType} ${sizeType}`}
      onClick={onClickAction || null}
      title={title || ''}
    >
      {children ? children : label ? label : <></>}
    </button>
  );
};

// Button.propTypes = {
//   isPrimary: PropTypes.bool,
//   size: PropTypes.string,
//   type: PropTypes.oneOf(['submit', 'button', 'reset']),
//   isIcon: PropTypes.bool,
//   label: PropTypes.string,
//   title: PropTypes.string,
//   classes: PropTypes.string,
//   onClickAction: PropTypes.func,
//   children: PropTypes.node,
// };

export default Button;
