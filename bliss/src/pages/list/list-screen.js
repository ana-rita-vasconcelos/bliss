import React from "react";
import { useState, useEffect } from "react";
import "./list-screen.css";
import Search from "../../components/search/search";
import Loading from "../../components/loading/loading";
import ShareScreen from "../share/share-screen";
import { AiOutlineClose } from "react-icons/ai";
import { FaShare } from "react-icons/fa";

function ListScreen() {
	const [overlay, setOverlay] = useState(false);

	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		fetch(
			"https://private-anon-0b70def516-blissrecruitmentapi.apiary-mock.com/questions?limit=limit&offset=offset&filter=filter"
		)
			.then((response) => response.json())
			.then((result) => {
				setQuestions(result);
			});
	}, []);

	return (
		<>
			{!questions.length ? (
				<Loading />
			) : (
				<div className="questions">
					<h1 className="questions__title">Questions List</h1>
					<FaShare className="questions__share" onClick={() => setOverlay(!overlay)} />
					<div className={overlay ? "overlay--show" : "overlay"}>
						<button onClick={() => setOverlay(!overlay)} className="overlay__button">
							<AiOutlineClose className="overlay__close" />
						</button>
						<ShareScreen />
					</div>
					<div className="questions__search">
						<Search />
					</div>
					{questions.map((item) => (
						<div key={item.id} className="questions__info">
							<h2 className="questions__subtitle">
								Question nr {item.id}: {item.question}
							</h2>
							<div className="questions__images">
								<img className="questions__image" src={item.image_url} alt="url img"></img>
							</div>
							<p className="questions__date">{new Date(`${item.published_at}`).toDateString()}</p>
							<ul className="questions__list">
								{item.choices.map((item) => (
									<li key={item.choice} className="questions__item">
										<p className="questions__text">Choice: {item.choice}</p>
										<p className="questions__text">Votes: {item.votes}</p>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			)}
		</>
	);
}

export default ListScreen;
