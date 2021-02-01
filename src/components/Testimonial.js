import Link from "next/link";

import React, { useRef, useState } from "react";

export default function Testimonial(props) {
	return (
		<article className="content-section testimonial-section" id="testimonial">
			<section className="content-max-width">
				<blockquote className="blockquote-testimonial">
					<em>
						<div dangerouslySetInnerHTML={{ __html: props.content }}></div>
					</em>
				</blockquote>
			</section>

			<style jsx>{``}</style>
		</article>
	);
}
