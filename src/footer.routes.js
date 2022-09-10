// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

// Bella Arte Planejados components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Bella Arte Planejados",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.instagram.com/bellaarte_planejados",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/bellaarte_planejados/",
    },
  ],
  menus: [
    {
      name: "Empresa",
      items: [{ name: "Sobre nós", href: "https://www.creative-tim.com/presentation" }],
    },
    {
      name: "Portfólio",
      items: [{ name: "Serviços", href: "#" }],
    },
    {
      name: "Entre em contato",
      items: [{ name: "contato", href: "#" }],
    },
    {
      name: "Politicas e Privacidade",
      items: [
        { name: "terms & conditions", href: "#" },
        { name: "privacy policy", href: "#" },
        { name: "licenses (EULA)", href: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Todos os direitos reservados. Copyright &copy; {date} | Desenvolvido por Guilherme
      Biegelmeyer.
    </MKTypography>
  ),
};
