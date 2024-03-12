import "./Navbar.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = () => {
	return (
		<div className="Navbar">
            <div className="Navbar__banner">Read the 2023 State of Cloud Security Study!</div>
            <div className="Navbar__main">
                <div className="Navbar__main__left">
                    <ul>
                        <li>Product</li>
                        <li>Customers</li>
                        <li>Pricing</li>
                        <li>Solutions</li>
                        <li>Docs</li>
                    </ul>
                </div>
                <div className="Navbar__main__logoContainer">
                    <img
                        src="https://imgix.datadoghq.com/img/about/presskit/logo-v/dd_vertical_purple.png?auto=format&fit=max&w=847&dpr=2"
                        className="Navbar__main__logoContainer__logo"
                        alt="Datadog logo"
                    />
                </div>
                <div className="Navbar__main__right">
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Login</li>
                        <li className="Navbar__main__right__searchToggle">
                            <FaMagnifyingGlass/>
                        </li>
                        <li className="Navbar__main__right__start">
                            <button className="Navbar__main__right__start__getStarted">Get Started Free</button>
                            <button className="Navbar__main__right__start__freeTrial">Free Trial</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
	);
};

export default Navbar;
