import { useState } from "react";
//import 'bulma/css/bulma.min.css';

export default function Contact(props) {
	const [contact, setContact] = useState({
		name: "",
		email: "",
		subject: "StaticForms - Contact Form",
		honeypot: "", // if any value received in this field, form submission will be ignored.
		phone: "",
		message: "",
		replyTo: "@", // this will set replyTo of email to email address entered in the form
		accessKey: "9c86c327-b21f-4644-8ae7-40b0972a8b39", // get your access key from https://www.staticforms.xyz
	});
	const handleChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

	const [response, setResponse] = useState({
		type: "",
		message: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch("https://api.staticforms.xyz/submit", {
				method: "POST",
				body: JSON.stringify(contact),
				headers: { "Content-Type": "application/json" },
			});

			const json = await res.json();

			if (json.success) {
				setResponse({
					type: "success",
					message: "Thank you for reaching out to us.",
				});
			} else {
				setResponse({
					type: "error",
					message: json.message,
				});
			}
		} catch (e) {
			console.log("An error occurred", e);
			setResponse({
				type: "error",
				message: "An error occured while submitting the form",
			});
		}
	};
	return (
		<article className="content-section" id="contact">
			<section className="content-max-width contact-max-width">
				
				<div className="d-flex">
					<section className="d-flex f-justify-center contact-links btn-grp">
						<div className="d-inline-block contact-info-item">
							<p className="d-flex">
								<a className="btn d-flex f-justify-center" href="tel:+61 448 914 993">
									<div className="contact-phone-icon mar-r-1">
										<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" className="svg-inline--fa fa-mobile-alt fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
											<path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
										</svg>
									</div>
									<span>0418 113 799</span>
								</a>
							</p>
						</div>

						<div className="d-inline-block contact-info-item">
							<p className="d-flex">
								<a className="btn d-flex f-justify-center" href="mailto:contact@prosperdigital.com.au">
									<div className="contact-mail-icon mar-r-1 ">
										<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
											<path
												fill="currentColor"
												d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
											></path>
										</svg>
									</div>
									<span>mc@mccweddings.com</span>
								</a>
							</p>
						</div>
					</section>
				</div>

				<form action="https://api.staticforms.xyz/submit" method="post" onSubmit={handleSubmit} className="contact-form">
					<div className="field">
						<label className="label visually-hidden">Name</label>
						<div className="control">
							<input className="input" type="text" placeholder="Your Name" name="name" onChange={handleChange} required />
						</div>
					</div>
					<div className="field">
						<label className="label visually-hidden">Your Email</label>
						<div className="control">
							<input className="input" type="email" placeholder="Email" name="email" onChange={handleChange} required />
						</div>
					</div>
					<div className="field">
						<label className="label visually-hidden">Phone</label>
						<div className="control">
							<input className="input" type="text" placeholder="Phone" name="phone" onChange={handleChange} required />
						</div>
					</div>
					<div className="field" style={{ display: "none" }}>
						<label className="label visually-hidden">Title</label>
						<div className="control">
							<input type="text" name="honeypot" style={{ display: "none" }} onChange={handleChange} />
							<input type="hidden" name="subject" onChange={handleChange} />
						</div>
					</div>
					<div className="field">
						<label className="label visually-hidden">Message</label>
						<div className="control">
							<textarea className="textarea" rows="10" placeholder="Your Message" name="message" onChange={handleChange} required />
						</div>
					</div>
					<div className="field is-grouped">
						<div className="control">
							<button className="btn d-block" type="submit">
								Send
							</button>
						</div>
					</div>

					<div className="form-response">
						<div className={response.type === "success" ? "tile box notification is-primary" : "visually-hidden"}>
							<p>{response.message}</p>
						</div>
						<div className={response.type === "error" ? "tile box notification is-danger" : "visually-hidden"}>
							<p>{response.message}</p>
						</div>
					</div>
				</form>

				<style jsx>
					{`
						.btn {
							margin-top: 1rem;
							display: block;
							width: 100%;
						}
						.contact-form {
							display: flex;
							width: 100%;
							flex-direction: column;
							padding: 1.5rem;
							align-items: center;
							max-width: 600px;
						}

						.contact-form .btn {
							min-width: 50%;
							border: none;
						}
						.field {
							display: flex;
							flex: 1;
							width: 100%;
						}
						.control,
						input,
						textarea {
							width: 100%;

							display: block;
						}
						input,
						textarea {
							padding: 1rem 1.5rem;
							margin-top: 1.3rem;
						}
						.contact-form-section {
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							color: white;
							max-width: 1200px;
							margin-right: auto;
							margin-left: auto;
						}
						.contact-max-width {
							padding-top: 0;
						}

						@media screen and (max-width: 700px){
							.contact-links {
								display: flex;
								flex-direction: column;
							}
						}
						
					`}
				</style>
			</section>
		</article>
	);
}
