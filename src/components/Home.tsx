import * as React from 'react';
import QRious from 'qrious';
// import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

export default function Home() {
  React.useEffect(() => {
    new QRious({
      element: document.getElementById('qr-div'),
      value: 'http://hello4999',
    });
  }, []);

  return (
    <div>
      hey
      <canvas id="qr-div" />
    </div>
  );
}
