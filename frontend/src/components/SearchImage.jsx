import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import endpoints from "../endpoints";

function SearchImage() {
	const [images, setImages] = useState([]);

	let params = useParams();

	useEffect(() => {
		axios.get(endpoints.images.searchImage(params.name)).then((res) => {
			setImages(res.data);
		});
	}, [params.name]);

	let ImageComponents = images.map((img) => (
		<div key={img["_id"]}>
			<Link to={`/show/${img["_id"]}`}>
				{<img src={img["imgUrl"]} alt={img["imgName"]} />}
			</Link>
		</div>
	));

	const displayedComponent =
		images.length <= 0 ? (
			<center>No matching images found.</center>
		) : (
			<div className="display-images">{ImageComponents}</div>
		);

	return displayedComponent;
}

export default SearchImage;
