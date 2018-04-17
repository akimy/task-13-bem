import React from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'App',
  elem: 'Header',
  tag: 'header',

  content() {
    return (
      <Bem block="Logo" src="/images/zen_logo@3x.png" tag="img" alt="Логотип Yandex Zen"/>
    );
  },
});

