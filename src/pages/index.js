import matter from "gray-matter";
import Hero from "../components/Hero";

import Contact from "../components/ContactForm";
import Framer from "../components/Framer";

import Intro from "../components/Intro";
import Testamonial from "../components/Testamonial";
import Gallery from "../components/Gallery";
import { useViewportScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import ContentBlock from "../components/ContentBlock";



let galleryArray1 = [
	{ source: "../static/IMG_1600.jpg" },
	{ source: "../static/IMG_3346.jpg" },
	{ source: "../static/heart.jpg" },
	{ source: "../static/IMG_9892.jpg" },
	{ source: "../static/IMG_4797.jpg" },
	{ source: "../static/IMG_7090.jpg" },
];

let galleryArray2 = [
	{ source: "../static/IMG_3077.jpg" },
	{ source: "../static/IMG_6502.jpg" },
	{ source: "../static/IMG_8785.jpg" },
	{ source: "../static/IMG_9533.jpg" },
	{ source: "../static/IMG_7246.jpg" },
	{ source: "../static/profile3.jpg" },
];

let galleryArray3 = [
	{ source: "../static/wedding7.jpg" },
	{ source: "../static/wedding6.jpg" },
	{ source: "../static/wedding4.jpg" },

	{ source: "../static/wedding3.jpg" },
	{ source: "../static/wedding2.jpg" },
	{ source: "../static/wedding1.jpg" },
];


const Index = (props) => {
	const markdownBody = props.content;
	const root = useRef();
	return (
		<div className="index-wrap" ref={root}>

			<Hero></Hero>
			<Intro></Intro>
			<Contact />
			<Gallery title={"Gallery & Testamonials"} galleryImages={galleryArray1}></Gallery>

			<Testamonial content={"<p>Ben and I would like to thank you from the bottom of our hearts for the most perfect wedding ceremony. Everyone came up to us and commented on how warm and loving your service was. We cannot recommend you highly enough. You are thoughtful, professional, loving and kind.</p><p>We know and feel that your job is your vocation and your beautiful soul shines through.</p><p>- Angie</p>"}></Testamonial>

			<Gallery galleryImages={galleryArray2}></Gallery>

			<Testamonial content={"<p>We were so impressed by the way you asked questions and listened with empathy to draw out the essence of Pat and to reflect that in your delivery with such a soft and caring nature. It was as if you had known her all your life.</p><p>It’s a special gift you have. We were so lucky to find you. We also recognize the amount of effort that you put into crafting and delivering the words for the service. It was the most beautiful service to honour Pat... You are indeed at the height of your profession, and I thank you for being there for us.</p><p> - Warren Anthes</p>"}></Testamonial>
		
			<Gallery galleryImages={galleryArray3}></Gallery>
<Testamonial content={"<p>We would like to express our appreciation for the compassion and empathy you showed yesterday.  With all that was happening, we were not able to properly thank you for all you did. Hazel's send-off was perfect. In fact, a number of people commented that you must have been a friend of the family and known Hazel yourself!</p><p>Saying goodbye was never going to be easy but your handling of everything from start to finish was warm and yet professional,made it so much easier for us all.</p><p> - Daryll and Anne Lloyd</p>"}></Testamonial>

			<article className="content-section"  name="servicesandrates" id="servicesandrates">
				<section className="content-max-width text-left rte">
				<ReactMarkdown source={markdownBody}/>
				</section>
			</article>


			<style jsx>
				{`
					.hero2 {
						color: white;
					}

					.hero2 {
						background: #fff;
						display: flex;
						padding: 12vh 4em;
						align-items: center;
						text-align: center;
						justify-content: center;
					}
					.hero2 h1 {
						font-size: 1.8em;
						line-height: 1.6;
						max-width: 700px;
						color: black;
						font-weight: 600;
						letter-spacing: 0.5px;
					}
					.hero2 p {
						font-size: 1.2em;
						line-height: 1.6;
						max-width: 800px;
						color: black;
						font-weight: 100;
					}
					.section-h1 {
						font-size: 2.33em;
						color: black;
						text-align: center;
						padding: 2em 0 0;
					}
					.section-p {
						font-size: 1.3em;
						color: black;
						text-align: center;
						padding: 4em 0 0;
						max-width: 600px;
						font-weight: 100;
					}
					iframe {
						width: 100%;
						height: 80vh;
					}
				`}
			</style>
		</div>
	);
};

export default Index;

Index.getInitialProps = async function() {
	
	const siteConfig = await import(`../data/config.json`);

	const content = await import(`../data/index.md`);
	const data = matter(content.default);

	return {
		...siteConfig,
		...data,
	};
};
