function Contact() {
	return (
		<section
			className="container mx-auto py-20 px-4 md:min-h-screen flex flex-col items-center justify-center"
			id="contact"
		>
			<h1 className="text-6xl font-bold font-mono tracking-widest cursor-auto mb-8">
				<div className="relative">
					<div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#56d2c6]"></div>
					<div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#56d2c6]"></div>
					<span className="text-white transition-all duration-500 hover:text-[#56d2c6] hover:drop-shadow-[0_0_10px_rgba(86,210,198,0.8)]">
						Contact
					</span>
				</div>
				<br />
			</h1>
			{/* Heading */}
			<h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#56d2c6]">
				Get in Touch
			</h2>
			<p className="text-gray-300 mb-12 text-center max-w-xl">
				Always open to new opportunities, collaborations, or just a
				friendly chat. Feel free to reach out via the links below.
			</p>

			{/* Card container */}
			<div className="bg-[#1E2A47]/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-[#56d2c6]/20 w-full max-w-md text-center">
				<p className="mb-4 text-gray-200">📍 Novi Sad, Serbia</p>

				{/* Icons */}
				<div className="flex gap-8 justify-center">
					{/* GitHub */}
					<a
						href="https://github.com/SrdjanCukic"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit my GitHub profile"
						className="text-white hover:text-[#56d2c6] transition transform hover:scale-110 animate-fade-in-up text-3xl"
					>
						<svg
							fill="currentColor"
							viewBox="0 0 24 24"
							className="w-8 h-8"
						>
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
						</svg>
					</a>

					{/* LinkedIn */}
					<a
						href="https://www.linkedin.com/in/srdjan-cukic-4a50591a3"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit my LinkedIn profile"
						className="text-white hover:text-[#56d2c6] transition transform hover:scale-110 animate-fade-in-up delay-100 text-3xl"
					>
						<svg
							fill="currentColor"
							viewBox="0 0 24 24"
							className="w-8 h-8"
						>
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
						</svg>
					</a>

					{/* Email */}
					<a
						href="mailto:cukic.srdjan@gmail.com"
						aria-label="Send me an email"
						className="text-white hover:text-[#56d2c6] transition transform hover:scale-110 animate-fade-in-up delay-200 text-3xl"
					>
						<svg
							fill="currentColor"
							viewBox="0 0 24 24"
							className="w-8 h-8"
						>
							<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 12.773l9.454-8.952h.91A1.636 1.636 0 0 1 24 5.457z" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contact;
