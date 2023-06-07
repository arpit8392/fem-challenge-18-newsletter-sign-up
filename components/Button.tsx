type Props = {
	label: string
}
const Button = ({ label }: Props) => {
	return (
		<button
			type='submit'
			className='w-full rounded-lg bg-darkSlateGrey py-4 text-center font-bold tracking-wide text-white hover:bg-btnGradient hover:shadow-xl'>
			{label}
		</button>
	)
}

export default Button
