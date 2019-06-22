import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { defaultTheme } from '../../theme';

const styles = StyleSheet.create({
  root: {
    height: defaultTheme.button.md.mobile.height,
    width:"100%",  //defaultTheme.button.md.mobile.minWidth,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 2,
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textXs: {
    fontSize: 10,
  },
  textSm: {
    fontSize: 11,
  },
  primary: {
    backgroundColor: defaultTheme.palette.primary.main,
  },
  secondary: {
    backgroundColor: defaultTheme.palette.secondary.main,
  },
  dark: {
    backgroundColor: defaultTheme.palette.gray[500],
  },
  gray: {
    backgroundColor: defaultTheme.palette.gray[300],
  },
  error: {
    backgroundColor: defaultTheme.palette.error.main,
  },
  success: {
    backgroundColor: defaultTheme.palette.success.main,
  },
  xs: {
    height: defaultTheme.button.xs.mobile.height,
    width:"100%" //defaultTheme.button.xs.mobile.minWidth,
  },
  sm: { 
    height: defaultTheme.button.sm.mobile.height,
    width:"100%" //defaultTheme.button.sm.mobile.minWidth,
  },
});

const Button = ({
  scale,
  variant,
  outline,
  fullWidth,
  children,
  textStyle: textStyleProp,
  ...other,
}) => {
  const buttonStyles = [styles.root];
  const textStyles = [styles.text];

  if (fullWidth) buttonStyles.push(styles.fullWidth);

  switch (variant) {
    case 'primary':
      buttonStyles.push(styles.primary);
      break;
    case 'secondary':
      buttonStyles.push(styles.secondary);
      break;
    case 'dark':
      buttonStyles.push(styles.dark);
      break;
    case 'gray':
      buttonStyles.push(styles.gray);
      break;
    case 'error':
      buttonStyles.push(styles.error);
      break;
    case 'success':
      buttonStyles.push(styles.success);
      break;
    default:
      buttonStyles.push(styles.primary);
  }

  switch (scale) {
    case 'xs':
      buttonStyles.push(styles.xs);
      textStyles.push(styles.textXs);
      break;
    case 'sm':
      buttonStyles.push(styles.sm);
      textStyles.push(styles.textSm);
      break;
  }

  return (
    <TouchableOpacity activeOpacity={0.8} style={buttonStyles} {...other}>
      {typeof children === 'function' ? children({ textStyles }) : (<Text style={[textStyles, textStyleProp]}>{children}</Text>)}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  /** 
   * One of 'small', 'normal', 'big'
   */
  scale: PropTypes.string,
  /** 
   * Must be one of 'primary', 'secondary', 'dark', 'gray', 'error', 'success'
   */
  variant: PropTypes.string,
  outline: PropTypes.bool,
}
Button.defaultProps = {
  scale: 'normal',
  variant: 'primary',
  outline: false,
}

export default Button;
