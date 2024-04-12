import Link from "next/link"
import React from "react"
import NavbarItem from "./navbar-item"
import { IconLanguage, IconMenu2 } from "@tabler/icons-react"

export default function Navbar() {
	return (
		<nav className="absolute top-0 left-0 min-w-full z-30">
			<div className="py-4 justify-between flex items-center lg:mx-40 px-5 md:mx-10 mx-0 ">
				<ul className="gap-5 hidden md:flex">
					<NavbarItem text="Home" href="#" />
					<NavbarItem text="Services" href="#" />
					<NavbarItem text="About us" href="#" />
					<NavbarItem text="Contact" href="#" />
				</ul>

				<div className="flex items-center gap-5 justify-between md:justify-normal min-w-full md:min-w-min">
					<a
						className="opacity-70 hover:underline hidden md:flex"
						href="https://api.whatsapp.com/send?phone=525527320451&text=Hi%F0%9F%91%8B.%20I%27m%20interested%20in%20Mendoza%20Lash%20Beauty%27s%20services!"
					>
						+52 55 2732 0451
					</a>

					<div className="dropdown dropdown-hover dropdown-bottom">
						<div tabIndex={0} role="button" className="btn btn-sm my-auto z-20">
							<IconLanguage className="h-5 w-5" />
						</div>
						<ul
							tabIndex={0}
							className="dropdown-content z-20 menu p-2 shadow bg-base-100 rounded-box w-32"
						>
							<li>
								<a>English</a>
							</li>
							<li>
								<a>Español</a>
							</li>
						</ul>
					</div>

					<a
						className="opacity-70 hover:underline md:hidden flex"
						href="https://api.whatsapp.com/send?phone=525527320451&text=Hi%F0%9F%91%8B.%20I%27m%20interested%20in%20Mendoza%20Lash%20Beauty%27s%20services!"
					>
						+52 55 2732 0451
					</a>

					<button className="btn btn-sm flex md:hidden">
						<IconMenu2 />
					</button>
				</div>
			</div>
		</nav>
	)
}
