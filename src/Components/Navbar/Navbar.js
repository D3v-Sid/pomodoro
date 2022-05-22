import "./Navbar.css";
import Button from "../Button/Button";

const Navbar = () => {
	const handleClick = () => {
		console.log("I clicked");
	};
	return (
		<div className="navbar">
			<h1>Pomodoro</h1>
			<nav>
				<Button text={"Report"} classname={"navbar-btn"} onClick={handleClick} />
				<Button text={"Setting"} classname={"navbar-btn"} onClick={handleClick} />
				<Button text={"Login"} classname={"navbar-btn"} onClick={handleClick} />
			</nav>
		</div>
	);
};

export default Navbar;
