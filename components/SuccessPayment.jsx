import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function SuccessPayment() {
  //   const router = useRouter(); // Access the router object
  //   const [sessionId, setSessionId] = useState(null);
  
  //   useEffect(() => {
  //     if (router.isReady) {
  //       const { session_id } = router.query; // Extract session_id
  //       console.log('router.query', router.query)
  //       if (session_id) {
  //         setSessionId(session_id);
  //         console.log('Session ID found:', session_id); // Log for debugging
  //       } else {
  //         console.warn('No session_id found in query parameters');
  //       }
  //     }
  //   }, [router.isReady, router.query]);


  // useEffect(() => {
  //   // Send mail only after sessionId is set
  //   const sendMails = async () => {
  //     if (!sessionId) return;

  //     try {
  //       console.log('sessionId_2', sessionId)
  //       const response = await fetch(`https://lunetoile-backend.vercel.app/testpayment/sendmails?sessionId=${sessionId}`);

  //       const result = await response.json();

  //       if (result.error) {
  //         console.error('Error sending mail:', result.error);
  //       } else {
  //         console.log('Mail sent successfully:', result);
  //       }
  //     } catch (err) {
  //       console.error('Error during sendMails request:', err.message);
  //     }
  //   };

  //   sendMails();
  // }, [sessionId]);

  return (
    <div className='bg-darkBlue w-screen min-h-screen flex justify-center items-center'>
      <div className='tracking-wider text-2xl text-white'><span className='text-gold text-2xl'>Merci</span> de votre achat</div>
    </div>
)
}

export default SuccessPayment;
