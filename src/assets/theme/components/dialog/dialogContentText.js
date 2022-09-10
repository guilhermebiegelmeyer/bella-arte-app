/**
=========================================================
* React
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Bella Arte Planejados base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Bella Arte Planejados helper functions
// import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;

export default {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
    },
  },
};
