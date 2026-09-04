export function HomePage() {
	return (
		<main className="relative min-h-dvh overflow-hidden bg-black text-white">
			{/* Background */}
			<div
				aria-hidden="true"
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage:
						"url('https://files.nicodes.ru/files/nicodes-bg.jpg')",
				}}
			/>

			{/* Затемнение */}
			<div className="absolute inset-0 bg-black/25" />

			{/* Мягкая виньетка */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0.7)_100%)]" />

			{/* Верхнее затемнение */}
			<div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-black/45 to-transparent" />

			{/* Контент */}
			<div className="relative z-10 flex min-h-dvh flex-col px-5 sm:px-8 lg:px-12">
				{/* Маленький декоративный элемент справа */}
				<div className="absolute right-6 top-6 hidden sm:block lg:right-12 lg:top-10">
					<div className="flex size-11 items-center justify-center rounded-full border border-white/20">
						<span className="size-1 rounded-full bg-white/90" />
					</div>
				</div>

				{/* Центр */}
				<div className="flex flex-1 flex-col items-center justify-center">
					{/* Name */}
					<header className="-mt-20 mb-12 text-center sm:-mt-16 lg:mb-16">
						<h1 className="text-[clamp(3rem,8vw,7.5rem)] font-extralight leading-none tracking-[0.24em] text-white/95">
							Zhulepa Nikolay
						</h1>

						<p className="mt-4 text-[10px] font-light uppercase tracking-[0.55em] text-white/75 sm:text-xs lg:text-sm">
							Fullstack Developer
						</p>

						{/* Тонкая линия под заголовком */}
						<div className="mx-auto mt-5 h-px w-40 bg-linear-to-r from-transparent via-white/40 to-transparent sm:w-72" />
					</header>

					{/* Navigation row */}
					<div className="flex w-full max-w-6xl items-center gap-5 lg:gap-10">
						<SideLine />

						<nav
							className="
								flex items-center
								rounded-full
								border border-white/20
								bg-black/10
								px-8 py-4
								backdrop-blur-md
							"
						>
							<NavLink href="https://resume.nicodes.ru/" external>
								Резюме
							</NavLink>

							<Divider />

							<NavLink
								href="https://github.com/dotcoredev"
								external
							>
								GitHub
							</NavLink>

							<Divider />

							<NavLink href="mailto:lunan.dev@email.com">
								Контакты
							</NavLink>
						</nav>

						<SideLine reverse />
					</div>
				</div>
			</div>
		</main>
	);
}

function NavLink({
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
				group relative
				whitespace-nowrap
				px-6 py-2
				text-[11px]
				font-light
				uppercase
				tracking-[0.3em]
				text-white/70
				transition-colors duration-300
				hover:text-white
			"
		>
			{children}

			<span
				className="
					absolute bottom-0 left-1/2
					h-px w-0
					-translate-x-1/2
					bg-white/70
					transition-all duration-300
					group-hover:w-1/2
				"
			/>
		</a>
	);
}

function Divider() {
	return <span className="hidden h-7 w-px bg-white/20 sm:block" />;
}

function SideLine({ reverse = false }: { reverse?: boolean }) {
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
