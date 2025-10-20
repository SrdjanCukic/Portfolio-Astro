import { useState } from "react";

type ProjectCardProps = {
	image: string;
	title: string;
	description: string;
	tag: string[];
	codeHref?: string;
	liveHref?: string;
};

export default function ProjectCard({
	image,
	title,
	description,
	tag,
	codeHref,
	liveHref,
}: ProjectCardProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-col rounded-2xl bg-[#1E2A47]/85 shadow-lg overflow-hidden border border-[#56d2c6]/30 max-w-md w-full">
			<div className="px-6 pt-6">
				<div className="relative rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
					<img
						src={image}
						alt={title}
						className="w-full h-44 object-cover"
						loading="lazy"
					/>
				</div>
			</div>

			<div className="flex flex-col flex-grow p-6">
				<div className="flex flex-wrap gap-2 mb-3">
					{tag.map((t, idx) => (
						<span
							key={idx}
							className="px-2 py-1 text-xs font-medium bg-[#56d2c6]/20 text-[#56d2c6] rounded-lg"
						>
							{t}
						</span>
					))}
				</div>

				<h2 className="text-xl font-semibold text-[#56d2c6] mb-3">
					{title}
				</h2>

				<div className="flex flex-col flex-grow gap-2">
					<p className="text-sm text-neutral-300 leading-relaxed line-clamp-4">
						{description}
					</p>
					<button
						onClick={() => setIsOpen(true)}
						className="mt-auto self-start text-[#56d2c6] text-xs font-semibold uppercase tracking-wide transition-colors duration-300 hover:text-[#48b9ae] hover:underline"
					>
						Read more
					</button>
				</div>

				<div className="mt-auto flex w-full items-center justify-between gap-4 pt-6">
					{codeHref && (
						<a
							href={codeHref}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 px-4 py-2 text-[#56d2c6] font-semibold rounded-full shadow-lg hover:shadow-[0_0_16px_rgba(86,210,198,0.75)] transition-all duration-300 border-2 border-[#56d2c6] bg-transparent text-sm uppercase tracking-wide"
							aria-label={`Pogledaj kod projekta ${title}`}
						>
							<span
								aria-hidden
								className="text-base font-semibold"
							>
								{"</>"}
							</span>
							Code
						</a>
					)}
					{liveHref && (
						<a
							href={liveHref}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 px-4 py-2 text-[#56d2c6] font-semibold rounded-full shadow-lg hover:shadow-[0_0_16px_rgba(86,210,198,0.75)] transition-all duration-300 border-2 border-[#56d2c6] bg-transparent text-sm uppercase tracking-wide"
							aria-label={`Otvori live verziju projekta ${title}`}
						>
							<span
								aria-hidden
								className="text-base font-semibold"
							>
								{"↗"}
							</span>
							Live
						</a>
					)}
				</div>
			</div>

			{isOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
					onClick={() => setIsOpen(false)}
				>
					<div
						className="max-w-2xl rounded-2xl bg-[#1E2A47] p-6 shadow-xl"
						onClick={(e) => e.stopPropagation()}
					>
						<h2 className="text-2xl font-semibold text-[#56d2c6] mb-4">
							{title}
						</h2>
						<p className="text-base text-neutral-200 leading-relaxed">
							{description}
						</p>
						<button
							onClick={() => setIsOpen(false)}
							className="mt-6 flex items-center justify-center gap-2 px-4 py-2 text-[#56d2c6] font-semibold rounded-full border-2 border-[#56d2c6]"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
