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
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKTypography from "components/MKTypography";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={4}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item sx={{ p: 0, m: 0 }} xs={12} lg={12} ml={10} mr={10}>
            <Grid container justifyContent="flex-start">
              <MKTypography variant="body1" color="black" opacity={0.8} mt={1} mb={3}>
                Fundada em 2022, a Bella Arte Planejados surgiu preparada para proporcionar um
                atendimento diferenciado e ágil. Junto de uma equipe de profissionais qualificados,
                proporcionamos à sua casa excelência em móveis planejados para você e sua família
                aproveitarem de um ambiente renovado e confortável. Fundada em 2022, a Bella Arte
                <br />
                <br />
                Planejados surgiu preparada para proporcionar um atendimento diferenciado e ágil.
                Junto de uma equipe de profissionais qualificados, proporcionamos à sua casa
                excelência em móveis planejados para você e sua família aproveitarem de um ambiente
                renovado e confortável.
              </MKTypography>
              {/* <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Fully integrated"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Payments functionality"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Prebuilt components"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Improved platform"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid> */}
            </Grid>
          </Grid>
          {/* <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Get insights on Search"
              description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
