import React from 'react';

import { GrNext, GrPrevious } from 'react-icons/gr';
import { GoLightBulb } from 'react-icons/go';

import './style.css';

interface FlashcardProps {
	title: string;
	prompt: string;
	solution: string;
}

function Flashcard(props: FlashcardProps) {
	const { title, prompt, solution } = props;
	return (
		<div id="flashcard" className="flashcard col-lg-3 col-md-5 col-sm-11">
			<div className="flashcard-header">
				<h3>{title}</h3>
			</div>
			<div className="flashcard-content-container">
				<div className="flashcard-prompt-container">
					<p>{prompt}</p>
				</div>
				<div className="flashcard-solution-container">
					<p>{solution}</p>
				</div>
			</div>
			<div className="flashcard-footer">
				<button className="prev-card-btn">
					<GrPrevious />
				</button>
				<button className="show-solution-btn">
					<GoLightBulb />
				</button>
				<p>1/20</p>
				<button className="next-card-btn">
					<GrNext />
				</button>
			</div>
		</div>
	);
}

export default Flashcard;
