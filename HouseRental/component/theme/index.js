import merge from 'deepmerge';
import common from './common';
import { defaultPalette } from './palette';

export const defaultTheme = merge(common, { palette: defaultPalette });

export const createCSTheme = props => merge.all([common, { palette: defaultPalette }, { ...props }]);
