import { IconCrown, IconHome, IconMoodCheck } from "@tabler/icons-react"
import React from "react"
import InfoItem from "./ui/info-header/info-item"

export default function InfoHeader() {
	return (
		<div className="bg-zinc-900 px-10 py-10 rounded-t-[5rem] min-w-full -mt-14 z-20 grid grid-cols-1 md:grid-cols-3 text-white/70 gap-5 gap-y-10">
			<InfoItem
				title="Home service"
				description="We bring the experience to your home so you can enjoy convenience without leaving your house."
			>
				<IconHome className="h-14 w-14 text-yellow-400" />
			</InfoItem>

			<InfoItem
				title="Professional Experience"
				description="Trust our highly trained professionals to deliver standout results."
				borders
			>
				<IconMoodCheck className="h-14 w-14 text-yellow-400" />
			</InfoItem>

			<InfoItem
				title="Quality products"
				description="We use top-quality products to ensure the best care and results for your lashes."
			>
				<IconCrown className="h-14 w-14 text-yellow-400" />
			</InfoItem>
		</div>
	)
}
