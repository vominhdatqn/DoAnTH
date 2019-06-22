const formatMs = milliseconds => `${Math.round(milliseconds)}ms`;

const breakpoints = {
  keys: [
    'xs',
    'sm',
    'md',
    'lg',
    'xl'
  ],
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
};

const mixins = {
  toolbar: {
    minHeight: 48,
    '@media (min-width:0px) and (orientation: landscape)': {
      minHeight: 48
    },
    '@media (min-width:960px)': {
      minHeight: 60
    }
  },
};

const shadows = [
  'none',
  '0 0 20px 0 rgba(0, 0, 0, 0.15)',
  '0px 15px 20px -5px rgba(0, 0, 0, 0.1)',
  '0px 10px 30px -5px rgba(0, 0, 0, .3)',
  '0 0 6px 0 rgba(0, 0, 0, 0.13)',
  '0 0 6px 0 rgba(0, 0, 0, 0.37)',
  '0 0 6px 0 rgba(39, 95, 186, 0.20)'
];

const typography = {
  desktop: {
    common: {
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
    },
    title: {
      fontSize: '2.25rem',
      fontWeight: 500,
      lineHeight: '1',
      color: '#4a4a4a'
    },
    pageTitle: {
      fontSize: '2.25rem',
      fontWeight: 500,
      lineHeight: '1',
      color: '#004c7e'
    },
    subheading: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5em',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    caption: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em'
    },
    button: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1,
    },
    h1: {
      color: '#4a4a4a',
      fontWeight: 500,
      fontSize: '2.25rem',
      lineHeight: 1,
    },
    h2: {
      color: '#4a4a4a',
      fontWeight: 500,
      fontSize: '1.375rem',
      lineHeight: 1,
    },
    h3: {
      color: '#4a4a4a',
      fontWeight: 400,
      fontSize: '1.25rem',
    },
    h4: {
      color: '#4a4a4a',
      fontWeight: 400,
      fontSize: '1rem',
    },
    overline: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase'
    },
  },
  mobile: {
    common: {
      fontSize: 13,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
    },
    title: {
      fontSize: '1.45rem',
      fontWeight: "500",
      lineHeight: '1',
      color: '#4a4a4a'
    },
    pageTitle: {
      fontSize: '1.25rem',
      fontWeight: "500",
      lineHeight: '1',
      color: '#004c7e'
    },
    subheading: {
      fontSize: '1rem',
      fontWeight: "400",
      lineHeight: '1.5em',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    caption: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: "400",
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em'
    },
    button: {
      fontWeight: "500",
      fontSize: '1rem',
      lineHeight: 1,
    },
    h1: {
      color: '#4a4a4a',
      fontWeight: "500",
      fontSize: '1.25rem',
      lineHeight: 1,
    },
    h2: {
      color: '#4a4a4a',
      fontWeight: "500",
      fontSize: '1.375rem',
      lineHeight: 1,
    },
    h3: {
      color: '#4a4a4a',
      fontWeight: "400",
      fontSize: '1.25rem',
    },
    h4: {
      color: '#4a4a4a',
      fontWeight: "400",
      fontSize: '1rem',
    },
    overline: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: "400",
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase'
    },
  },
};

const transitions = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  },
  duration: {
    shortest: 150,
    shorter: 200,
    'short': 250,
    standard: 300,
    complex: 375,
    long: 650,
    enteringScreen: 225,
    leavingScreen: 195
  }
};

transitions.create = (props = ['all'], options = {}) => {
  const {
    duration: durationOption = transitions.duration.standard,
    easing: easingOption = transitions.easing.easeInOut,
    delay = 0,
  } = options;

  return (Array.isArray(props) ? props : [props])
    .map(
      animatedProp =>
        `${animatedProp} ${
          typeof durationOption === 'string' ? durationOption : formatMs(durationOption)
        } ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`,
    )
    .join(',');
};
transitions.getAutoHeightDuration = (height) => {
  if (!height) {
    return 0;
  }

  const constant = height / 36;

  // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
};

const zIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};

const theme = {
  breakpoints,
  mixins,
  direction: 'ltr',
  overrides: {},
  palette: {},
  props: {},
  shadows,
  typography,
  shape: {
    borderRadius: 4
  },
  spacing: {
    unit: 15
  },
  transitions,
  zIndex,
  nprogress: {
    color: '#089cfb',
  },
  gutter: 15,
  button: {
    common: {
      border: 'none',
      padding: '5px 15px',
      transition: `all ${transitions.duration.shorter}ms ${transitions.easing.easeInOut}`,
      cursor: 'pointer',
      ':focus': {
        outline: 'none',
      },
      ':hover': {
        boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, .3)',
      }
    },
    xs: {
      desktop: {
        height: '32px',
        minWidth: 'auto',
        fontSize: '0.875rem'
      },
      mobile: {
        height: 22,
        minWidth: 96,
      },
    },
    sm: {
      desktop: {
        height: '32px',
        minWidth: '110px',
      },
      mobile: {
        height: 32,
        minWidth: 110,
      },
    },
    md: {
      desktop: {
        height: '46px',
        minWidth: '196px',
      },
      mobile: {
        height: 40,
        minWidth: 110,
      },
    },
  },
  avatar: {
    xs: {
      desktop: 44,
      mobile: 30, 
    },
    sm: {
      desktop: 68,
      mobile: 40, 
    },
    md: {
      desktop: 124,
      mobile: 58, 
    },
    lg: {
      desktop: 124,
      mobile: 85, 
    }
  },
  logo: {
    xs: {
      desktop: 68,
      mobile: 40, 
    },
    sm: {
      desktop: 68,
      mobile: 40, 
    },
    md: {
      desktop: 120,
      mobile: 60, 
    },
    lg: {
      desktop: 180,
      mobile: 90, 
    }
  },
  input: {
    common: {
      minHeight: '46px',
      background: '#fff',
      border: '1px solid rgba(111, 111, 111, 0.2)',
      borderColor: 'rgba(111, 111, 111, 0.2)',
      borderRadius: '4px',
      boxSizing: 'border-box',
      outline: 'none',
      padding: '0 15px',
      fontSize: '1rem',
    }
  }
}

export default theme;