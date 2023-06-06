import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		createUser(data.email, data.password).then((result) => {
			const signedInUser = result.user;
			console.log(signedInUser);
			updateUserProfile(data.name, data.photoURL)
				.then(() => {
					const saveUser = {name: data.name, email:data.email}
					fetch('http://localhost:5000/users', {
						method: 'POST',
						headers: { 'content-type': 'application/json' },
						body: JSON.stringify(saveUser),
					})
						.then((res) => res.json())
						.then((data) => {
							if (data.insertedId) {
								reset();
								Swal.fire({
									position: 'top-end',
									icon: 'success',
									title: 'User created successfully',
									showConfirmButton: false,
									timer: 1500,
								});
								navigate('/');
							}
						});
				})
				.catch((err) => console.log(err));
		});
	};
	return (
		<>
			<Helmet>
				<title>Awesome Restaurant || Sign Up</title>
			</Helmet>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<div className='text-center w-1/2 lg:text-left'>
						<h1 className='text-5xl font-bold'>Sign up now!</h1>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
					<div className='card  w-1/2 max-w-sm shadow-2xl bg-base-100'>
						<form onSubmit={handleSubmit(onSubmit)} className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									type='text'
									name='name'
									{...register('name', { required: true })}
									placeholder='email'
									className='input input-bordered'
								/>
								{errors.name && (
									<span className='text-orange-500 my-2 '>
										Name is required
									</span>
								)}
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Photo URL</span>
								</label>
								<input
									type='text'
									{...register('photoURL', { required: true })}
									placeholder='Phot URL'
									className='input input-bordered'
								/>
								{errors.photoURL && (
									<span className='text-orange-500 my-2 '>
										Photo URL is required
									</span>
								)}
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='email'
									name='email'
									{...register('email', { required: true })}
									placeholder='email'
									className='input input-bordered'
								/>
								{errors.email && (
									<span className='text-orange-500 my-2 '>
										Email is required
									</span>
								)}
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									type='password'
									name='password'
									{...register('password', {
										required: true,
										minLength: 6,
										maxLength: 20,
										pattern:
											/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/,
									})}
									placeholder='password'
									className='input input-bordered'
								/>
								{errors.password?.type === 'required' && (
									<p className='text-orange-500 my-2 '>Password required</p>
								)}
								{errors.password?.type === 'minLength' && (
									<p className='text-orange-500 my-2 '>
										Password Must be 6 characters
									</p>
								)}
								{errors.password?.type === 'maxLength' && (
									<p className='text-orange-500 my-2 '>
										Password Must be less than 20 characters
									</p>
								)}
								{errors.password?.type === 'pattern' && (
									<p className='text-orange-500 my-2 '>
										Password Must have one uppercase,one lowercase , one number
										and one special character
									</p>
								)}
							</div>
							<div className='form-control mt-6'>
								<input
									className='btn btn-outline border-0 border-b-4 border-b-orange-500 mt-4'
									type='submit'
									value='signup'
								/>
							</div>
						</form>
						<p className='text-center py-4 text-orange-500'>
							<small>
								Already have an account ? <Link to='/login'>Please Login</Link>
							</small>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
