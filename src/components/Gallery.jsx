import React, { useState } from 'react';

// Função para importar imagens de uma pasta (apenas um exemplo)
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    console.log(images);
    return images;
}

const images = importAll(require.context('../../public/rota-img', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const handleClick = (imageName) => {
        setFullscreenImage(imageName);
    };

    const handleClose = () => {
        setFullscreenImage(null);
    };

    return (
        <div className="gallery">
            <div className="galleryContainer">
                <div className="images">
                    {Object.keys(images).map((imageName, index) => (
                        <img
                            className="image"
                            key={index}
                            src={images[imageName]}
                            alt={imageName}
                            onClick={() => handleClick(imageName)}
                        />
                    ))}
                </div>
                {fullscreenImage && (
                    <div className="fullscreen-modal" onClick={handleClose}>
                        <img src={images[fullscreenImage]} alt={fullscreenImage} className="fullscreen-image" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
