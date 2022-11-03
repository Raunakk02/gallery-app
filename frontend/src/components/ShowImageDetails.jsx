import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import endpoints from "../endpoints";

function ShowImageDetails() {
	const [img, setImg] = useState({});

	let params = useParams();

	useEffect(() => {
		axios.get(endpoints.images.imageDetails(params.id)).then((res) => {
			setImg(res.data);
		});
	}, [params.id]);

	function handleDelete() {
		axios
			.delete(endpoints.images.deleteImage(params.id))
			.then(function (res) {
				console.log(res);
			})
			.catch(function (err) {
				console.log(err);
			});
		window.location.href = "/";
	}

	return (
		<div className="show-image-details">
			<img src={img.imgUrl} alt={img.imgName} />
			<div className="edit-delete">
				<Link to={`/${params.id}/edit`}>
					<button className="edit">Edit</button>
				</Link>
				<button className="delete" onClick={handleDelete}>
					Delete
				</button>
			</div>
			<div className="img-details">
				<table>
					<thead>
						<tr>
							<th>Property</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Image Name:</td>
							<td>{img.imgName}</td>
						</tr>
						<tr>
							<td>Image URL:</td>
							<td>{img.imgUrl}</td>
						</tr>
						<tr>
							<td>Image Details:</td>
							<td>{img.imgDetails}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default ShowImageDetails;
