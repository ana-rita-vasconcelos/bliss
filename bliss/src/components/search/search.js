import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./search.css";

import { AiOutlineSearch } from "react-icons/ai";

function Search() {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		fetch(
			"https://private-anon-0b70def516-blissrecruitmentapi.apiary-mock.com/questions?limit=limit&offset=offset&filter=filter"
		)
			.then((response) => response.json())
			.then((result) => {
				setQuestions(result);
			});
	}, [questions]);

	const [filter, setFilter] = useState([]);

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		const newFilter = questions.filter((value) => {
			return value.id.toString().toLowerCase().includes(searchWord.toString().toLowerCase());
		});

		if (searchWord === "") {
			setFilter([]);
		} else {
			setFilter(newFilter);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="search">
			<form className="search__form" action="" onSubmit={handleSubmit}>
				<label className="search__label" htmlFor="search"></label>
				<input
					onChange={handleFilter}
					className="search__input"
					id="search"
					name="search"
					type="search"
					placeholder="Filter question nr"
				></input>
				<button className="search__button" type="submit">
					<AiOutlineSearch className="search__icon" />
				</button>
			</form>
			{filter.length !== 0 && (
				<ul className="search__list">
					{filter.map((item) => (
						<li key={item.id} className="search__item">
							<Link className="search__link" to={`/questions/${item.id}`}>
								<p className="search__text">
									Question nr {item.id}: {item.question}
								</p>
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Search;
