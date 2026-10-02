import { useState } from "react";
import { Card, DateWrapper, GreetingWrapper, Heading, Texto } from "../styles";

import { Container } from "../../../pages/Container";
import { Sidebar } from "../../Sidebar";
import { Invest } from "./Balance";

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

export const Investimento = () => {
  const [cont] = useState(
    () => Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
  );

  return (
    <Container>
      <Sidebar />
      <Card>
        <GreetingWrapper>
          <DateWrapper>
            {new Date().toLocaleDateString("pt-BR", options)}
          </DateWrapper>

          <Heading>Olá, Joana!</Heading>
          <Texto>
            Todas as funcionalidades, transações e dados exibidos no sistema são
            simulados, não possuindo integração com nenhuma instituição
            financeira real, serviço de pagamento ou Banco Central, portanto, o
            aplicativo não funciona como um banco real e não processa operações
            financeiras verdadeiras.
          </Texto>
        </GreetingWrapper>

        <Invest value={cont} />
        <GreetingWrapper>
          <Texto>
            Um investimento bancário é uma aplicação financeira oferecida por um
            banco, onde você empresta o seu dinheiro para a instituição (ou
            aplica através dela) por um determinado período em troca de uma
            rentabilidade (juros). Em termos simples: enquanto em um empréstimo
            é o banco que te empresta dinheiro e cobra juros de você, no
            investimento é você quem empresta dinheiro para o banco (ou para o
            governo/empresas via banco) e recebe juros por isso.
          </Texto>
          <Texto>
            Vantagens: Facilidade de aplicação pelo próprio aplicativo do banco,
            opções de alta liquidez (possibilidade de resgatar a qualquer
            momento, como no CDB com liquidez diária) e a proteção do FGC em
            vários produtos.
          </Texto>
          <Texto>
            Cuidados: Atenção às taxas de administração (em fundos), ao imposto
            de renda regressivo (que diminui quanto mais tempo o dinheiro fica
            aplicado) e a prazos de carência que possam travar o resgate do
            dinheiro antes do vencimento.
          </Texto>
        </GreetingWrapper>
      </Card>
    </Container>
  );
};
