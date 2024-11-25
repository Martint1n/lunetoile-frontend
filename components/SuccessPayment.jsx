import React, { useEffect, useState } from 'react';

function SuccessPayment() {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    // Extract the session ID from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('session_id');
    setSessionId(id);
  }, []);

  useEffect(() => {
    // Send mail only after sessionId is set
    const sendMails = async () => {
      if (!sessionId) return;

      try {
        const response = await fetch('https://lunetoile-backend.vercel.app/testpayment/sendmails', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
        });

        const result = await response.json();

        if (result.error) {
          console.error('Error sending mail:', result.error);
        } else {
          console.log('Mail sent successfully:', result);
        }
      } catch (err) {
        console.error('Error during sendMails request:', err.message);
      }
    };

    sendMails();
  }, [sessionId]);

  return <div>Success Payment</div>;
}

export default SuccessPayment;
