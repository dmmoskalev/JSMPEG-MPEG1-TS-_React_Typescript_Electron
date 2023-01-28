import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import JsmpegPlayer from '../components/JsmpegPlayer';

const videoOptions = {
  poster:
    'https://cycjimmy.github.io/staticFiles/images/screenshot/big_buck_bunny_640x360.jpg',
};

const videoOverlayOptions = {};

const Hello = () => {
  let jsmpegPlayer: {
    play: () => void;
    pause: () => void;
    stop: () => void;
  } | null = null;
  return (
    <div>
      <h1>Streaming IP Camera Nodejs</h1>
      <div className="Hello">
        <header className="App-header">
          <JsmpegPlayer
            wrapperClassName="video-wrapper"
            videoUrl="https://cycjimmy.github.io/staticFiles/media/big_buck_bunny_640x360.ts"
            // videoUrl="rtsp://admin:Admin123@212.233.126.11:40013/MediaInput/h264/stream_3"
            // videoUrl="ws://127.0.0.1:9999"
            options={videoOptions}
            overlayOptions={videoOverlayOptions}
            onRef={(
              ref: {
                play: () => void;
                pause: () => void;
                stop: () => void;
              } | null
            ) => {
              jsmpegPlayer = ref;
            }}
          />
          <div className="buttons-wrapper">
            <button type="button" onClick={() => jsmpegPlayer?.play()}>
              Play
            </button>
            <button type="button" onClick={() => jsmpegPlayer?.pause()}>
              Pause
            </button>
            <button type="button" onClick={() => jsmpegPlayer?.stop()}>
              Stop
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
