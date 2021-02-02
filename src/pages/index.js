import matter from "gray-matter";
import Hero from "../components/Hero";
import SimpleSliderTestimonials from "../components/SimpleSliderTestimonials";
import SimpleSlider from "../components/SimpleSlider";
import Contact from "../components/ContactForm";
import Framer from "../components/Framer";

import Intro from "../components/Intro";
import Testimonial from "../components/Testimonial";
import Gallery from "../components/Gallery";
import { useViewportScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import ContentBlock from "../components/ContentBlock";



let galleryArray1 = [
	{ source: "../static/slider-1.jpg" },
	{ source: "../static/slider-2.jpg" },
	{ source: "../static/slider-3.jpg" },
	{ source: "../static/slider-4.jpg" },
	{ source: "../static/slider-5.jpg" },
	{ source: "../static/slider-6.jpg" },
	{ source: "../static/slider-7.jpg" },
	{ source: "../static/slider-8.jpg" },
	{ source: "../static/slider-9.jpg" },
	{ source: "../static/slider-10.jpg" },
	{ source: "../static/slider-11.jpg" },
	{ source: "../static/slider-12.jpg" },
];

let galleryArray2 = [
	{ source: "../static/gallery-1.jpg" },
	{ source: "../static/gallery-2.jpg" },
	{ source: "../static/gallery-3.jpg" },
	{ source: "../static/gallery-4.jpg" },
	{ source: "../static/gallery-5.jpg" },
	{ source: "../static/gallery-6.jpg" },
	{ source: "../static/gallery-7.jpg" },
	{ source: "../static/gallery-8.jpg" },
	{ source: "../static/gallery-9.jpg" },
	{ source: "../static/gallery-10.jpg" },
	{ source: "../static/gallery-11.jpg" },
	{ source: "../static/gallery-12.jpg" },
];



const Index = (props) => {
	const markdownBody = props.content;
	const root = useRef();
	return (
		<div className="index-wrap" ref={root}>

			<Hero></Hero>
		
			<Intro></Intro>
			<SimpleSlider galleryImages={galleryArray1}></SimpleSlider>
			<Contact />
			<Gallery title={"Gallery"} galleryImages={galleryArray2}></Gallery>
			<SimpleSliderTestimonials></SimpleSliderTestimonials>

			
	

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
