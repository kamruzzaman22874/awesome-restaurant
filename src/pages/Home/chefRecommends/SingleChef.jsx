const SingleChef = ({ chef }) => {
	const { name, img, details } = chef;
	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<figure className='px-10 pt-10'>
				<img src={img} alt='Shoes' className='rounded-xl' />
			</figure>
			<div className='card-body items-center text-center'>
				<h2 className='card-title'>{name}</h2>
				<p>{details}</p>
				<div className='card-actions'>
					<button className='btn btn-outline border-0 border-b-4 border-orange-500'>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleChef;
