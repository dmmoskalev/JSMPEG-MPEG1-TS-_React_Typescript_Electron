import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy, useEffect, useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import JsmpegPlayer from '../components/JsmpegPlayer';

const videoOptions = {
  poster: 'https://booco.ru/wp-content/uploads/2022/04/logo.png',
};

const videoOverlayOptions = {};

const streamToShow = [
  { id: 0, videoUrl: 'ws://127.0.0.1:8082', isShowing: false },
  { id: 1, videoUrl: 'ws://127.0.0.1:8084', isShowing: false },
  { id: 2, videoUrl: 'ws://127.0.0.1:8086', isShowing: false },
];

const Hello = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let jsmpegPlayer: {
    play: () => void;
    pause: () => void;
    stop: () => void;
  } | null = null;
  return (
    <div>
      <h1 style={{ margin: '20' }}>Streaming IP Camera Nodejs</h1>
      <div className="Hello">
        {streamToShow.map((stream) => (
          <header className="App-header" key={stream.id}>
            {stream.isShowing && (
              <JsmpegPlayer
                wrapperClassName="video-wrapper"
                videoUrl={stream.videoUrl}
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
                keyProp={stream.videoUrl}
              />
            )}
          </header>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [count, setCount] = useState(0);
  function streamSelector(index: number) {
    for (let i = 0; i < streamToShow.length; i += 1) {
      streamToShow[i].isShowing = i === index;
      setCount(count + 1);
      console.log(`index:${i} = ${streamToShow[i].isShowing}`);
    }
  }
  useEffect(() => {
    console.log(`render updated`);
  });
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hello />
              <div>
                <div className="buttons-wrapper">
                  <button type="button" onClick={() => streamSelector(0)}>
                    Stream 1
                  </button>
                  <button type="button" onClick={() => streamSelector(1)}>
                    Stream 2
                  </button>
                  <button type="button" onClick={() => streamSelector(2)}>
                    Stream 3
                  </button>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}
