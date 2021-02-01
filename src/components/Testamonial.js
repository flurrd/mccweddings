import Link from "next/link";

import React, { useRef, useState } from "react";

export default function Testamonial(props) {
	return (
		<article className="content-section testamonial-section" id="testamonial">
			<section className="content-max-width">
				<blockquote className="blockquote-testamonial">
					<em>
						<div dangerouslySetInnerHTML={{ __html: props.content }}></div>
					</em>
				</blockquote>
			</section>

			<style jsx>{``}</style>
		</article>
	);
}
