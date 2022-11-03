import { useState } from "react";

function Header() {
	const [name, setName] = useState("");

	function handleName(event) {
		setName(event.target.value);
	}

	function handleSearch() {
		if (name !== "") {
			window.location.assign("/" + name.trim());
		}
	}

	return (
		<div className="header">
			<h2>Gallery CRUD App</h2>
			<div className="search-box">
				<button className="btn-search" onClick={handleSearch}>
					<i className="fa fa-search" aria-hidden="true"></i>
				</button>
				<input
					type="text"
					className="input-search"
					placeholder="Search image by name..."
					value={name}
					onChange={handleName}
				/>
			</div>
		</div>
	);
}

export default Header;
