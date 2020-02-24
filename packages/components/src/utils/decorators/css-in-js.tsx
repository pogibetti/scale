import { h, getElement } from '@stencil/core';
import { ComponentInterface, VNode } from '@stencil/core/dist/declarations';
import jss, { StyleSheet } from 'jss';
import preset from 'jss-preset-default';
import { combineObjects, theme } from '../utils';
jss.setup(preset());

const supportsConstructibleStylesheets = (() => {
  try {
    return !!new CSSStyleSheet();
  } catch (e) {
    return false;
  }
})();

declare type CssInJsDecorator = (
  target: ComponentInterface,
  propertyKey: string
) => void;

export function CssInJs(className: string, styles: object): CssInJsDecorator {
  return (target: ComponentInterface, propertyKey: string) => {
    const { componentWillLoad } = target;
    if (!componentWillLoad) {
      // tslint:disable-next-line: no-console
      console.warn(
        `ConstructibleStyle requires you to have a \`componentWillLoad\` lifecycle method in \`${target.constructor.name}\`. Failure to add this function may cause ConstructibleStyle to fail due to StencilJS build optimizations.`
      );
    }

    if (supportsConstructibleStylesheets) {
      target.componentWillLoad = function() {
        const withDefaultTheme = combineObjects(styles, theme()[className]);
        const cssText = jss.createStyleSheet(
          combineObjects(withDefaultTheme, this.styles)
        );
        const willLoadResult =
          componentWillLoad && componentWillLoad.call(this);
        const host = getElement(this);
        const root = (host.shadowRoot || host) as any;
        this[propertyKey] = cssText as StyleSheet;
        root.adoptedStyleSheets = [
          getOrCreateStylesheet(this, target, cssText, propertyKey),
        ];

        host.forceUpdate();

        return willLoadResult;
      };

      const { render } = target;
      target.render = function() {
        const renderResult = render.call(this);
        const host = getElement(this);
        const root = (host.shadowRoot || host) as any;

        const cssRulesArray = root.adoptedStyleSheets[0].cssRules;
        let cssRules = '';
        for (let index = 0; index < cssRulesArray.length; index++) {
          cssRules += `${cssRulesArray[index].cssText
            .split(', .')
            .join(',\n.')
            .split('{ ')
            .join('{\n  ')
            .split('; ')
            .join(';\n  ')
            .split('  }')
            .join('}')}\n`;
        }

        prependStyleNode(
          renderResult,
          root.adoptedStyleSheets[0].cssRules[0].selectorText.replace('.', ''),
          cssRules
        );
        return renderResult;
      };
    } else {
      // tslint:disable-next-line: no-console
      return console.log('Something went wrong... CssInJs is not supported');
    }
  };
}

function prependStyleNode(node: VNode, componentName: string, cssString: any) {
  (node['$children$'] ?? []).unshift(
    <style type="text/css" css-in-js={componentName}>
      {cssString.toString()}
    </style>
  );
}

function getOrCreateStylesheet(
  instance: ComponentInterface,
  target: ComponentInterface,
  cssText: StyleSheet,
  propertyKey: string
): CSSStyleSheet {
  if (!target.__constructableStyle) {
    target.__constructableStyle = {};
  }

  const key = instance[propertyKey];

  if (!target.__constructableStyle[key]) {
    target.__constructableStyle[key] = new CSSStyleSheet();
    target.__constructableStyle[key].replace(cssText.toString());
  }

  return target.__constructableStyle[key];
}
