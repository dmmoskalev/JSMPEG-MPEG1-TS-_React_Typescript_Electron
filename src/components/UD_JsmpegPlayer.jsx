import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JSMpeg from '@cycjimmy/jsmpeg-player';

export default class JsmpegPlayer extends Component {
  constructor(props) {
    super(props);

    this.els = {
      videoWrapper: null,
    };
  }

  componentDidMount() {
    // Reference documentation, pay attention to the order of parameters.
    // https://github.com/cycjimmy/jsmpeg-player#usage
    const { videoUrl } = this.props;
    const { options } = this.props;
    const { overlayOptions } = this.props;

    this.video = new JSMpeg.VideoElement(
      this.els.videoWrapper,
      { videoUrl },
      { options },
      { overlayOptions }
    );
/*
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.onRef) {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.onRef(this);
    }
    */
  }

  play() {
    this.video.play();
  }

  pause() {
    this.video.pause();
  }

  stop() {
    this.video.stop();
  }

  destroy() {
    this.video.destroy();
  }

  render() {
    const { wrapperClassName } = this.props;
    return (
      <div
        className={wrapperClassName}
        ref={(videoWrapper) => {
          this.els.videoWrapper = videoWrapper;
        }}
      />
    );
  }
}
JsmpegPlayer.propTypes = {
  wrapperClassName: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  options: PropTypes.exact({ poster: PropTypes.string }).isRequired,
  overlayOptions: PropTypes.objectOf(PropTypes.string).isRequired,
  onRef: PropTypes.func.isRequired,
};
