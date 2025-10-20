import React, { useState, useEffect } from "react";

const NAV_ITEMS = [
	{ id: "hero", label: "Home" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
];

const Header: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [isAtTop, setIsAtTop] = useState<boolean>(true);
	const [currentSection, setCurrentSection] = useState<string>("hero");

	useEffect(() => {
		const handleScrollState = () => {
			setIsAtTop(window.scrollY <= 10);
		};

		const handleSectionChange = () => {
			const scrollPosition = window.scrollY + 200;

			for (const item of NAV_ITEMS) {
				const element = document.getElementById(item.id);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setCurrentSection(item.id);
						break;
					}
				}
			}
		};

		handleScrollState();
		handleSectionChange();

		window.addEventListener("scroll", handleScrollState);
		window.addEventListener("scroll", handleSectionChange);

		return () => {
			window.removeEventListener("scroll", handleScrollState);
			window.removeEventListener("scroll", handleSectionChange);
		};
	}, []);

	const handleScroll = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			const prefersReduced = window.matchMedia(
				"(prefers-reduced-motion: reduce)"
			).matches;
			el.scrollIntoView({
				behavior: prefersReduced ? "auto" : "smooth",
				block: "start",
			});
		}
		setOpen(false);
	};

	const shouldExpand = isAtTop || isHovered;
	const navLinkClass = (isActive: boolean) =>
		`relative px-2 transition-all duration-300 cursor-pointer ${
			shouldExpand ? "py-2 text-base" : "py-1 text-sm"
		}
         hover:text-[#22d3ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]
         focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]
         after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-[#22d3ee] after:transition-all
         ${
				isActive
					? "text-[#22d3ee] after:w-full"
					: "text-[#d1d5db] hover:after:w-full"
			}`;

	return (
		<header
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`top-0 w-full fixed z-50 bg-[#1e293b] text-[#d1d5db] transition-all duration-300 ${
				shouldExpand
					? "py-4 shadow-lg"
					: "py-2 shadow-md backdrop-blur-md"
			}`}
		>
			<div className="container mx-auto flex justify-between items-center px-4 transition-all duration-300">
				{/* Logo (scroll to top) */}
				<button
					onClick={() => handleScroll("hero")}
					className={`font-bold text-[#22d3ee] tracking-wide cursor-pointer transition-all duration-300 ${
						shouldExpand ? "text-2xl" : "text-xl"
					}
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]
                     focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]`}
					aria-label="Scroll to top"
				>
					Srđan Čukić
				</button>

				{/* Desktop Navigation */}
				<nav
					className={`hidden md:flex items-center transition-all duration-300 ${
						shouldExpand ? "space-x-6" : "space-x-4"
					}`}
					aria-label="Main navigation"
				>
					{NAV_ITEMS.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							onClick={(e) => {
								e.preventDefault();
								handleScroll(item.id);
							}}
							aria-current={
								currentSection === item.id ? "page" : undefined
							}
							className={navLinkClass(currentSection === item.id)}
						>
							{item.label}
						</a>
					))}
				</nav>

				{/* Hamburger Button */}
				<button
					onClick={() => setOpen((v) => !v)}
					className="md:hidden cursor-pointer flex flex-col justify-center items-center w-10 h-10 relative z-50
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]
                     focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]"
					aria-label="Toggle navigation"
					aria-expanded={open}
					aria-controls="mobile-menu"
				>
					<span
						className={`w-6 h-0.5 bg-[#22d3ee] transition-all duration-300 ${
							open ? "rotate-45 translate-y-1.5" : ""
						}`}
					/>
					<span
						className={`w-6 h-0.5 bg-[#22d3ee] my-1 transition-all duration-300 ${
							open ? "opacity-0" : ""
						}`}
					/>
					<span
						className={`w-6 h-0.5 bg-[#22d3ee] transition-all duration-300 ${
							open ? "-rotate-45 -translate-y-1.5" : ""
						}`}
					/>
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				id="mobile-menu"
				className={`absolute right-0 w-full md:hidden transition-transform duration-300 ${
					open ? "translate-x-0" : "translate-x-full"
				} ${
					shouldExpand ? "top-16" : "top-12"
				} bg-[#1e293b] shadow-lg rounded-b-lg`}
			>
				<nav
					className="flex flex-col items-center space-y-4 py-4"
					aria-label="Mobile navigation"
				>
					{NAV_ITEMS.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							onClick={(e) => {
								e.preventDefault();
								handleScroll(item.id);
							}}
							aria-current={
								currentSection === item.id ? "page" : undefined
							}
							className={navLinkClass(currentSection === item.id)}
						>
							{item.label}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
