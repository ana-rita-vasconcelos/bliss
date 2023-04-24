import React from "react";
import "./share-screen.css";
import {
	EmailShareButton,
	EmailIcon,
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	WhatsappShareButton,
	WhatsappIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from "react-share";

function ShareScreen() {
	const currentUrlPage = window.location.href;

	return (
		<>
			<div className="share__container">
				<h2 className="share__title">Share with others</h2>
				<TwitterShareButton url={currentUrlPage}>
					<TwitterIcon size={40} round={true} />
				</TwitterShareButton>
				<FacebookShareButton url={currentUrlPage}>
					<FacebookIcon size={40} round={true} />
				</FacebookShareButton>
				<WhatsappShareButton url={currentUrlPage}>
					<WhatsappIcon size={40} round={true} />
				</WhatsappShareButton>
				<LinkedinShareButton url={currentUrlPage} source={currentUrlPage}>
					<LinkedinIcon size={40} round={true} />
				</LinkedinShareButton>
				<EmailShareButton url={currentUrlPage} subject="Question App" separator=" " body="Shared with you...">
					<EmailIcon className="share__icon" size={40} round={true} />
				</EmailShareButton>
			</div>
		</>
	);
}

export default ShareScreen;
