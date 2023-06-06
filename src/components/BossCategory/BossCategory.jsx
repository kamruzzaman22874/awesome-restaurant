import cheif from '../../assets/home/chef-service.jpg';
import './BossCategory.css'
const BossCategory = () => {
	return (
		<div className='relative text-center my-16 '>
			<img className='rounded ' src={cheif} alt='' />
			<div className='w-3/4 mx-auto absolute -mt-72 bg-opacity-60 rounded text-center left-36 bg-slate-900 py-16 text-white'>
				<div className=''>
					<h2 className='text-3xl'>Bistro Boss</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus, libero accusamus laborum deserunt ratione dolor
						officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
						nihil iusto ducimus incidunt quibusdam nemo.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BossCategory;
