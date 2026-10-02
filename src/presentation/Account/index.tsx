import { useState } from "react";
import { Balance } from "./Balance";
import {
  BalanceWrapper,
  Card,
  DateWrapper,
  GreetingWrapper,
  Heading,
  Texto,
} from "./styles";

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

export const Account = () => {
  const [cont] = useState(
    () => Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
  );

  return (
    <Card>
      <GreetingWrapper>
        <DateWrapper>
          {new Date().toLocaleDateString("pt-BR", options)}
        </DateWrapper>

        <Heading>Olá, Joana!</Heading>
        <Texto>
          Todas as funcionalidades, transações e dados exibidos no sistema são
          simulados, não possuindo integração com nenhuma instituição financeira
          real, serviço de pagamento ou Banco Central, portanto, o aplicativo
          não funciona como um banco real e não processa operações financeiras
          verdadeiras.
        </Texto>
      </GreetingWrapper>
      <BalanceWrapper>
        <Balance value={cont} />
      </BalanceWrapper>
    </Card>
  );
};
