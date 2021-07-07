import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Text } from './styles';
import {
  alignEnum,
  elementByVariant,
  elementEnum,
  variantEnum,
} from './constants';

export { getStylesByVariant as getTypographyStylesByVariant } from './styles';

export const typographyVariant = variantEnum;

export const Typography = forwardRef(
  (
    {
      align,
      children,
      className,
      color,
      element,
      fluid,
      inline,
      marginTop,
      marginBottom,
      opacity,
      variant,
      ...props
    },
    ref
  ) => {
    const as = element || elementByVariant[variant];

    return (
      <Text
        align={align}
        as={as}
        className={className}
        color={color}
        fluid={fluid}
        inline={inline}
        marginTop={marginTop}
        marginBottom={do {
          if (typeof marginBottom === 'undefined') {
            if (as === elementEnum.p) {
              true;
            } else {
              false;
            }
          } else {
            marginBottom;
          }
        }}
        opacity={opacity}
        ref={ref}
        variant={variant}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

Typography.displayName = 'Typography';

Typography.defaultProps = {
  align: alignEnum.inherit,
  children: null,
  className: '',
  color: '',
  element: null,
  fluid: false,
  inline: false,
  marginTop: undefined,
  marginBottom: undefined,
  opacity: 1,
  variant: variantEnum.body1,
};

Typography.propTypes = {
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right']),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  element: PropTypes.string,
  fluid: PropTypes.bool,
  inline: PropTypes.bool,
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  marginBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'body1',
    'body2',
    'button',
    'list',
    'paragraph',
    'caption',
    'label',
  ]),
  opacity: PropTypes.number,
};

export { elementEnum as typographyElements };
