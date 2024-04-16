import React from "react"

interface Props {
	children: React.ReactNode
	title: string
	description: string
	borders?: boolean
}

export default function InfoItem({
	children,
	title,
	description,
	borders = false,
}: Props) {
	return (
		<div
			className={`flex flex-col gap-2 items-center px-5 group ${
				borders ? "border-x-2 border-yellow-400 border-opacity-50" : ""
			}`}
		>
			{children}

			<h4 className="font-semibold text-2xl text-center">{title}</h4>

			<div className="w-[0rem] h-[0.1rem] bg-yellow-400/70 group-hover:w-[15rem] duration-200"></div>

			<p className="text-xs text-center">{description}</p>
		</div>
	)
}
