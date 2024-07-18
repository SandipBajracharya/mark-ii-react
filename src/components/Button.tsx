import PropTypes from 'prop-types';
import { ReactNode } from 'react';

type ButtonType = {
  type?: 'submit' | 'button' | 'reset';
  isIcon?: boolean;
  label?: string;
  title?: string;
  classes: string;
  onClickAction?: () => void;
  children?: ReactNode;
};

const Button: React.FC<ButtonType> = ({
  type,
  isIcon = false,
  label,
  title,
  classes,
  onClickAction,
  children,
}) => {
  return (
    <button
      type={type || null}
      className={
        !isIcon
          ? `${classes} hover:bg-opacity-90 uppercase text-gray py-2 px-4 rounded-md`
          : `${classes}`
      }
      onClick={onClickAction || null}
      title={title || ''}
    >
      {children ? children : label ? label : <></>}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  isIcon: PropTypes.bool,
  label: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.string,
  onClickAction: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
