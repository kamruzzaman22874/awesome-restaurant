import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_image_upload_token;
console.log(img_hosting_token);

const AddItem = () => {
	const [axiosSecure] = useAxiosSecure();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
	const onSubmit = (data) => {
		const formData = new FormData();
		formData.append('image', data.image[0]);
		fetch(img_hosting_url, {
			method: 'POST',
			body: formData,
		})
		.then(res => res.json())
		.then(imgResponse =>{
			if (imgResponse.success) {
				const imgUrl = imgResponse.data.display_url;
				const { name, price, category, recipe } = data;
				const newItem = { name, price: parseFloat(price), category, recipe, image: imgUrl };
				axiosSecure.post('/menu', newItem)
				.then(data => {
					if (data.data.insertedId) {
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Your work has been saved',
							showConfirmButton: false,
							timer: 1500,
						});
					}
				})
			}
		})
		console.log(data);
	};
	console.log(errors);
	return (
		<div className='w-full px-12'>
			<SectionTitle
				subHeading="What's New"
				heading='Add An Item'></SectionTitle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='form-control w-full'>
					<label className='label'>
						<span className='label-text font-semibold'>Recipe Name*</span>
					</label>
					<input
						type='text'
						placeholder='Recipe Name'
						{...register('name', { required: true, maxLength: 120 })}
						className='input input-bordered w-full'
					/>
				</div>
				<div className='flex my-4'>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text font-semibold'>Category*</span>
						</label>
						<select
							defaultValue='Pick One'
							{...register('category', { required: true })}
							className='select select-bordered'>
							<option disabled>
								Pick One
							</option>
							<option>Pizza</option>
							<option>Soup</option>
							<option>Salad</option>
							<option>Desert</option>
							<option>Drinks</option>
						</select>
					</div>
					<div className='form-control w-full ml-4'>
						<label className='label'>
							<span className='label-text font-semibold'>Price</span>
						</label>
						<input
							type='number'
							placeholder='Price'
							{...register('price', { required: true })}
							className='input input-bordered w-full'
						/>
					</div>
				</div>
				<div className='form-control'>
					<label className='label'>
						<span className='label-text'>Recipe Details</span>
					</label>
					<textarea
						className='textarea textarea-bordered h-24'
						{...register('recipe', { required: true })}
						placeholder='Details'></textarea>
				</div>
				<div className='form-control w-full my-4'>
					<label className='label'>
						<span className='label-text'>Item Image*</span>
					</label>
					<input
						type='file'
						{...register('image', { required: true })}
						className='file-input file-input-bordered w-full'
					/>
				</div>
				<input
					className='btn btn-sm mt-4 mb-6'
					type='submit'
					value='Add Item'
				/>
			</form>
		</div>
	);
};

export default AddItem;
