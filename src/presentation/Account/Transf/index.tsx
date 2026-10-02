import { useState } from "react";
import { Card, DateWrapper, GreetingWrapper, Heading, Texto } from "../styles";
import { Tranf } from "./Balance";
import { Container } from "../../../pages/Container";
import { Sidebar } from "../../Sidebar";

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

export const Transferencia = () => {
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

        <Tranf value={cont} />
        <GreetingWrapper>
          <Texto>
            Uma transferência bancária é a operação financeira pela qual o
            dinheiro é movimentado eletronicamente de uma conta bancária para
            outra, seja entre contas do mesmo titular ou para terceiros, no
            mesmo banco ou em instituições financeiras diferentes.
          </Texto>
          <Texto>
            Conferência de dados: Antes de confirmar e digitar sua
            senha/biometria, revise com atenção o nome completo e os últimos
            dígitos do CPF/CNPJ da pessoa ou empresa que receberá o valor.
          </Texto>
          <Texto>
            Limites de segurança: Os bancos estabelecem limites diários e
            noturnos para transferências (especialmente Pix) para prevenção
            contra fraudes. Você pode ajustar esses limites diretamente no
            aplicativo do seu banco.
          </Texto>
        </GreetingWrapper>
      </Card>
    </Container>
  );
};
