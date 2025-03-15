import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ErrorPage() {
  return (
    <div className="bg-midBlue w-screen min-h-screen text-white flex flex-col items-center justify-start gap-8 text-center px-6 py-12">
      <Link href="/">
        <Image src="/logo.svg" width={300} height={200} alt="Lunétoile logo" />
      </Link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-24 text-red-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </svg>
      <p className="body-l text-2xl mb-2">
        Une erreur est survenue lors de votre transaction.
        <br />
        Merci de réessayer.
      </p>
    </div>
  );
}
