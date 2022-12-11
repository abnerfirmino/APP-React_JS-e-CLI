import { MdMailOutline, MdLockOutline } from 'react-icons/md'

import { Header } from '../../components/Header';

import { Button } from '../../components/Button';

import { Input } from '../../components/Input';

import { Column, Container, CreateText, ForgotText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

const Login = () => {
    return (<>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu ligin e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder="E-mail" leftIcon={<MdMailOutline/>}/>
                        <Input placeholder="Senha" type="password" leftIcon={<MdLockOutline/>}/>
                        <Button title="Entrar" variant="secondary"/>
                    </form>
                    <Row>
                        <ForgotText>Esqueci minha senha</ForgotText>
                        <CreateText>Criar Conta</CreateText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }
