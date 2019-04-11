import Typography from "typography";
import { rem } from "polished";

const typography = new Typography({
  googleFonts: [
    {
      name: "Montserrat",
      styles: [
        "100",
        "100i",
        "200",
        "200i",
        "300",
        "300i",
        "400",
        "400i",
        "500",
        "500i",
        "600",
        "600i",
        "700",
        "700i",
        "800",
        "800i",
        "900",
        "900i"
      ]
    },
    {
      name: "Secular One",
      styles: [
        "100",
        "100i",
        "200",
        "200i",
        "300",
        "300i",
        "400",
        "400i",
        "500",
        "500i",
        "600",
        "600i",
        "700",
        "700i",
        "800",
        "800i",
        "900",
        "900i"
      ]
    }
  ],
  baseFontSize: "22px",
  baseLineHeight: 1.666,
  scaleRatio: 2,
  headerFontFamily: [
    "Secular One",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  headerWeight: 500,
  bodyFontFamily: ["Montserrat", "serif"]
});

export default typography;
