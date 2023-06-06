import Features from '@/components/Features'
import InputForm from '@/components/InputForm'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='grid grid-cols-1 bg-white md:max-w-[928px] md:grid-cols-2 md:gap-x-10 md:rounded-4xl md:p-6 md:shadow-lg'>
			<div className='md:order-last '>
				<Image
					src={'/images/illustration-sign-up-mobile.svg'}
					alt='illustration image'
					width={375}
					height={284}
					className='block w-full md:hidden'
				/>
				<Image
					src={'/images/illustration-sign-up-desktop.svg'}
					alt='illustration image'
					width={400}
					height={593}
					className='hidden w-full md:block'
				/>
			</div>

			<div className='flex flex-col gap-y-10 px-6 py-10 text-darkSlateGrey md:justify-center md:text-left'>
				<Features />
				<InputForm />
			</div>
		</main>
	)
}
