import { Link } from "react-router-dom";
import { useAuthContext } from "../../app/hooks/useAuthContext";
import { Container, List, ListItem, StyledHeader } from "./styles";
import { AuthenticadedActionList } from "./AuthenticatedActionList";
import { UnauthenticadedActionList } from "./UnauthenticadedActionList";
import { IconLogo } from "../../components/Icons";

export const Header = () => {
  const { session } = useAuthContext();

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
        {session ? <AuthenticadedActionList /> : <UnauthenticadedActionList />}
      </Container>
    </StyledHeader>
  );
};
