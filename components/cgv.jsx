import React from "react";

const cgv = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <h1 className="text-3xl font-bold text-center border-b-4 pb-4">Conditions Générales de Vente</h1>
      <h2 className="text-xl font-semibold text-center border-b-4 pb-4">Précommande Lunétoile</h2>
      <p className="text-center text-lg font-semibold">Lunétoile</p>
      <p className="text-center text-gray-600">Dernière mise à jour : 31 mars 2025</p>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">1. Identification</h2>
        <p>Le présent site est édité par LEMAIRE Arthur, dont le siège social est situé 9 Rue Pascal 78470 Saint-Rémy lès Chevreuse, immatriculé sous le numéro SIREN 954040648.</p>
        <p>Contact : <a href="mailto:arthur-bicyclette@live.fr" className="text-blue-600 underline">arthur-bicyclette@live.fr</a></p>
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
          <li>Visuels non contractuels : le produit final peut légèrement différer des rendus 3D présentés.</li>
        </ul>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">4. Campagne de précommande</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Période de précommande : du 07 avril au 04 mai 2025 inclus.</li>
          <li>Aucune annulation ou modification possible après validation du paiement.</li>
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
      </section>
      
      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">6. Livraison</h2>
        <p>Expédition prévue au plus tard courant septembre 2025, sauf imprévus.</p>
        <p>En cas de réception d’un colis endommagé, veuillez contacter le transporteur et nous informer sous 7 jours.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">7. Absence de droit de rétractation</h2>
        <p>Conformément à l’article L221-28 du Code de la consommation, le droit de rétractation ne s’applique pas.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">8. Garanties</h2>
        <p>Le produit est couvert par la garantie légale de conformité et contre les vices cachés.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">9. Réduction chez les artistes</h2>
        <p>Les propriétaires du jeu bénéficient de 10 % de réduction chez les artistes participants.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">10. Propriété intellectuelle</h2>
        <p>Toutes les illustrations et contenus sont protégés et leur reproduction est interdite sans autorisation.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">11. Données personnelles</h2>
        <p>Les données personnelles sont utilisées uniquement pour traiter la commande, conformément au RGPD.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Droit applicable</h2>
        <p>Les présentes conditions sont régies par le droit français. En cas de litige, une solution amiable sera recherchée en priorité.</p>
      </section>
    </div>
  );
};

export default cgv;
