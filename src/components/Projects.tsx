import ProjectCard from "./ui/ProjectCard";
import ComingSoonCard from "./ui/ComingSoonCard";
import { projects } from "../data/projects";

function Projects() {
	return (
		<section
			id="projects"
			className="container mx-auto py-20 px-4 min-h-screen flex flex-col items-center"
		>
			<h1 className="text-6xl font-bold font-mono tracking-widest cursor-auto mb-8">
				<div className="relative">
					<div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#56d2c6]"></div>
					<div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#56d2c6]"></div>
					<span className="text-white transition-all duration-500 hover:text-[#56d2c6] hover:drop-shadow-[0_0_10px_rgba(86,210,198,0.8)]">
						Projects
					</span>
				</div>
				<br />
			</h1>

			<div className="flex justify-center items-center min-h-[50vh]">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							image={project.image}
							description={project.description}
							tag={project.technologies}
							title={project.title}
							codeHref={project.codeHref}
							liveHref={project.liveHref}
						/>
					))}
					<ComingSoonCard />
				</div>
			</div>
		</section>
	);
}

export default Projects;
