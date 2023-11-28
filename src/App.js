import React, { useState } from "react";
import "./CSS/style.css";

const FIRST_IMG =
	"https://cdn.pixabay.com/photo/2021/11/11/00/20/dogs-6785135_1280.png";
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

export const App = () => {
	const [imageUrl, setImageUrl] = useState(null);

	return (
		<div className='dog-api-wrapper'>
			<h1>
				Wylosuj pieska! <i class='fa-solid fa-paw'></i>
			</h1>
			<button className='picture-btn'></button>
		</div>
	);
};

export default App;
