import * as React from 'react';
import QRious from 'qrious';
import axios from 'axios';
import { useState } from 'react';
// import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

export default function Home() {
  const [hostname, setHostname] = useState('locahost');
  let port = process.env.PORT || '4999';
  React.useEffect(() => {
    axios.get('http://localhost:' + port + '/serverInfo').then(response => {
      console.log('response', response);
      setHostname(response.data.hostname);
      new QRious({
        element: document.getElementById('qr-div'),
        value: 'http://' + response.data.hostname + ':' + response.data.port,
        backgroundAlpha: 0,
      });
    });
  }, []);

  return (
    <div>
      http://{hostname}:{port}
      <canvas id="qr-div" />
    </div>
  );
}
