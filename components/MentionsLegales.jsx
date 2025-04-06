import React from "react";

const MentionsLegales = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <h1 className="text-3xl font-bold  pb-4">Mentions Légales</h1>
      
      <section className="space-y-4  pb-6">
        <p>Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site lunetoile.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
      </section>
      
      <section className="space-y-4  pb-6">
        <h2 className="text-xl font-semibold">Éditeur du site</h2>
        <p>Nom : LEMAIRE Arthur</p>
        <p>Statut : Entrepreneur Individuel</p>
        <p>SIREN : 954 040 648</p>
        <p>Siège social : 9 Rue Pascal, 78470 Saint-Rémy-lès-Chevreuse, France</p>
        <p>Email :arthur-bicyclette@live.fr</p>
        <p>Responsable de la publication : Arthur Lemaire</p>
      </section>
      
      <section className="space-y-4  pb-6">
        <h2 className="text-xl font-semibold">Hébergement</h2>
        <p>Hébergeur : o2switch</p>
        <p>Adresse : 222 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France</p>
        <p>Téléphone : 04 44 44 60 40</p>
        <p>Site web : <a href="https://www.o2switch.fr" className="text-blue-600 underline">https://www.o2switch.fr</a></p>
      </section>
      
      <section className="space-y-4  pb-6">
        <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
        <p>L'ensemble du contenu du site lunetoile.fr (textes, images, illustrations, graphismes, logo, vidéos, structure, code) est protégé par les lois en vigueur sur la propriété intellectuelle.</p>
        <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.</p>
      </section>
      
      <section className="space-y-4  pb-6">
        <h2 className="text-xl font-semibold">Limitations de responsabilité</h2>
        <p>L’éditeur du site ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur lors de l’accès au site lunetoile.fr.</p>
        <p>Le site peut contenir des liens hypertextes vers d’autres sites. L’éditeur ne peut être tenu responsable du contenu de ces sites tiers.</p>
      </section>
      
      <section className="space-y-4  pb-6">
        <h2 className="text-xl font-semibold">Données personnelles</h2>
        <p>Lunétoile ne collecte des informations personnelles relatives à l’utilisateur que pour les besoins de certains services proposés par le site (commande, formulaire de contact, etc.).</p>
        <p>L’utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu’il procède lui-même à leur saisie.</p>
        <p>Conformément au Règlement Général sur la Protection des Données (RGPD), l’utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition aux données personnelles le concernant, en adressant sa demande à : arthur-bicyclette@live.fr</p>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Loi applicable</h2>
        <p>Le présent site est régi par la législation française. Tout litige relatif à son utilisation sera soumis à la compétence exclusive des tribunaux français.</p>
      </section>
    </div>
  );
};

export default MentionsLegales;