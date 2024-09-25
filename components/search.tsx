export function Search() {
	return (
		<div className="flex gap-2 -ml-1 bg-zinc-200 rounded-3xl w-[400px] h-[50px] items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="rgb(161 161 170)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				className="lucide lucide-search ml-4"
			>
				<circle cx="11" cy="11" r="8" />
				<path d="m21 21-4.3-4.3" />
			</svg>
      <input className="w-full py-2 outline-none bg-zinc-200 rounded-3xl placeholder:ml-8" placeholder="Resource name, words in description" />
		</div>
	);
}
