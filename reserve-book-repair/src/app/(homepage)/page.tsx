import SearchForm from "./searchform/page";
import BuildingGrid from "./buildinggrid/page";
import RoomGrid from "./roomgrid/page";
import Footer from "./footer/page";

const HomePage = () => {
	return (
		<div>
			<SearchForm />
			<BuildingGrid />
			<RoomGrid />
			<Footer />
		</div>
	);
};

export default HomePage;
