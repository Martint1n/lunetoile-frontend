import { useState } from 'react';
// page profile Artist

function ArtistProfile() {
    const [imageToUpload, setImageToUpload] = useState("");

    const handleImageChange = (e) => {
        setImageToUpload(e.target.files[0]);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Empêcher la redirection par défaut

        // Ton code pour envoyer l'image au backend
        if (imageToUpload) {
            const formData = new FormData();
            formData.append("image", imageToUpload);

            fetch("http://localhost:3000/cloudinary/upload", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error uploading image:', error));
        }
    };

    return (
        <div>
            {/* Utilisation d'un formulaire pour soumettre l'image */}
            <form action='/cloudinary/upload' onSubmit={handleFormSubmit}>
                <input type="file" onChange={handleImageChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ArtistProfile;