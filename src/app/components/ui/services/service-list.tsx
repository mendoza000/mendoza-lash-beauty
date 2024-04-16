import React from "react"
import ServiceCard from "./service-card"

export default function ServiceList() {
	return (
		<div className="py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
			<ServiceCard
				link="https://api.whatsapp.com/send?phone=525527320451&text=Hi%F0%9F%91%8B.%20I%27m%20interested%20in%20Classic%20Lash%20services!"
				imagePath="/images/classic.jpeg"
				title="Classic Lash"
			/>
			<ServiceCard
				link="https://api.whatsapp.com/send?phone=525527320451&text=Hi%F0%9F%91%8B.%20I%27m%20interested%20in%20Mascara%20Lash%20services!"
				imagePath="/images/rimel.jpeg"
				title="Mascara"
			/>
			<ServiceCard
				link="https://api.whatsapp.com/send?phone=525527320451&text=Hi%F0%9F%91%8B.%20I%27m%20interested%20in%20Technological%20Volume%20Lash%20services!"
				imagePath="/images/Volumen.jpeg"
				title="Technological Volume"
			/>
			<ServiceCard
				link="https://api.whatsapp.com/send?phone=525527320451&text=Hi%F0%9F%91%8B.%20I%27m%20interested%20in%20By%20point%20Lash%20services!"
				imagePath="/images/classic.jpeg"
				title="By point"
			/>
		</div>
	)
}
