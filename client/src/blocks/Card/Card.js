import React from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Card',
  tag: 'article',

  content() {
    return (
      <div>Абстрактная карточка</div>
    );
  },
});

