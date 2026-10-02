import { useState } from "react";
import { Button } from "../../components/Button";
import { Fieldset } from "../../components/Fieldset";
import {
  Figure,
  Form,
  FormActions,
  Heading,
  Image,
} from "../../components/Form";
import { FormLabel } from "../../components/FormLabel";
import { TextField } from "../../components/TextField";
import { useAuthContext } from "../../app/hooks/useAuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const loginUser = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      await login(credentials.email, credentials.password);
      toast.success("Boas-vindas ao OurBank!");
      navigate("/home");
    } catch (error) {
      console.log("Falha ao efetuar login!", error);
      toast.error("Falha ao efetuar login. Confirme seu e-mail e senha.");
    }
  };

  return (
    <>
      <Figure>
        <Image src="/imgs/login.png" />
      </Figure>
      <div>
        <Heading>Login</Heading>
        <p>Preencha os dados do login.</p>
        <Form onSubmit={loginUser}>
          <Fieldset>
            <FormLabel>Email</FormLabel>
            <TextField
              name="email"
              type="email"
              placeholder="Digite seu email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </Fieldset>
          <Fieldset>
            <FormLabel>Senha</FormLabel>
            <TextField
              name="password"
              type="password"
              placeholder="Digite sua senha"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </Fieldset>
          <FormActions>
            <Button type="submit">Efetuar login</Button>
          </FormActions>
        </Form>
        <hr />
        <p>Usuário Teste:</p>
        <p>Email: gabi.insta80@gmail.com</p>
        <p>Senha: 1234567890</p>
      </div>
    </>
  );
};
