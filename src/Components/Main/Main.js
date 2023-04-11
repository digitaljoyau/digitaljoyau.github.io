import React from "react";
import AboutUs from "./AboutUs";
import Memberships from "./Memberships";
import PhotoGallery from "./PhotoGallery";
import VideoGallery from "./VideoGallery";
import ContactUs from "./ContactUs";


const Main = () => {
    return (
		<div className="Main">
			<AboutUs />
			<Memberships />
			<PhotoGallery />
			<VideoGallery />
			<ContactUs />
		</div>
    );
};

export default Main;