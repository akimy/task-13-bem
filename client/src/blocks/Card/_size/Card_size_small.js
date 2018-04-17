import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core';

export default declMod(
  { size: 'small' },
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
        title, titleColor, image, description,
      } = this.props;
      if (image) {
        return (
          <Fragment>
            <h4
              className="Label YSText-Bold"
              style={{ color: titleColor }}>{title}
            </h4>
            <img className="Image" src={image} alt="" />
            <img src="./images/Heart.png" alt="" className="LikeIcon" />
          </Fragment>
        )
      }
      return (
        <Fragment>
          <h4
            className="Label YSText-Bold"
            style={{ color: titleColor, position: 'initial' }}>{title}
          </h4>
          <span className="Description YSText-Regular">{description}</span>
          <img src="./images/Heart.png" alt="" className="LikeIcon" />
        </Fragment>
      )
    },
  },
);
