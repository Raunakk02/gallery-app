import "../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayImages from "./DisplayImages";
import ShowImageDetails from "./ShowImageDetails";
import AddNewImage from "./AddNewImage";
import EditAndUpdateImage from "./EditAndUpdateImage";
import SearchImage from "./SearchImage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<DisplayImages />} />
					<Route path="/show/:id" element={<ShowImageDetails />} />
					<Route path="/new" element={<AddNewImage />} />
					<Route path="/:id/edit" element={<EditAndUpdateImage />} />
					<Route path="/:name" element={<SearchImage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
