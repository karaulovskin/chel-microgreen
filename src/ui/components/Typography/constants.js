export const variantEnum = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body1: 'body1',
  body2: 'body2',
  button: 'button',
  list: 'list',
  paragraph: 'paragraph',
  caption: 'caption',
  label: 'label',
};

export const elementEnum = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  caption: 'caption',
  ul: 'ul',
  ol: 'ol',
  span: 'span',
  label: 'label',
};

export const elementByVariant = new Proxy(
  {
    [variantEnum.h1]: elementEnum.h1,
    [variantEnum.h2]: elementEnum.h2,
    [variantEnum.h3]: elementEnum.h3,
    [variantEnum.h4]: elementEnum.h4,
    [variantEnum.body1]: elementEnum.p,
    [variantEnum.body2]: elementEnum.p,
    [variantEnum.paragraph]: elementEnum.p,
    [variantEnum.caption]: elementEnum.span,
    [variantEnum.list]: elementEnum.ul,
    [variantEnum.button]: elementEnum.span,
    [variantEnum.label]: elementEnum.label,
  },
  {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }

      return elementEnum.p;
    },
  }
);

export const alignEnum = {
  inherit: 'inherit',
  left: 'left',
  center: 'center',
  right: 'right',
};