import Link from "next/link";
import { motion, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";

import React, { useRef, useState } from "react";
import { useIntersectionObserver } from "./hook";

import Flourish from "../components/Flourish";

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

export default function TestamonialsGallery(props) {
	const root = useRef();
	const target = useRef();
	const rootMargin = "0px";

	return (
		<article className="content-section gallery-wrap" id="gallery">
			<section className="content-max-width content-section-gallery">
				<div className="rte gallery ">
					<h2 className=" text-center ">Testamonials & Gallery</h2>

					<div className="gallery__grid-container pad-b-2">
						{galleryImages.length > 1 &&
							galleryImages.map((image) => (
								<div className="gallery__grid-item" key={image.source}>
									<div className="gallery__image-wrapper">
										<img src={image.source}></img>
									</div>
								</div>
							))}
					</div>
				</div>
			</section>

			<style jsx>
				{`

				`}
			</style>
		</article>
	);
}
