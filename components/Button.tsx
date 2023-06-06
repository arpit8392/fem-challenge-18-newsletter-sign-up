type Props = {
	title: string
}
const Button = ({ title }: Props) => {
	return (
		<button
			type='submit'
			className='w-full rounded-lg bg-darkSlateGrey py-4 text-center font-bold tracking-wide text-white hover:bg-btnGradient'>
			{title}
		</button>
	)
}
export default Button
