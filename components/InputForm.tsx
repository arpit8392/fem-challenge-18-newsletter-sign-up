'use client'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Button from './Button'
import { useRouter } from 'next/navigation'

const schema = yup
	.object({
		email: yup
			.string()
			.email('Valid email required')
			.required('Valid email required'),
	})
	.required()

type FormData = yup.InferType<typeof schema>

const InputForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	})

	const router = useRouter()

	const submitHandler = (data: FormData) => {
		console.log(data.email)
		router.push(`/subscribe?email=${data.email}`)
	}

	return (
		<form
			onSubmit={handleSubmit(submitHandler)}
			noValidate
			className='flex flex-col gap-y-6'>
			<div className='flex flex-col justify-center gap-y-2'>
				<div className='flex flex-row justify-between'>
					<label
						htmlFor='email'
						className='block text-xs font-bold tracking-wide text-darkSlateGrey'>
						Email address
					</label>
					{errors.email?.message && (
						<p
							className='text-right text-xs font-bold text-tomato'
							role='alert'>
							{errors.email.message}
						</p>
					)}
				</div>
				<input
					type='email'
					id='email'
					autoComplete='off'
					{...register('email')}
					aria-invalid={errors.email ? 'true' : 'false'}
					placeholder='email@company.com'
					className={`input-field ${
						errors.email?.message
							? ' focus:bg-tomato/10 focus:text-tomato focus:ring-tomato active:bg-tomato/10 active:ring-tomato'
							: ' text-darkSlateGrey focus:ring-darkSlateGrey active:ring-darkSlateGrey'
					}`}
				/>
			</div>

			<Button label='Subscribe to monthly newsletter' />
		</form>
	)
}
export default InputForm
