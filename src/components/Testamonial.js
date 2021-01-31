import Link from "next/link";
import { motion, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";

import React, { useRef, useState } from "react";
import { useIntersectionObserver } from "./hook";

import Flourish from "./Flourish";

let galleryImages = [
	{ source: "../static/1-1.jpg" },
	{ source: "../static/1-2.jpg" },
	{ source: "../static/1-3.jpg" },
	{ source: "../static/1-5.jpg" },
	{ source: "../static/1-6.jpg" },
	{ source: "../static/1-8.jpg" },
	{ source: "../static/1-9.jpg" },
	{ source: "../static/2-1.jpg" },
	{ source: "../static/2-2.jpg" },
	{ source: "../static/2-3.jpg" },
	{ source: "../static/2-4.jpg" },
	{ source: "../static/2-5.jpg" },
	{ source: "../static/2-6.jpg" },
	{ source: "../static/2-7.jpg" },
	{ source: "../static/2-8.jpg" },
	{ source: "../static/2-9.jpg" },
	{ source: "../static/3-1.jpg" },
	{ source: "../static/3-2.jpg" },
	{ source: "../static/3-3.jpg" },
	{ source: "../static/3-4.jpg" },
	{ source: "../static/3-5.jpg" },
	{ source: "../static/3-6.jpg" },
	{ source: "../static/3-7.jpg" },
	{ source: "../static/3-8.jpg" },
	{ source: "../static/3-9.jpg" },
	{ source: "../static/4-1.jpg" },
	{ source: "../static/4-2.jpg" },
];

export default function Testamonial(props) {
	const root = useRef();
	const target = useRef();
	const rootMargin = "0px";

	return (
		<article className="content-section testamonial-section" id="testamonial">
			<section className="content-max-width">
				<div className="rte testamonial ">
					<blockquote className="blockquote-testamonial">
						<em>	
						<p>"Wew were so impressed by the way you asked questions and listened with empathy to draw out the essence of Pat and to reflect that in your delivery with such a soft and caring nature. It was as if you had known her all your life.</p>
						<p>It’s a special gift you have. We were so lucky to find you. We also recognize the amount of effort that you put into crafting and delivering the words for the service. It was the most beautiful service to honour Pat... You are indeed at the height of your profession, and I thank you for being there for us.”</p>
						<p> - Warren Anthes</p>
						</em>
					</blockquote>
				</div>
			</section>

			<style jsx>{`
				.testamonial-section {
					background-image: url(../static/hero-bg.jpg);
					background-size: cover;
				}

				.testamonial-section .content-max-width {
					background: none;
				}
				.testamonial-section .content-max-width .rte {
					color: white;
				}

				.blockquote-testamonial:before,
.blockquote-testamonial:after {
	position: absolute;
	color: #f1efe6;
	font-size: 8rem;
	width: 4rem;
	height: 4rem;
}

.blockquote-testamonial:before {
	content: '“';
	left: -5rem;
	top: -2rem;
}

.blockquote-testamonial:after {
	content: '”';
	right: -5rem;
	bottom: 1rem;
}
			`}</style>
		</article>
	);
}
