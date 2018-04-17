import React from 'react';
import { decl } from 'bem-react-core';
import Card from 'b:Card m:size=small|large|medium';
import Header from 'e:Header';
import Container from 'e:Container';
import Wrapper from 'e:Wrapper';
import 'b:Font';

export default decl({
  block: 'App',

  willMount() {
    fetch('/data').then(res => res.json()).then((data) => {
      data = data.map((card) => {
        const { image } = card;
        if (image) {
          const { imageSize } = this.state;
          const imageId = parseInt(image.slice(4), 10);
          card.image = `/images/${imageId}${imageSize}.png`;
        }
        return card;
      });
      this.setState({ data });
    });
  },

  content() {
    return (
      <Container>
        <Header />
        <Wrapper>
          {this.state.data.map(card => <Card key={card.id} {...card} />)}
        </Wrapper>
      </Container>
    );
  },
});
