import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaShare } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";

import "./detail-screen.css";
import ShareScreen from "../share/share-screen";

function DetailScreen() {
	const questionId = useParams().questionId;

	const [overlay, setOverlay] = useState(false);

	const [count, setCount] = useState(0);

	const [question, setQuestion] = useState([]);

	useEffect(() => {
		fetch(`https://private-anon-0b70def516-blissrecruitmentapi.apiary-mock.com/questions/${questionId}`)
			.then((response) => response.json())
			.then((result) => {
				setQuestion(result);
			});
	}, [questionId]);

	const requestOptions = {
		method: "PUT",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(),
	};

	fetch(`https://private-anon-0b70def516-blissrecruitmentapi.apiary-mock.com/questions/${questionId}`, requestOptions)
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((err) => console.log(err));

	return (
		<div className="details">
			<div className="details__buttons">
				<Link to="/questions">
					<MdArrowBackIosNew className="details__icon" title="Back to list" />
				</Link>
				<h1 className="details__title">Question Details</h1>
				<FaShare className="details__icon" onClick={() => setOverlay(!overlay)} />
				<div className={overlay ? "overlay--show" : "overlay"}>
					<button onClick={() => setOverlay(!overlay)} className="overlay__button">
						<AiOutlineClose className="overlay__close" />
					</button>
					<ShareScreen />
				</div>
			</div>
			<div className="details__info">
				<h2 className="details__subtitle">
					Question {question.id}: {question.question}
				</h2>
				<div className="details__images">
					<img className="details__image" src={question.image_url} alt="url img"></img>
				</div>
				<p className="details__date">{new Date(`${question.published_at}`).toDateString()}</p>
				<ul className="details__list">
					{question?.choices?.map((item) => (
						<li key={item.choice} className="details__item">
							<p className="details__text">Choice: {item.choice}</p>
							<p className="details__text">Votes: {item.votes}</p>
							<p className="details__text">
								<button className="details__button" onClick={() => setCount((item.votes = item.votes + 1))}>
									Vote
								</button>
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default DetailScreen;
