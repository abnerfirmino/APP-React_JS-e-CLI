import { MdMail, MdLock, MdPerson } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { Header } from "../../components/Header";

import { Button } from "../../components/Button";

import { Input } from "../../components/Input";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import { api } from "../../services/api";

import {
  Container,
  Title,
  Column,
  TitleRegister,
  SubtitleRegister,
  HaveAccountText,
  LoginText,
  ParagraphText,
  Row,
  Wrapper
} from "./styles";
import { IRegisterData } from "./types";

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Campo Obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
}).required();

const Register = () => {
  const navigate = useNavigate();

  const {
    control, handleSubmit, formState: { errors } } = useForm<IRegisterData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData: IRegisterData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      if(data.length === 1){
        navigate('/login')
      }else {
        alert('Email ou senha inválido')
      }
    }catch{
      alert('Houve um erro, tente novamente.')
    }
  };

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
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="fullName"
                errorMessage={errors?.fullName?.message}
                control={control}
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
              />
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdMail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>
            <Row>
              <ParagraphText>
                Ao clicar em "criar minha conta grátis", 
                declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
              </ParagraphText>
            </Row>
            <Row>
              <HaveAccountText>Já tenho conta.</HaveAccountText>
              <LoginText>Fazer Login</LoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
