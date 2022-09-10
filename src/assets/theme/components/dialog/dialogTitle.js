/**
=========================================================
* React
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Bella Arte Planejados base styles
import typography from "assets/theme/base/typography";

// Bella Arte Planejados helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};
