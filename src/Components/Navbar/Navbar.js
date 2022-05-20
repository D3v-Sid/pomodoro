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
				<Button text={"Report"} type={"navbar"} onClick={handleClick} />
				<Button text={"Setting"} type={"navbar"} onClick={handleClick} />
				<Button text={"Login"} type={"navbar"} onClick={handleClick} />
			</nav>
		</div>
	);
};

export default Navbar;
