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

const Index = (props) => {
	const markdownBody = props.content;
	const root = useRef();
	return (
		<div className="index-wrap" ref={root}>

				<Hero></Hero>
				<Intro></Intro>
				<Testamonial></Testamonial>
				<Gallery></Gallery>

				<article className="content-section"  name="servicesandrates" id="servicesandrates">
					<section className="content-max-width text-left rte">
					<ReactMarkdown source={markdownBody}/>
					</section>
				</article>
				<Contact />

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
