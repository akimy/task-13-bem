import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core';

export default declMod(
  { size: 'large' },
  {
    block: 'Card',

    mods({ size }) {
      return {
        ...this.__base(...arguments),
        size,
      };
    },

    content() {
      const {
        image, title, description, titleColor,
      } = this.props;
      return (
        <Fragment>
          <img className="Image" src={image} alt="" />
          <div className="Content">
            <h4 className="Label YSText-Bold" style={{ color: titleColor }}>{title}</h4>
            <div className="Description YSText-Regular">
              {description}
            </div>
            <div className="Icons">
              <img src="./images/Actions.png" alt="actions" />
              <img className="LikeIcon" src="./images/Heart.png" alt="Like" />
            </div>
          </div>
        </Fragment>
      );
    },
  },
);
