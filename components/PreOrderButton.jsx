import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function PreOrderButton({
  color = "bg-gold",
  text = "text-black",
  hoverBg = "hover:bg-gold",
  hoverText = "hover:text-black",
}) {
  const router = useRouter();
  const [artistName, setArtistName] = useState("");

  useEffect(() => {
    if (router.query.artistHome) {
      setArtistName(router.query.artistHome);
      console.log(artistName);
    }
  }, [router.query.artist]);

  const preorderLink = artistName ? `/preorder/${artistName}` : "/preorder";

  return (
    <Link href={preorderLink} className="">
      <button
        className={`${color} ${text} rounded-full font-montserrat font-bold flex items-center justify-center ${hoverBg} ${hoverText} transition-all duration-300 px-8 py-4 whitespace-nowrap`}
      >
        <span className="body-xl tracking-wide">Précommander</span>
      </button>
    </Link>
  );
}

export default PreOrderButton;

