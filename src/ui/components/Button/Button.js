import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({children}) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

export default Button;