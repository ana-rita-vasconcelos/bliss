import React from "react";
import { Detector } from "react-detect-offline";
import "./connect.css";
import { VscVmConnect } from "react-icons/vsc";

const Connect = (props) => {
	return (
		<>
			<Detector
				render={({ online }) =>
					online ? (
						props.children
					) : (
						<div className="connect__container">
							<VscVmConnect className="connect__icon" />
							<h1 className="connect__text">No connection to the internet</h1>
						</div>
					)
				}
			/>
		</>
	);
};

export default Connect;
