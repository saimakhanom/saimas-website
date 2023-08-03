import React from "react";
import "../styles/popup.css";
import PropTypes from "prop-types";
 
const Popup = props => {
	return (
		<div className="popup-box">
			<div className="box">
				<span className="close-icon" onClick={props.handleClose}>x</span>
				{props.content}
			</div>
		</div>
	);
};

Popup.propTypes = {
	handleClose: PropTypes.any,
	content: PropTypes.any
  };
 
export default Popup;