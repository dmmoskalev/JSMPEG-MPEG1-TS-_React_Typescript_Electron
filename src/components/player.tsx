/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
import * as jsmpeg from '../static/jsmpeg.min.js';

interface PlayerProps {
  url: string;
  loop: boolean;
  autoplay: boolean;
}

export const Player: React.FC<PlayerProps> = ({ url, loop, autoplay }) => {
  // const url = dataurl;
  return (
    <>
      <script type="text/javascript" src="../static/jsmpeg.min.js" />
      <div
        className="jsmpeg"
        data-url={url}
        data-loop={loop}
        data-autoplay={autoplay}
      />
    </>
  );
};
