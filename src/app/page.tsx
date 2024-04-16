import Header from "./components/header"
import InfoHeader from "./components/info-header"
import Services from "./components/services"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-start">
			<Header />
			<InfoHeader />
			<Services />
		</main>
	)
}
