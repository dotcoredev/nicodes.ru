export function SideLine({ reverse = false }: { reverse?: boolean }) {
	return (
		<div
			className={`hidden flex-1 items-center xl:flex ${
				reverse ? "flex-row-reverse" : ""
			}`}
		>
			<div
				className={`h-px w-full ${reverse ? "bg-linear-to-l" : "bg-linear-to-r"} from-transparent via-white/25 to-white/50`}
			/>

			<span className="size-1 shrink-0 rounded-full bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
		</div>
	);
}
