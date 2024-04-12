import Link from "next/link"
import React from "react"

interface Props {
	text: string
	href: string
}

export default function NavbarItem(props: Props) {
	return (
		<li>
			<Link className="hover:underline" href={props.href}>
				{props.text}
			</Link>
		</li>
	)
}
