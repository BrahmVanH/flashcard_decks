import React from 'react';

import Flashcard from '../components/Flashcard';

import './Home.css';

function Home() {
	const flashcardContent = [
		{
			title: 'Calculus',
			prompt: 'd/dx (arcsin(x))',
			solution: '1/sqrt(1-x^2)',
		},
		// {
		// 	title: 'Calculus',
		// 	prompt: 'd/dx (arccos(x))',
		// 	solution: '-(1/sqrt(1-x^2))',
		// },
		// {
		// 	title: 'Calculus',
		// 	prompt: 'd/dx (arctan(x))',
		// 	solution: '1/1+x^2',
		// },
	];
	return (
		<div className="flashcard-container">
			{flashcardContent.map((flashcard) => (
				<Flashcard
					key={flashcard.prompt}
					title={flashcard.title}
					prompt={flashcard.prompt}
					solution={flashcard.solution}
				/>
			))}
		</div>
	);
}

export default Home;
