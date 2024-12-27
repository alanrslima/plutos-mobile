export type ColorProps = {
  interactivePrimary: string;
  interactiveAccent: string;
  interactiveSecondary: string;

  backgroundScreen: string;
  backgroundElevated: string;
  backgroundNeutral: string;
  backgroundOverlay: string;

  background: string;
  onBackgroundPrimary: string;
  onBackgroundSecondary: string;
  onBackgroundDisabled: string;

  primary: string;
  onPrimaryPrimary: string;
  onPrimarySecondary: string;
  onPrimaryDisabled: string;

  secondary: string;
  onSecondaryPrimary: string;
  onSecondarySecondary: string;
  onSecondaryDisabled: string;

  surface: string;
  onSurfacePrimary: string;
  onSurfaceSecondary: string;
  onSurfaceDisabled: string;

  borderNeutral: string;

  whiteA50: string;
  whiteA100: string;
  whiteA200: string;
  whiteA300: string;
  whiteA400: string;
  whiteA500: string;
  whiteA600: string;
  whiteA700: string;
  whiteA800: string;
  whiteA900: string;

  blackA50: string;
  blackA100: string;
  blackA200: string;
  blackA300: string;
  blackA400: string;
  blackA500: string;
  blackA600: string;
  blackA700: string;
  blackA800: string;
  blackA900: string;

  positive25: string;
  positive50: string;
  positive100: string;
  positive200: string;
  positive300: string;
  positive400: string;
  positive500: string;
  positive600: string;
  positive700: string;
  positive800: string;
  positive900: string;

  negative25: string;
  negative50: string;
  negative100: string;
  negative200: string;
  negative300: string;
  negative400: string;
  negative500: string;
  negative600: string;
  negative700: string;
  negative800: string;
  negative900: string;

  green50: string;
  green100: string;
  green200: string;
  green300: string;
  green400: string;
  green500: string;
  green600: string;
  green700: string;
  green800: string;
  green900: string;

  red50: string;
  red100: string;
  red200: string;
  red300: string;
  red400: string;
  red500: string;
  red600: string;
  red700: string;
  red800: string;
  red900: string;

  blue50: string;
  blue100: string;
  blue200: string;
  blue300: string;
  blue400: string;
  blue500: string;
  blue600: string;
  blue700: string;
  blue800: string;
  blue900: string;

  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;

  orange50: string;
  orange100: string;
  orange200: string;
  orange300: string;
  orange400: string;
  orange500: string;
  orange600: string;
  orange700: string;
  orange800: string;
  orange900: string;
};

export type BorderProps = {
  0: string | number;
  1: string | number;
  2: string | number;
};

export type FontProps = {
  montserrat_regular: string;
  montserrat_medium: string;
  montserrat_semiBold: string;
  montserrat_bold: string;
  montserrat_black: string;
};

export type FontSizeProps = {
  text_xs: string;
  text_sm: string;
  text_md: string;
  text_lg: string;
  text_xl: string;
  display_xs: string;
  display_sm: string;
  display_md: string;
  display_lg: string;
  display_xl: string;
  display_2xl: string;
};

export type FontWeightProps = {
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
};

export type LineHeightProps = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
};

export type RadiiProps = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  round: string;
};

export type ShadowItemProps = {
  shadowColor: string;
  shadowOffset: {height: number; width: number};
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
};

export type ShadowProps = {
  lg: ShadowItemProps;
  xl: ShadowItemProps;
  '2xl': ShadowItemProps;
  '3xl': ShadowItemProps;
};

export type SizeProps = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
  14: string;
};

export type SpaceProps = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
  14: string;
};

export type ThemeProps = {
  borders: BorderProps;
  colors: ColorProps;
  fonts: FontProps;
  fontSizes: FontSizeProps;
  lineHeights: LineHeightProps;
  radii: RadiiProps;
  shadows: ShadowProps;
  sizes: SizeProps;
  spaces: SpaceProps;
  fontWeights: FontWeightProps;
};
