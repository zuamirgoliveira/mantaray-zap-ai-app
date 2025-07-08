import React, { useEffect, useState } from 'react';
import { getSessionQRCode } from '../../services/wppconnect';
import QRCode from 'react-qr-code';

const Login: React.FC = () => {
  const [qr, setQr] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSessionQRCode()
      .then(code => setQr(code))
      .catch(err => setError(err.toString()));
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!qr)  return <div>Gerando QR…</div>;

  return (
    <div className="flex justify-center items-center h-full">
      <QRCode value={qr} size={256} />
    </div>
  );
};

export default Login;