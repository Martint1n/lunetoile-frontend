import React from "react";

const cgv = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <h1 className="text-3xl font-bold text-center border-b-4 pb-4">Conditions Générales de Vente</h1>
      <h2 className="text-xl font-semibold text-center border-b-4 pb-4">Précommande Lunétoile</h2>
      <p className="text-center text-gray-600">Dernière mise à jour : <strong>31 mars 2025</strong></p>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">1. Identification</h2>
        <p>Le présent site est édité par <strong>LEMAIRE Arthur</strong>, dont le siège social est situé <strong>9 Rue Pascal 78470 Saint-Rémy lès Chevreuse</strong>, immatriculé sous le numéro <strong>SIREN 954040648</strong>.</p>
        <p><strong>Contact :</strong> <a href="mailto:arthur-bicyclette@live.fr" className="text-blue-600 underline">arthur-bicyclette@live.fr</a></p>
        <p>En passant commande sur le site <a href="https://lunetoile.fr" className="text-blue-600 underline">lunetoile.fr</a>, le client déclare avoir pris connaissance et accepté sans réserve les présentes Conditions Générales de Vente.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">2. Objet</h2>
        <p>Les présentes conditions encadrent les ventes du <strong>jeu de cartes artistique Lunétoile</strong>, proposé en précommande en édition limitée.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">3. Caractéristiques du produit</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Jeu de cartes artistique</strong>, illustré par <strong>82 artistes du tatouage</strong>.</li>
          <li><strong>Produit éco-conçu</strong>, fabriqué en France.</li>
          <li>Comprend des cartes <strong>numérotées à la main</strong>.</li>
          <li><strong>Visuels non contractuels</strong> : le produit final peut légèrement différer des rendus 3D présentés.</li>
        </ul>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">4. Campagne de précommande</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Période de précommande</strong> : du <strong>07 avril au 04 mai 2025 inclus</strong>.</li>
          <li><strong>Aucune annulation ou modification possible</strong> après validation du paiement.</li>
        </ul>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">5. Prix et paiement</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Prix TTC</strong> : <strong>59,99 €</strong></li>
          <li><strong>TVA non applicable</strong> – article 293 B du CGI</li>
          <li>Paiement sécurisé par carte bancaire via <strong>Stripe</strong>.</li>
          <li><strong>Livraison gratuite</strong> en France métropolitaine</li>
        </ul>
      </section>
      
      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">6. Livraison</h2>
        <p>Expédition prévue <strong>au plus tard courant septembre 2025</strong>, sauf imprévus.</p>
        <p>En cas de réception d’un colis endommagé, veuillez contacter le transporteur et nous informer sous <strong>7 jours</strong>.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">7. Absence de droit de rétractation</h2>
        <p>Conformément à l’article <strong>L221-28 du Code de la consommation</strong>, le droit de rétractation <strong>ne s’applique pas</strong>.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">8. Garanties</h2>
        <p>Le produit est couvert par la <strong>garantie légale de conformité</strong> et contre les <strong>vices cachés</strong>.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">9. Réduction chez les artistes</h2>
        <p>Les propriétaires du jeu bénéficient de <strong>10 % de réduction</strong> chez les artistes participants.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">10. Propriété intellectuelle</h2>
        <p>Toutes les illustrations et contenus sont protégés et leur <strong>reproduction est interdite</strong> sans autorisation.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">11. Données personnelles</h2>
        <p>Les données personnelles sont utilisées uniquement pour traiter la commande, conformément au <strong>RGPD</strong>.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Droit applicable</h2>
        <p>Les présentes conditions sont régies par le <strong>droit français</strong>. En cas de litige, une <strong>solution amiable</strong> sera recherchée en priorité.</p>
      </section>
    </div>
  );
};

export default cgv;

