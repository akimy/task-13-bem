import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core';

export default declMod(
  { size: 'medium' },
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
      return (
        <Fragment>
          <h4 className="Label YSText-Bold" style={{ color: titleColor }}>{title}</h4>
          <img className="Image" src={image} alt="" />
          <div className="DescriptionContainer">
            <span className="DescriptionText YSText-Regular">
              {description}
            </span>
            <div className="IconsContainer">
              <img className="ActionIcon" src="./images/Actions.png" alt="Actions" />
              <img className="LikeIcon" src="./images/Heart.png" alt="Like" />
            </div>
          </div>
        </Fragment>
      );
    },
  },
);
