// Values are exported in themes.scss file
// Import them into JS code with import themes from  '../../path/themes.scss';
// Then use like themes.primaryColor
declare module "*.scss?export" {
  const value: {
    primaryGray: string;
    primaryGreen: string;
    secondaryGray: string;
    darkGray: string;
    white: string;
    neutralWhite: string;
    neutralGrey50: string;
    neutralGrey100: string;
    neutralGrey200: string;
    neutralGrey300: string;
    neutralGrey400: string;
    neutralGrey500: string;
    neutralGrey600: string;
    neutralGrey700: string;
    neutralGrey800: string;
    neutralGrey900: string;
    neutralBlack: string;
    accentSuccessLight: string;
    accentSuccess: string;
    accentSuccessDark: string;
    accentErrorLight: string;
    accentError: string;
    accentErrorDark: string;
    accentWarningLight: string;
    accentWarning: string;
    accentWarningDark: string;
    accentInfoLight: string;
    accentInfo: string;
    accentInfoDark: string;
  };
  export = value;
}
