import React from 'react';
import { decl, Bem } from 'bem-react-core';
import Card from 'b:Card m:size=small|large|medium';
import Header from 'e:Header';
import Container from 'e:Container';
import Wrapper from 'e:Wrapper';
import '../../assets/fonts/fonts.css';

export default decl({
  block: 'App',
  tag: 'div',
  willMount() {
    fetch('/data').then(res => res.json()).then((data) => {
      data = data.map((card) => {
        const { image } = card;
        if (image) {
          const { imageSize } = this.state;
          const imageId = parseInt(image.slice(4));
          card.image = `/images/${imageId}${imageSize}.png`;
        }
        return card;
      });
      this.setState({ data });
    });
  },
  content() {
    return (
      <Bem block="App" elem="Container">
        <Header />
        <Bem block="App" elem="Wrapper" tag="main">
          {this.state.data.map(card => <Card key={card.id} {...card} />)}
        </Bem>
      </Bem>
    );
  },
});
