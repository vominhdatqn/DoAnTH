import React, { PureComponent } from 'react';
import { Text as RText, StyleSheet } from 'react-native';
import { defaultTheme } from '../../theme';

const { palette, typography } = defaultTheme;

const styles = StyleSheet.create({
  textBaseStyles: {
    fontSize: typography.mobile.common.fontSize,
    color: palette.text.secondary
  },
});

class Text extends PureComponent {

  render() {
    const {
      thin, regular, medium, bold, variant,
      primary, secondary, white, dark, grey, error,
      italic, textAlign, style, children, ...other
    } = this.props;
    let fontWeight = "400";
    if(thin) fontWeight = "300";
    if(regular) fontWeight = "400";
    if(medium) fontWeight = "500";
    if(bold) fontWeight = "bold";

    let color = palette.text.secondary;
    if(primary) color = palette.primary.main;
    if(secondary) color = palette.secondary.main;
    if(white) color = '#fff';
    if(dark) color = palette.text.primary;
    if(grey) color = palette.text.gray;
    if(error) color= palette.error.main;

    return (
      <RText
        allowFontScaling={false}
        style={[
          styles.textBaseStyles, 
          {
            fontStyle: italic ? "italic" : "normal",
            fontWeight,
            textAlign: textAlign || "left",
            color,
            ...typography.mobile[variant],
          },
          style
        ]}
        {...other}
      >
        {children}
      </RText>
    );
  }
}

Text.defaultProps = {
  fontWeight: "400",
  regular: false,
  thin: false,
  medium: false,
  bold: false,
  black: false,
  italic: false,
  tips: false
};

export default Text;
