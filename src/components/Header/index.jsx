import React from "react"
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button'
import {
    SearchInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture,
} from './styles'

const Header = ({authenticated}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={ logo } alt="Logo da DIO"/>
                    {authenticated ? (
                        <>
                            <SearchInputContainer>
                                <Input placeholder="Buscar..."/>
                            </SearchInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {authenticated ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
                    ) : (
                        <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Entrar"/>
                            <Button title="Cadastrar"/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }