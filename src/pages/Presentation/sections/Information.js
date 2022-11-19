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

// Bella Arte Planejados examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Nossos
                    <br />
                    Serviços
                  </>
                }
                description=""
              />
              <RotatingCardBack
                image={bgBack}
                title="Descubra mais"
                description="Reconhecer é dar valor e possibilidades quase infinitas para compor e se emocionar. Por isso, criamos um mundo onde reconhecemos tendência, design, estilo e gente."
                action={{
                  type: "external",
                  route: "https://www.instagram.com/bellaarte_planejados",
                  label: "Ver todos os serviços",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="kitchen"
                  title="Cozinhas"
                  description="Com uma cozinha planejada você aproveita 100% do espaço, trazendo mais organização, praticidade e agilidade na hora de ocupar este cômodo."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="weekend"
                  title="Sala de estar"
                  description="Sendo a sala de estar o principal ambiente de nossas casas, é importante mantê-lo o mais confortável e aconchegante possível!"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 3 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="bedroomparent"
                  title="Quartos"
                  description="Aproveite mais às suas noites em um quarto que você mesmo idealizou e construiu. Os melhores materiais para a confecção de quarto é com a Dona Casa Móveis Planejados!"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="shower"
                  title="Banheiros"
                  description="Os projetos sob medida são pensados, principalmente, para um melhor aproveitamento do espaço."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
