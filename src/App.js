import React, { useState } from "react";
import "./CSS/style.css";

const FIRST_IMG =
	"https://cdn.pixabay.com/photo/2021/11/11/00/20/dogs-6785135_1280.png";
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

export const App = () => {
	const [imageUrl, setImageUrl] = useState(null);
	function handleRandomPicture() {
		const getDogImage = async () => {
			try {
				const result = await fetch(DOG_URL);
				const { status, message } = await result.json();

				if (status !== "success") {
					throw new Error("Sorry, cannot dog picture.");
				}

				setImageUrl(message);
			} catch (error) {
				console.log(error);
				setImageUrl(null);
			}
		};

		getDogImage();
	}

	return (
		<div className='dog-api-wrapper'>
			<section className='part1'>
				<h1>
					Wylosuj pieska! <i class='fa-solid fa-paw'></i>
				</h1>
				<button
					className='picture-btn'
					onClick={() => handleRandomPicture()}
				>
					{imageUrl ? "Zmień pieska" : "Kliknij"}
				</button>
			</section>
			<section className='part2'>
				<img
					className='random-img'
					src={imageUrl ? imageUrl : FIRST_IMG}
					alt='Random dog'
				/>
			</section>
		</div>
	);
};

export default App;
