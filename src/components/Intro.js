import Link from "next/link";
import { motion, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";

import React, { useRef, useState } from "react";
import { useIntersectionObserver } from "./hook";

import Flourish from "../components/Flourish";

export default function Intro(props) {
	const root = useRef();
	const target = useRef();
	const rootMargin = "0px";
	const [isThingIntersecting, setThingIntersecting] = useState();

	// Here's our hook! Let's give it some configuration...
	useIntersectionObserver({
		root,
		target,
		rootMargin,

		// What do we do when it intersects?
		// The signature of this callback is (collectionOfIntersections, observerElement).
		onIntersect: ([{ isIntersecting }]) => setThingIntersecting(isIntersecting),
	});

	return (
		<article className="content-section" ref={target} id="about">
			<section className="content-max-width content-intro">
				{/* <Flourish></Flourish> */}
                <img className="profile-img mar-l-auto mar-r-auto d-inline-block" src="../static/profile.png"></img>
                <div className="rte intro mar-t-3">
					<h2>It is my wish to make your day special</h2>

					<p>I offer a warm, compassionate and professional service to my clients. My promise is to make your wedding day or life celebration memorable, hearfteft, sacred and authentic.</p>

					<p>Primarily working on the Central Coast and Lake Macquarie areas. </p>
					<p>There are many beautiful venues to choose from and if you are finding it hard to choose, feel free to get in touch for some fabulous recommendations for your ceremony.</p>
					<p><strong><em>Contact me via phone, email or the form below.</em></strong></p>
				</div>
			</section>

            <style jsx>
          {`



            .profile-img {
				width: 66%;
				max-width: 300px;
				filter: grayscale(1);
			}
			
			.content-intro {
				padding-top: 0;
				padding-bottom: 1rem;
			}



        `}
        </style>   
		</article>


	);
}
