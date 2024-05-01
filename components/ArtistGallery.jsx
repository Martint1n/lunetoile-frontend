import {Cloudinary} from "@cloudinary/url-gen";

const ArtistGallery = () => {
    const cld = new Cloudinary({cloud: {cloudName: 'dyrh8xsea'}});

    cld.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    { public_id: "olympic_flag" }, 
    function(error, result) {console.log(result); });
};

export default ArtistGallery;