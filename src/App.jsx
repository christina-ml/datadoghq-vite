import { useState } from "react";
import "./App.scss";
import Navbar from "./Navbar/Navbar";
import { TfiClose } from "react-icons/tfi";
import Home from "./Home/Home";

function App() {
    const [isSearchBarActive, setIsSearchBarActive] = useState(false);     

    const handleCloseSearchButton = () => {
        setIsSearchBarActive(false);
    }

	return (
		<>
			<Navbar />
            {isSearchBarActive &&
            <span className="SearchBar">
                <input
                    className="SearchBar__search"
                    placeholder="Search"
                />
                <button 
                    className="SearchBar__closeSearch"
                    onClick={handleCloseSearchButton}
                >
                    <TfiClose />
                </button>
            </span>
            }
            <Home />
		</>
	);
}

export default App;
