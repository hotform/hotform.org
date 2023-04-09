import React from 'react';

/* Styles */
import * as SC from './styles';

export interface HamburgerButtonProps extends SC.ButtonProps{
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onClick,
  open = false,
  timeout
}) => {
  return (
    <SC.Container onClick={ onClick }>
      <SC.Button
        open={ open }
        timeout={ timeout }
      />
    </SC.Container>
  );
}

export default HamburgerButton;