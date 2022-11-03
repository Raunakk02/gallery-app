import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import endpoints from "../endpoints";
import Header from "./Header";
const axios = require("axios").default;

function DisplayImages() {
	const [images, setImages] = useState([]);
	const [page, setPages] = useState(1);
	const [totalImages, setTotalImages] = useState(0);

	useEffect(() => {
		axios.get(endpoints.images.getPaginatedImages(page)).then((res) => {
			setTotalImages(res.data.total);
			setImages(res.data.images);
		});
	}, [page]);

	function handlePrevPage() {
		if (page > 1) setPages((prev) => prev - 1);
	}

	function handleNextPage() {
		if (page <= totalImages / 10) setPages((prev) => prev + 1);
	}

	let ImageComponents = images.map((img) => (
		<div key={img["_id"]}>
			<Link to={`/show/${img["_id"]}`}>
				{<img src={img["imgUrl"]} alt={img["imgName"]} />}
			</Link>
		</div>
	));

	return (
		<div>
			<Header />
			<div className="pagination-buttons">
				<button
					className="prev"
					onClick={handlePrevPage}
					disabled={!(page > 1)}
				>
					Previous
				</button>
				<button
					className="next"
					onClick={handleNextPage}
					disabled={!(page <= totalImages / 10)}
				>
					Next
				</button>
			</div>
			<div className="display-images">{ImageComponents}</div>
		</div>
	);
}

export default DisplayImages;
