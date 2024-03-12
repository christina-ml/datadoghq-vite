import "./Navbar.scss";

const Navbar = () => {
	return (
		<div className="Navbar">
            <div className="Navbar__banner">Read the 2023 State of Cloud Security Study!</div>
			<div className="Navbar__logoContainer">
				<img
					src="https://imgix.datadoghq.com/img/about/presskit/logo-v/dd_vertical_purple.png?auto=format&fit=max&w=847&dpr=2"
					className="Navbar__logoContainer__logo"
					alt="Datadog logo"
				/>
			</div>
		</div>
	);
};

export default Navbar;
