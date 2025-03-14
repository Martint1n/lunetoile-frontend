import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

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
    <div className="bg-midBlue w-screen min-h-screen text-white flex flex-col items-center justify-center gap-8 text-center px-6 py-12">
      <Link href="/">
        <Image src="/logo.svg" width={300} height={200} alt="Lunétoile logo" />
      </Link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-24 text-green-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <div className="body-l">
        <p>Votre transaction a été complétée avec succès.</p>
        <p>Nous vous avons envoyé les détails de votre commande par email.</p>
      </div>
      <div className="body-l">
        <p className="body-l text-2xl mb-2 text-gold">
          Merci de faire rayonner Lunétoile
        </p>
        <p>N'hésitez pas à en parler autour de vous, ça nous aide vraiment !</p>
      </div>
    </div>
  );
}

export default SuccessPayment;
