import styled from "styled-components";
import { Account } from "../presentation/Account";
import { Sidebar } from "../presentation/Sidebar";
import { Statement } from "../presentation/Statement";
import { TransactionForm } from "../presentation/TransactionForm";
import { useEffect, useState } from "react";
import { ITransaction } from "../domain/entities/ITransaction";
import { TransactionSupabaseRepository } from "../infra/supabase/TransactionSupabaseRepository";
import { ListAllTransactions } from "../domain/useCases/ListAllTransactions";
import { Container } from "./Container";

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const listTransactions = new ListAllTransactions(
  new TransactionSupabaseRepository(),
);

const Home = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    listTransactions.execute().then((data) => setTransactions(data));
  }, []);

  return (
    <>
      <Container>
        <Sidebar />
        <Main>
          <Account />
          <TransactionForm />
        </Main>
        <div>
          <Statement allTransactions={transactions} />
        </div>
      </Container>
    </>
  );
};

export default Home;
