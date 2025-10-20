import Tilter from "./ui/Tilter";

function Skills() {
	const icons = [
		{
			src: "/icons/icons8-typescript-96.png",
			alt: "TypeScript Icon",
			label: "TypeScript",
		},
		{
			src: "/icons/icons8-javascript-96.png",
			alt: "JavaScript Icon",
			label: "JavaScript",
		},
		{
			src: "/icons/icons8-nodejs-96.png",
			alt: "Node.js Icon",
			label: "Node.js",
		},
		{
			src: "/icons/icons8-tailwindcss-96.png",
			alt: "Tailwind CSS Icon",
			label: "Tailwind CSS",
		},
		{ src: "/icons/icons8-html-96.png", alt: "HTML Icon", label: "HTML5" },
		{
			src: "/icons/icons8-react-96.png",
			alt: "React Icon",
			label: "React",
		},
		{ src: "/icons/icons8-css-96.png", alt: "CSS Icon", label: "CSS3" },
		{
			src: "/icons/icons8-material-ui-96.png",
			alt: "Material UI Icon",
			label: "Material UI",
		},
		{ src: "/icons/icons8-vite-96.png", alt: "Vite Icon", label: "Vite" },
		{
			src: "/icons/icons8-redux-96.png",
			alt: "Redux Icon",
			label: "Redux",
		},
		{
			src: "/icons/icons8-github-96.png",
			alt: "Git Icon",
			label: "Git & GitHub",
		},
		{ src: "/icons/icons8-sass-96.png", alt: "Sass Icon", label: "Sass" },
	];

	return (
		<div
			className="container mx-auto py-20 px-4 min-h-screen flex flex-col items-center"
			id="skills"
		>
			<h1 className="text-6xl font-bold font-mono tracking-widest cursor-auto mb-12">
				<div className="relative">
					<div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#56d2c6]" />
					<div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#56d2c6]" />
					<span className="text-white transition-all duration-500 hover:text-[#56d2c6] hover:drop-shadow-[0_0_10px_rgba(86,210,198,0.8)]">
						Skills
					</span>
				</div>
				<br />
			</h1>

			<div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16 w-full">
				<div className="flex-1 space-y-6 text-justify lg:text-left">
					<p className="text-2xl font-mono tracking-wide text-center lg:text-left animate-fade-in-up">
						I'm a self-taught Front-End Developer with a passion for
						building clean, responsive, and user-friendly web
						experiences.
					</p>
					<p className="text-2xl font-mono tracking-wide text-center lg:text-left animate-fade-in-up delay-100">
						My journey into web development started with curiosity
						and grew into a full-fledged passion for crafting
						beautiful and functional interfaces using React,
						TypeScript, and other modern front-end technologies.
					</p>
					<p className="text-2xl font-mono tracking-wide text-center lg:text-left animate-fade-in-up delay-200">
						I'm always eager to learn, improve, and take on new
						challenges.
					</p>
				</div>

				<div className="flex-1">
					<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-4 lg:gap-10">
						{icons.map(({ src, alt, label }, index) => (
							<div
								key={index}
								className="flex flex-col items-center gap-3 text-center"
							>
								<Tilter>
									<img
										src={src}
										alt={alt}
										className="w-24 h-24"
										loading="lazy"
									/>
								</Tilter>
								<span className="px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-[#56d2c6] bg-[#56d2c6]/10 border border-[#56d2c6]/40 rounded-full shadow-[0_0_15px_rgba(86,210,198,0.15)]">
									{label}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
