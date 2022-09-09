import Typography from "typography";
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.6,
  headerFontFamily: ["Inconsolata", "Arial"],
  bodyFontFamily: ["Libre Baskerville", "serif"],
  scaleRatio: 2,
  overrideStyles: () => ({
    h1: {
      textAlign: "center",
      marginBottom: "60px",
      fontSize: "2.45rem"
    },
    img: {
      marginBottom: 0
    },
    ul: {
      marginLeft: 0,
      paddingLeft: "1.2rem"
    },
    "ul li": {
      paddingLeft: "0.5rem"
    },
    ol: {
      marginLeft: 0,
      listStyle: "none",
      counterReset: "ol",
      marginBottom: 0
    },
    "ol li": {
      counterIncrement: "ol",
      width: "100%"
    },
    "ol li:before": {
      content: "counter(ol) '.'",
      marginRight: "1em"
    },
    "p:last-child": {
      marginBottom: 0
    },
    "li:last-child": {
      marginBottom: 0
    }
  })
});
export default typography;
