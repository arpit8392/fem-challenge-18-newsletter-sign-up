import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
	title: 'Newsletter Sign Up',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Created using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${roboto.className} h-screen bg-charcoalGrey text-white md:grid md:place-content-center`}>
				{children}
			</body>
		</html>
	)
}
