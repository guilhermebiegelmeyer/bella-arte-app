/*
=========================================================
* React
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Bella Arte Planejados components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import whoWeAre from "assets/images/home/quem_somos.png";

function BuiltByDevelopers() {
  // const bgImage =
  //   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${whoWeAre})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Quem somos
          </MKTypography>
          <MKTypography variant="h1" color="white" mb={1}>
            Bella Arte Planejados
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            Fundada em 2022, a Bella Arte Planejados surgiu preparada para proporcionar um
            atendimento diferenciado e ágil. Junto de uma equipe de profissionais qualificados,
            proporcionamos à sua casa excelência em móveis planejados para você e sua família
            aproveitarem de um ambiente renovado e confortável.
          </MKTypography>
          <MKTypography
            component="a"
            href="/sobre-nos"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Leia mais <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
