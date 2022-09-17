/*
=========================================================
* React
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Bella Arte Planejados components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Bella Arte Planejados examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/quem_somos/cristina.png";
import team2 from "assets/images/quem_somos/julia.png";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Nosso time
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Algum texto...
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Cristina Neukamp"
                position={{ color: "info", label: "Projetista" }}
                description="Texto sobre cris..."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Júlia Luísa biegelmeyer"
                position={{ color: "info", label: "Projetista" }}
                description="Texto sobre julia..."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
