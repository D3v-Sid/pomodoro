import "./Button.css";
import { IconContext } from "react-icons";

import {
	HiOutlineDocumentReport as Report,
	HiOutlineUserCircle as Login,
	HiAdjustments as Settings,
} from "react-icons/hi";

/**
 * It takes in a text, type, and onClick function and returns a button with the text and type passed in
 * @param  text string
 * @param  type [navbar,pomodoro,start]
 * @param onClick  function
 *
 * @returns A button with the text and type passed in as props.
 */
const Button = ({ text, type, onClick }) => {
	const iconPicker = text => {
		switch (text) {
			case "Report":
				return <Report />;
			case "Setting":
				return <Settings />;
			case "Login":
				return <Login />;
			default:
				break;
		}
	};

	return (
		<>
			<IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
				<button className={type} onClick={onClick}>
					{type === "navbar" && iconPicker(text)} {text}
				</button>
			</IconContext.Provider>
		</>
	);
};

export default Button;
