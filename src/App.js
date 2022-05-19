import "./App.css";
import Button from "./Components/Button/Button";

function App() {
	const handleClick = () => {
		console.log("I clicked");
	};
	return (
		<div className="App">
			<Button text={"Report"} type={"navbar"} onClick={handleClick} />
			<Button text={"Setting"} type={"navbar"} onClick={handleClick} />
			<Button text={"Login"} type={"start"} onClick={handleClick} />
		</div>
	);
}

export default App;
