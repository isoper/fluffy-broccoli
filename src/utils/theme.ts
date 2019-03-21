export const colors = {
  white: "#ffffff",
  primaryLight: "#97edcf",
  primary: "#47d7ce",
  primaryDark: "#1793ba",
  secondaryLight: "#195395",
  secondary: "#152367",
  secondaryDark: "#120d34",
  accentLight: "#e58e26",
  accent: "#e58e26",
  accentDark: "#e58e26"
};
const breakpoints = [320, 768, 992];

export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
