'use client'

import Button from './Button'

const InputForm = () => {
	return (
		<form className='flex flex-col gap-y-6'>
			<div className='flex flex-col justify-center gap-y-2'>
				<label
					htmlFor='email'
					className='block text-xs font-bold tracking-wide text-darkSlateGrey'>
					Email address
				</label>
				<input
					type='email'
					name='email'
					id='email'
					autoComplete='off'
					placeholder='email@company.com'
					className='block w-full rounded-lg border-none px-6 py-4 text-darkSlateGrey outline-none ring-1 ring-inset ring-grey placeholder:text-darkSlateGrey/50 focus:border-none focus:outline-none focus:ring-darkSlateGrey active:border-none active:ring-darkSlateGrey '
				/>
			</div>

			<Button title='Subscribe to monthly newsletter' />
		</form>
	)
}
export default InputForm
