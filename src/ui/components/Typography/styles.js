import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { elementEnum, variantEnum } from './constants';
import { colors } from '../../constants';

export const getStylesByVariant = variant => {
  switch (variant) {
    case variantEnum.h1:
      return css`
        font-weight: 700;
        font-size: 32px;
        line-height: 1.125;
        letter-spacing: -0.4px;
      `;
    case variantEnum.h2:
      return css`
        font-weight: 700;
        font-size: 24px;
        line-height: 1.166;
        letter-spacing: -0.2px;
      `;
    case variantEnum.h3:
      return css`
        font-weight: 700;
        font-size: 20px;
        line-height: 1.2;
      `;
    case variantEnum.h4:
      return css`
        font-weight: 700;
        font-size: 16px;
        line-height: 1.25;
      `;
    case variantEnum.body1:
      return css`
        font-size: 16px;
        line-height: 1.25;
      `;
    case variantEnum.body2:
      return css`
        font-weight: 500;
        font-size: 12px;
        line-height: 1.3333333;
        letter-spacing: 0.2px;
      `;
    case variantEnum.button:
      return css`
        font-weight: 700;
        font-size: 16px;
        line-height: 1;
      `;
    case variantEnum.list:
      return css`
        ${({ as }) => css`
          padding-left: 14px;
          list-style-type: ${as === elementEnum.ol ? 'decimal' : 'disc'};
          &,
          & > li {
            font-weight: ${as === elementEnum.ol ? 400 : 500};
            font-size: 16px;
            line-height: 1.25;
          }
          & > li {
            display: list-item !important;
          }
        `};
      `;
    case variantEnum.paragraph:
      return css`
        font-size: 16px;
        line-height: 1.5;
      `;
    case variantEnum.caption:
      return css`
        color: ${colors.grey.A500};
        font-size: 12px;
        line-height: 1.3333333;
        letter-spacing: 0.2px;
      `;
    case variantEnum.label:
      return css`
        color: ${colors.grey.A500};
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 0.8px;
        line-height: 1.3333333;
      `;
    default:
      return css``;
  }
};

export const Text = styled.p`
  ${({ inline, variant, align, marginTop, marginBottom, color, fluid }) => css`
    font-family: 'Roboto', sans-serif;
    display: ${inline ? 'inline-flex' : 'block'};
    text-align: ${align};
    color: ${colors.grey['900']};
    margin: 0;
    padding: 0;
    transition: color 150ms linear;
    ${getStylesByVariant(variant)};
    ${marginTop &&
      css`
        margin-top: ${typeof marginTop === 'number' ? marginTop : 0}px;
      `};
    ${marginBottom &&
      css`
        margin-bottom: ${typeof marginBottom === 'number'
          ? marginBottom
          : 16}px;
        `};
    ${fluid &&
      css`
        width: 100%;
      `};
    ${color &&
      css`
        color: ${color};
      `};
  `};
`;

Text.propTypes = {
  className: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  inline: PropTypes.bool.isRequired,
  align: PropTypes.string.isRequired,
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
    .isRequired,
  marginBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
    .isRequired,
  fluid: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};
