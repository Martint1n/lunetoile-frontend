import React from "react";

const Confidentialite = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <h1 className="text-3xl font-bold border-b-4 pb-4">Politique de Confidentialité</h1>
      <p className="text-gray-600">Dernière mise à jour : <strong>31 mars 2025</strong></p>
      <p>Lunétoile s’engage à protéger la vie privée de ses utilisateurs et à respecter la réglementation en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD).</p>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">1. Responsable du traitement</h2>
        <p><strong>LEMAIRE Arthur – Entrepreneur Individuel</strong></p>
        <p><strong>SIREN :</strong> 954 040 648</p>
        <p><strong>Adresse :</strong> 9 Rue Pascal, 78470 Saint-Rémy-lès-Chevreuse, France</p>
        <p><strong>Email de contact :</strong> arthur-bicyclette@live.fr</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">2. Données collectées</h2>
        <p>Lunétoile collecte uniquement les données strictement nécessaires au traitement des commandes. À ce jour, <strong>aucun système de cookies n’est activement utilisé</strong> à des fins de suivi statistique, publicitaire ou de profilage.</p>
        <p>Données  collectées :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Nom, prénom</li>
          <li>Adresse postale</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Informations liées au paiement (traitées par un prestataire sécurisé, non conservées par Lunétoile)</li>
        </ul>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">3. Finalités du traitement</h2>
        <p>Les données sont collectées pour :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Traiter les commandes et expéditions</li>
          <li>Gérer la relation client</li>
          <li>Assurer le bon fonctionnement du site (cookies techniques et analytiques)</li>
        </ul>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">4. Base légale du traitement</h2>
        <p> les traitements sont effectués sur la base :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>du contrat (commande de produits)</li>
          <li>du consentement (formulaire de contact, cookies)</li>
          <li>de l’intérêt légitime (amélioration du service)</li>
          <li>d’une obligation légale (facturation, preuve de transaction)</li>
        </ul>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">5. Destinataires des données</h2>
        <p>Les données sont destinées uniquement à Lunétoile et à ses sous-traitants (prestataires de paiement, hébergeur, transporteurs), dans le cadre strict de la gestion des commandes et de la relation client. Elles ne sont ni revendues, ni cédées à des tiers.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">6. Durée de conservation</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Données clients : 5 ans après la dernière commande</li>
          <li>Données de facturation : 10 ans (obligation légale)</li>
          <li>Cookies : jusqu’à 13 mois</li>
          <li>Données des formulaires : 12 mois maximum</li>
        </ul>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">7. Droits des utilisateurs</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Droit d’accès, de rectification, d’effacement</li>
          <li>Droit à la limitation ou à l’opposition au traitement</li>
          <li>Droit à la portabilité des données</li>
          <li>Droit de retrait du consentement à tout moment</li>
          <li>Droit d’introduire une réclamation auprès de la CNIL</li>
        </ul>
        <p>Pour exercer vos droits, écrivez à : <strong>arthur-bicyclette@live.fr</strong></p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">8. Cookies</h2>
        <p>Le site lunetoile.fr n’utilise actuellement aucun cookie à des fins analytiques ou publicitaires. Seuls des cookies strictement techniques et temporaires, nécessaires au fonctionnement du panier ou du système de commande, peuvent être utilisés.</p>
        <p>Aucun cookie tiers n’est déposé sans le consentement explicite de l’utilisateur.</p>
      </section>

      <section className="space-y-4 border-b-2 pb-6">
        <h2 className="text-xl font-semibold">9. Sécurité</h2>
        <p>Lunétoile met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité des données (serveur sécurisé, HTTPS, accès restreint, etc.).</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. Mise à jour de la politique</h2>
        <p>Cette politique peut être modifiée à tout moment. Les utilisateurs seront informés de toute mise à jour importante par publication sur cette page.</p>
      </section>
    </div>
  );
};

export default Confidentialite;
