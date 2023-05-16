import React from 'react';
import { ButtonProps } from './types';

export enum ButtonType {
  Primary = 'btn-primary',
  Secondary = 'btn-secondary',
  Success = 'btn-success',
  Danger = 'btn-danger',
  Warning = 'btn-warning',
  Info = 'btn-info',
  Light = 'btn-light',
  Dark = 'btn-dark',
  Link = 'btn-link',
}

const Button: React.FC<ButtonProps> = ({ title, type }) => {
  return (
    <button type="button" className={`btn ${type} mt-3`}>
      {title}
    </button>
  );
};

export default Button;
