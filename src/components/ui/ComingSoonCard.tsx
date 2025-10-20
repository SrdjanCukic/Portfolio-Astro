export default function ComingSoonCard() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-[#56d2c6]/50 bg-[#1E2A47]/50 shadow-lg p-6 animate-pulse">
			<h3 className="text-4xl font-semibold text-[#56d2c6]">
				Coming Soon...
			</h3>
			<p className="text-neutral-400 text-lg text-center">
				New project is on the way. Stay tuned!
			</p>
		</div>
	);
}
