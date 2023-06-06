import { useEffect } from 'react';
import { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import SingleChef from './SingleChef';

const ChefRecommends = () => {
	const [chefs, setChefs] = useState([]);

	useEffect(() => {
		fetch('chef.json')
			.then((res) => res.json())
			.then((data) => setChefs(data));
	}, []);
	return (
		<div>
			<SectionTitle
				subHeading='---Should Try---'
				heading='CHEF RECOMMENDS'></SectionTitle>
			<div className='grid md:grid-cols-3 gap-6'>
				{chefs.map((chef) => (
					<SingleChef key={chef._id} chef={chef}></SingleChef>
				))}
			</div>
		</div>
	);
};

export default ChefRecommends;
