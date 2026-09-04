export function NavLink({
	href,
	children,
	external,
}: {
	href: string;
	children: React.ReactNode;
	external?: boolean;
}) {
	return (
		<a
			href={href}
			target={external ? "_blank" : undefined}
			rel={external ? "noreferrer" : undefined}
			className="
				group relative whitespace-nowrap px-6 py-2 text-[11px] font-light uppercase tracking-[0.3em] text-white/70 transition-colors duration-300 hover:text-white
			"
		>
			{children}

			<span
				className="
					absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-white/70 transition-all duration-300 group-hover:w-1/2
				"
			/>
		</a>
	);
}
