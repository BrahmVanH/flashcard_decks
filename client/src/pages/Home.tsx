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

	const main: RefObject<HTMLDivElement> = useRef(null);

	const triggerCardAnimation = () => {
		let ctx = gsap.context(() => {
			let tl = gsap.timeline();
			tl.fromTo(
				'#flashcard',
				{ y: 500, x: 0, scale: 0.98 },
				{
					y: -5,
					x: 0,
					scale: 0.98,
					ease: 'expoScale(0.1, 1, power2.in)',
					duration: 1.5,
				}
			);
			tl.to('#flashcard', {
				y: 0,
				x: 0,
				ease: 'expoScale(0.1, 1, power2.in)',
				scale: 1,
				duration: 2,
			});
		}, main);

		return () => ctx.revert();
	};

	const triggerShadowAnimation = () => {
		let ctx = gsap.context(() => {
			let tl = gsap.timeline();
			tl.set('#shadow', {
				opacity: 0.50,
				scale: 1.5,
			})
			tl.fromTo(
				'#shadow',
				{
					y: -4,
					ease: 'expoScale(0.1, 1, power2.in)',
					scale: 1.5,
					opacity: 1
				},
				{  y: 32, ease: 'expoScale(0.1, 1, power2.in)', scale: 0.8, duration: 1.5, opacity: 0.90 }
			);
			tl.to('#shadow', {
				y: 30,
				scale: 1,
				ease: 'expoScale(0.1, 1, power2.in)',
				duration: 2,
				opacity: 1
			
			});
		})
		return () => ctx.revert();
	}

	useLayoutEffect(() => {
		triggerCardAnimation();
		triggerShadowAnimation();
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
			<div className="shadow-container">
				<div id='shadow' className="shadow"></div>
			</div>
			<div className="background-container-lower"></div>
		</div>
	);
}

export default Home;
