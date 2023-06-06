import orderCoverImg from '../../../assets/shop/order.jpg';
import Cover from '../../shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/UseMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
	const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
	const { category } = useParams();
	const initialIndex = categories.indexOf(category);
	const [tabIndex, setTabIndex] = useState(initialIndex);
	const [menu] = useMenu();

	const desserts = menu.filter((item) => item.category === 'dessert');
	const soup = menu.filter((item) => item.category === 'soup');
	const salad = menu.filter((item) => item.category === 'salad');
	const pizza = menu.filter((item) => item.category === 'pizza');
	const drinks = menu.filter((item) => item.category === 'drinks');
	return (
		<div>
			<Helmet>
				<title>Awesome Restaurant | Order Food </title>
			</Helmet>
			<Cover img={orderCoverImg} title='Order Food'></Cover>
			<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
				<div className='flex justify-center w-2/6 p-3 text-white rounded mx-auto mt-10'>
					<TabList className='flex items-center gap-3'>
						<Tab className='bg-orange-300 rounded cursor-pointer border-b-4 hover:border-b-slate-900 py-2 px-4 focus:bg-slate-800 focus:text-white'>
							Salad
						</Tab>
						<Tab className='bg-orange-300 focus:bg-slate-800 focus:text-white rounded cursor-pointer border-b-4 hover:border-b-slate-900 py-2 px-4'>
							Pizza
						</Tab>
						<Tab className='bg-orange-300 focus:bg-slate-800 focus:text-white rounded cursor-pointer border-b-4 hover:border-b-slate-900 py-2 px-4'>
							Soup
						</Tab>
						<Tab className='bg-orange-300 focus:bg-slate-800 focus:text-white rounded cursor-pointer border-b-4 hover:border-b-slate-900 py-2 px-4'>
							Dessert
						</Tab>
						<Tab className='bg-orange-300 focus:bg-slate-800 focus:text-white rounded cursor-pointer border-b-4 hover:border-b-slate-900 py-2 px-4'>
							Drinks
						</Tab>
					</TabList>
				</div>
				<TabPanel>
					<OrderTab items={salad}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab items={pizza}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab items={soup}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab items={desserts}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab items={drinks}></OrderTab>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Order;
