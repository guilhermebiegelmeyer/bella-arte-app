// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

// Bella Arte Planejados components
import MKTypography from "components/MKTypography";

// Images
import logoPB from "assets/images/logos/logo-pb.jpg";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Bella Arte Planejados",
    image: logoPB,
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
      items: [{ name: "Sobre nós", route: "/pages/landing-pages/about-us" }],
    },
    {
      name: "Entre em contato",
      items: [{ name: "contato", href: "https://wa.me/5551997021790" }],
    },
    // {
    //   name: "Politicas e Privacidade",
    //   items: [
    //     { name: "terms & conditions", href: "#" },
    //     { name: "privacy policy", href: "#" },
    //     { name: "licenses (EULA)", href: "#" },
    //   ],
    // },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Todos os direitos reservados. Copyright &copy; {date}
    </MKTypography>
  ),
};
