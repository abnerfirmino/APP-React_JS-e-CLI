import React from "react";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Header } from "../../components/Header";

import avatarImage from "../../assets/avatar.png";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header authenticated={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
          <UserInfo
            nome="Abner Firmino"
            image={avatarImage}
            percentual={25}
          />
          <UserInfo
            nome="Abner Firmino"
            image={avatarImage}
            percentual={65}
          />
          <UserInfo
            nome="Abner Firmino"
            image={avatarImage}
            percentual={45}
          />
          <UserInfo
            nome="Abner Firmino"
            image={avatarImage}
            percentual={72}
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
