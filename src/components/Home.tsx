import * as React from 'react';
import QRious from 'qrious';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [hostname, setHostname] = useState('locahost');
  let [port, setPort] = useState(process.env.PORT || '5000');

  function createQRCode(hostname: string, port: string) {
    new QRious({
      element: document.getElementById('qr-div'),
      value: 'http://' + hostname + ':' + port,
      backgroundAlpha: 0,
      foreground: 'green',
      size: 225,
    });
  }

  function getServerInfo() {
    port = process.env.PORT || '5000';
    axios.get('http://localhost:' + port + '/serverInfo').then(response => {
      console.log('response', response);

      if (!response) {
        setTimeout(() => {
          getServerInfo();
        }, 100);
        return;
      }

      setPort(port);

      setHostname(response.data.hostname);

      createQRCode(response.data.hostname, response.data.port);
    });
  }

  React.useEffect(() => {
    getServerInfo();
  }, []);

  return (
    <div className="home">
      <h1>
        Take control of your{' '}
        <span className="secondary" id="headingBrand">
          Optishot!
        </span>
      </h1>
      <div className="row">
        <div className="column">
          <div>
            <canvas id="qr-div" />
          </div>
        </div>
        <div className="column">
          <ul>
            <li>On your phone or tablet, type the URL below in your browser or use the QR Code to open the remote</li>

            <li>{`On Mac, ensure the remote has access to use your keyboard: Settings > Security & Privacy > Accessbility > Click "Optishot Remote Controller"`}</li>
            <li>Connect your computer and phone/tablet to the same WiFi network</li>
            <li>Keep this application running</li>
            <li>Open Optishot and Enjoy!</li>
          </ul>
        </div>
      </div>
      <h2>
        <span>http://</span>
        <span className="host">{hostname}</span>
        <span>:{port}</span>
      </h2>
    </div>
  );
}
