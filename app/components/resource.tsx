export function Resource() {
	return (
		<div className="gap-3 flex flex-col p-4 w-[300px] rounded-xl bg-white">
			<h1 className="font-semibold text-xl">Excalidraw</h1>
			<p className="text-zinc-500 text-sm">
				Draw, create drawings that represent your work to manage your project
				better
			</p>
			<div className="bg-zinc-100 cursor-pointer rounded-lg flex justify-center items-center w-[30px] h-[30px]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					className="lucide lucide-link"
				>
					<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
					<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
				</svg>
			</div>
		</div>
	);
}
