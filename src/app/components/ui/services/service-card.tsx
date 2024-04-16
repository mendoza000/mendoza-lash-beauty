import Image from "next/image"
import React from "react"

interface Props {
	imagePath: string
	link: string
	title: string
}

export default function ServiceCard({ imagePath, link, title }: Props) {
	return (
		<div className="relative group">
			<div className="avatar">
				<div className="w-full">
					<Image
						src={imagePath}
						alt="classic"
						width={300}
						height={200}
						draggable={false}
						className="rounded-3xl grayscale group-hover:grayscale-0 duration-200"
					/>
				</div>
			</div>

			<h4 className="absolute top-5 z-10 left-1/2 -translate-x-1/2 font-semibold text-center group-hover:bg-yellow-400 px-3 duration-200 text-xl">
				{title}
			</h4>

			<a
				className="btn btn-primary absolute z-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bottom-5"
				href={link}
				target="_blank"
			>
				Schedule
			</a>
		</div>
	)
}
