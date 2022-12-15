import { MdMail, MdLock } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";

import { Button } from "../../components/Button";

import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";

import { api } from "../../services/api";

import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  ForgotText,
  CreateText,
  Row,
  Wrapper
} from "./styles";

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange"
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&senha=${formData.senha}`
      );

      if (data.length && data[0].id) {
        navigate("/feed");
        return;
      }

      alert("Usuário ou senha inválido");
    } catch (e) {
      //TODO: HOUVE UM ERRO
    }
  };

  console.log("errors", errors);

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="E-mail"
                leftIcon={<MdMail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <ForgotText>Esqueci minha senha</ForgotText>
              <CreateText>Criar Conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
