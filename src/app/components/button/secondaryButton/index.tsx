import React from 'react';
import { BaseButton, BaseButtonProps } from '../base';

export const SecondaryButton: React.FC<BaseButtonProps> = (props) => {
  return <BaseButton {...props} secondary />;
};


