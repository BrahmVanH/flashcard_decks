import React, { useLayoutEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';

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

	const main:RefObject<HTMLDivElement>  = useRef(null);

	const triggerAnimation = () => {
		let ctx = gsap.context(() => {
			gsap.fromTo(
				'#flashcard',
				{ y: 500, x: 0, scaleX: 0.4, scaleY: 1.4, opacity: 0 },
				{
					y: 0,
					scaleX: 1,
					scaleY: 1,
					x: 0,
					opacity: 1,
					ease: 'expoScale(0.1, 1, power2.inOut)',
					duration: 3,
				}
			);
		}, main);

		return () => ctx.revert();
	};

	useLayoutEffect(() => {
		triggerAnimation();
	}, []);

	return (
		<div ref={main} className="home-container">
			<div className="background-container-upper"></div>
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
			<div className="background-container-lower"></div>
		</div>
	);
}

export default Home;
