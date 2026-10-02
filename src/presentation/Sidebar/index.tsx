import { Aside, Link, List, ListItem } from "./styles";

export const Sidebar = () => {
  return (
    <Aside>
      <nav>
        <List>
          <ListItem $active>
            <Link href="/">Início</Link>
          </ListItem>
          <ListItem>
            <Link href="/transferencias">Transferências</Link>
          </ListItem>
          <ListItem>
            <Link href="/investimentos">Investimentos</Link>
          </ListItem>
        </List>
      </nav>
    </Aside>
  );
};
