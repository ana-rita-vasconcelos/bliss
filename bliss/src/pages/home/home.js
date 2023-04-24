import React from "react";
import "./home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch("https://private-anon-0b70def516-blissrecruitmentapi.apiary-mock.com/health")
			.then((response) => response.json())
			.then((result) => {
				setLoading(result);
			});
	}, []);

	return (
		<>
			{loading ? (
				<div className="home__buttons">
					<button className="home__button">
						<Link to="/questions">Go to Questions</Link>
					</button>
				</div>
			) : (
				<div className="home__buttons">
					<button className="home__button" onClick={setLoading}>
						<Link to="/">Retry Action</Link>
					</button>
				</div>
			)}
		</>
	);
}

export default Home;
