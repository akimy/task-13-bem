import React from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'App',

  willInit() {
    this.state = {
      data: [],
      imageSize: '',
    };
  },
});
