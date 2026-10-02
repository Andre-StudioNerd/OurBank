import { Link } from "react-router-dom";
import { Container, List, ListItem, StyledHeader } from "./styles";
import { IconLogo } from "../../components/Icons";
import { Texto } from "./styles";

export const Footer = () => {
  return (
    <StyledHeader>
      <Container>
        <List>
          <ListItem>
            <Link to="/">
              <IconLogo />
            </Link>
          </ListItem>
        </List>
        <Texto>
          Este aplicativo foi desenvolvido exclusivamente para fins de estudo e
          composição de portfólio, atuando como um projeto demonstrativo de
          desenvolvimento de software e design de interface.
        </Texto>
      </Container>
    </StyledHeader>
  );
};
