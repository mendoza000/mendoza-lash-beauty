import React from "react"
import ServiceList from "./ui/services/service-list"

export default function Services() {
	return (
		<div className="py-20 flex flex-col  min-w-full">
			<h2 className="text-4xl font-bold text-center">Our Services</h2>
			<p className="text-center text-2xl max-w-[25rem] mx-auto">
				Explore our range of <span className="bg-yellow-400">services</span> to{" "}
				<span className="bg-yellow-400">enhance</span> your natural beauty.
			</p>

			<ServiceList />
		</div>
	)
}
