import React from "react";

const Cgventes = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <h1 className="text-3xl font-bold border-b-4 pb-4">Conditions Générales de Vente</h1>
      <h2 className="text-xl font-semibold border-b-4 pb-4">Précommande Lunétoile</h2>
      <p className="text-gray-600">Dernière mise à jour : 31 mars 2025</p>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">1. Identification</h2>
        <p>Le présent site est édité par LEMAIRE Arthur, dont le siège social est situé 9 Rue Pascal 78470 Saint-Rémy lès Chevreuse, immatriculé sous le numéro SIREN 954040648.</p>
        <p>Contact : arthur-bicyclette@live.fr</p>
        <p>En passant commande sur le site <a href="https://lunetoile.fr" className="text-blue-600 underline">lunetoile.fr</a>, le client déclare avoir pris connaissance et accepté sans réserve les présentes Conditions Générales de Vente.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">2. Objet</h2>
        <p>Les présentes conditions encadrent les ventes du jeu de cartes artistique Lunétoile, proposé en précommande en édition limitée.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">3. Caractéristiques du produit</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Jeu de cartes artistique, illustré par 82 artistes du tatouage.</li>
          <li>Produit éco-conçu, fabriqué en France.</li>
          <li>Comprend des cartes numérotées à la main.</li>
          <li>Visuels non contractuels : le produit final peut légèrement différer des rendus 3D présentés, sans que cela ne constitue un défaut de fabrication</li>
        </ul>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">4. Campagne de précommande</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Période de précommande : du 07 avril au 04 mai 2025 inclus.</li>
          <li>Toute commande passée pendant la période de précommande constitue un engagement définitif de l'acheteur. Aucun changement ou annulation ne pourra être pris en compte après validation du paiement, conformément à l'article L221-28 du Code de la consommation</li>
        </ul>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">5. Prix et paiement</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Prix TTC : 59,99 €</li>
          <li>TVA non applicable – article 293 B du CGI</li>
          <li>Paiement sécurisé par carte bancaire via Stripe.</li>
          <li>Livraison gratuite en France métropolitaine</li>
        </ul>
        <p>Le paiement s'effectue de manière sécurisée via Stripe. Les données bancaires ne sont ni stockées ni accessibles par Lunétoile.</p>
      </section>
      
      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">6. Livraison</h2>
        <ul className="list-disc pl-5 space-y-2">
            <li>Expédition prévue au plus tard courant septembre 2025, sauf imprévus ou difficultés exceptionnelles.</li>
            <li>En cas de précommandes insuffisantes, un report temporaire de l'impression pourra avoir lieu (le client en sera informé).</li>
            <li>Hors France métropolitaine, des frais supplémentaires pourront être demandés à l’expédition.</li>
            <li>Les colis sont remis au transporteur dans un emballage renforcé, mais une responsabilité directe ne peut être engagée en cas de dommage survenu pendant le transport. En cas de réception d'un colis visiblement endommagé, il appartient au client d'émettre une réclamation immédiate auprès du transporteur et de nous contacter dans un délai de 7 jours avec preuves à l'appui (photos, numéro de commande, description du dommage). Aucune réclamation ne pourra être acceptée passé ce délai.</li>
            <li>En cas d’erreur d’adresse, d’absence de nom visible sur la boîte aux lettres ou de retour du colis à l’expéditeur, une réexpédition pourra être proposée aux frais du client. Aucune réclamation ne pourra être acceptée si ces informations étaient incorrectes ou incomplètes.</li>
            <li>Les délais de livraison sont donnés à titre indicatif et peuvent être prolongés en cas de surcharge logistique ou de force majeure. Lunétoile ne pourra être tenu responsable de retards imputables au transporteur.</li>
        </ul>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">7. Absence de droit de rétractation</h2>
        <p>Conformément à l’article L221-28 du Code de la consommation, le droit de rétractation ne s’applique pas :</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>il s'agit d'un produit réalisé sur commande,</li>
            <li>en édition numérotée, destinéeà une production à la demande,</li>
            <li>Ce produit est fabriqué uniquement suite aux précommandes enregistrées.</li>
        </ul>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">8. Garanties</h2>
        <h3 className="text-lg font-semibold">Garantie légale de conformité</h3>
        <p>Vous bénéficiez de la garantie légale pendant deux ans. Cependant, notez que de légères différences peuvent exister entre les visuels de présentation et le produit final, sans que cela constitue un défaut.</p>
        <h3 className="text-lg font-semibold">Garantie contre les vices cachés</h3>
        <p>Le produit est également couvert par la garantie des vices cachés conformément aux articles 1641 à 1649 du Code civil.</p>
        <p>La garantie ne couvre pas les dommages causés par une mauvaise manipulation, une négligence du client ou une exposition anormale à l’humidité, à la chaleur ou à des produits chimiques.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">9. Réduction chez les artistes</h2>
        <p>Chaque propriétaire d'un jeu Lunétoile bénéficie de 10% de réduction chez les artistes participants (liste sur le site), sous conditions :</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>L'artiste est libre d'accepter ou non</li>
            <li>il est nécessaire de présenter la carte correspondante, que l'artiste signera pour activer la réduction (valable une fois).</li>
        </ul>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">10. Propriété intellectuelle</h2>
        <p>Toutes les illustrations et contenus sont protégés. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">11. Données personnelles</h2>
        <p>Les données personnelles collectées sont utilisées uniquement pour traiter votre commande. Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression en nous contactant à arthur-bicyclette@live.fr.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Droit applicable</h2>
        <p>Les présentes conditions sont régies par le droit français. En cas de litige, une solution amiable sera recherchée en priorité avant tout recours judiciaire. Le client peut également saisir une instance de médiation de la consommation reconnue.
        </p>
      </section>
    </div>
  );
};

export default Cgventes;

