import Link from "next/link";


import React, { useRef, useState } from "react";






export default function Gallery(props) {


	return (
		<article className="content-section gallery-wrap" id="gallery">
			<section className="content-max-width content-section-gallery">
				<div className="gallery ">

			{props.title && <h5 className="mar-b-2">{props.title}</h5>
}
							

				 	<div className="gallery__grid-container">
						{props.galleryImages.length > 1 &&
							props.galleryImages.map((image) => (
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
