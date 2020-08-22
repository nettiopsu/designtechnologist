import Typography from "typography";
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.6,
  headerFontFamily: ["Libre Baskerville", "serif"],
  bodyFontFamily: ["Libre Baskerville", "serif"],
  scaleRatio: 2,
  overrideStyles: () => ({
    h1: {
      textAlign: "center",
      marginBottom: "60px"
    },
    img: {
      marginBottom: 0
    }
  })
});
export default typography;
