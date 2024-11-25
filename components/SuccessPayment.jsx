import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function SuccessPayment() {
  const router = useRouter(); // Access to the router object
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const { session_id } = router.query; // Extract session_id from the query parameters
      setSessionId(session_id);
      console.log('sessionId_1', sessionId)
    }
  }, [router.isReady, router.query]);


  useEffect(() => {
    // Send mail only after sessionId is set
    const sendMails = async () => {
      if (!sessionId) return;

      try {
        console.log('sessionId_2', sessionId)
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
