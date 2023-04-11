import React from 'react'
import Photo1 from "./bike1.jpg";
import Photo2 from "./bike2.jpg";
import Photo3 from "./bike3.jpg";
import Photo4 from "./bike4.jpg";

const PhotoGallery = () => {
  return (
	<div className="PhotoGallery">

        <h2 id="photos" className="PhotoGallery-title">Past Event Photo Gallery</h2>
            <div className="PhotoGallery-grid">
                <figure>
                    <img width="300" height="185" src={Photo1} alt="event photo 1"/>
                    <figcaption>Bike Event 1 </figcaption>
                </figure>

                <figure>
                    <img width="300" height="185" src={Photo2} alt="event photo 2"/>
                    <figcaption>Bike Event 2</figcaption>
                </figure>
            
                <figure>
                    <img width="300" height="185" src={Photo3} alt="event photo 3"/>
                    <figcaption>Bike Event 3</figcaption>
                </figure>

                <figure>
                    <img width="300" height="185" src={Photo4} alt="event photo 4"/>
                    <figcaption>Bike Event 4</figcaption>
                </figure>
        </div>
	</div>
  );
}

export default PhotoGallery
