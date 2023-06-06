import Button from '@/components/Button'
import Image from 'next/image'

type Props = {}
const Subscribe = (props: Props) => {
	return (
		<main className='flex h-screen flex-col justify-center gap-y-10 bg-white px-6 py-10 md:h-min md:max-w-lg md:rounded-4xl md:px-16 md:py-12'>
			<div>
				<Image src='/images/icon-success.svg' alt='' width={64} height={64} />
			</div>
			<div className='flex flex-col gap-y-6'>
				<h1 className='text-4xl font-bold text-darkSlateGrey md:text-5xl'>
					Thanks for subscribing!
				</h1>
				<p className='text-darkSlateGrey'>
					A confirmation email has been sent to{' '}
					<span className='font-bold'>ash@loremcompany.com</span>. Please open
					it and click the button inside to confirm your subscription
				</p>
			</div>

			<div className='sticky top-[100vh]'>
				<Button title='Dismiss message' />
			</div>
		</main>
	)
}
export default Subscribe
