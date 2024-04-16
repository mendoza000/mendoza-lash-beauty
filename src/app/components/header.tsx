import { IconMessage } from "@tabler/icons-react"
import Image from "next/image"
import React from "react"

export default function Header() {
	return (
		<header className="grid grid-cols-1 md:grid-cols-2 min-h-[100vh] gap-5 mt-20 md:mt-0">
			<div className="flex flex-col  justify-center gap-5">
				<span className="opacity-70 uppercase  z-10">
					✨ Stand Out with Irresistible Lashes! ✨
				</span>

				<h2 className="text-5xl font-semibold uppercase z-10">
					Enhance your look with our lash beauty services 👑
				</h2>

				<div className="z-10">
					<a
						href="https://api.whatsapp.com/send?phone=525527320451&text=Hi%F0%9F%91%8B.%20I%27m%20interested%20in%20Mendoza%20Lash%20Beauty%27s%20services!"
						target="_blank"
						className="btn btn-primary group "
					>
						<IconMessage className="h-6 w-6 group-hover:mr-2 duration-200" />
						Schedule your appointment
					</a>
				</div>

				<Image
					src={"/images/lash.png"}
					width={300}
					height={400}
					alt="lash header"
					draggable={false}
					className="grayscale flex md:hidden ml-auto -mt-44"
				/>
			</div>

			<div className="flex items-center justify-end">
				<Image
					src={"/images/lash.png"}
					width={400}
					height={500}
					alt="lash header"
					draggable={false}
					className="grayscale hidden md:flex"
				/>
			</div>
		</header>
	)
}
