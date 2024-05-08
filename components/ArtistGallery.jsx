import {Cloudinary} from "@cloudinary/url-gen";
import { useState } from 'react';


function ArtistGallery () {
    const [imageToUpload, setImageToUpload] = useState("");
    console.log(imageToUpload[0]);


// cloudinary.config({ 
//     cloud_name: 'dyrh8xsea', 
//     api_key: '165223134919377', 
//     api_secret: 'gpRcV2EF3hMi8fyatX4_WOjYmEw' 
// });

const upload = (image) => {
    // Création d'un objet FormData pour envoyer le fichier
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "tttmwrr3"); // Upload preset à configurer dans ton tableau de bord Cloudinary

    // Envoi de la requête POST vers l'URL d'upload de Cloudinary
    fetch("https://api.cloudinary.com/v1_1/dyrh8xsea/image/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error uploading image:', error));
};

    return(
        <div>
            <input type="file" onChange={(e) => { setImageToUpload(e.target.files) }}/>
            <button onClick={() => {upload(imageToUpload)}}>Upload Image</button>
        </div>
    )
};

export default ArtistGallery;