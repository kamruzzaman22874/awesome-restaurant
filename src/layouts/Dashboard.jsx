import { NavLink, Outlet } from 'react-router-dom';
import {
	FaShoppingCart,
	FaWallet,
	FaCalendarAlt,
	FaHome,
	FaUtensils,
	FaBook,
	FaUsers,
} from 'react-icons/fa';
import { GrMenu } from 'react-icons/gr';
import useCart from '../hooks/UseCart ';
import useAdmin from '../hooks/UseAdmin';

const Dashboard = () => {
	const [cart] = useCart();

	// TODO : load data from the server to have dynamic isAdmin based on data

	const [isAdmin] = useAdmin();
	return (
		<div className='drawer drawer-mobile'>
			<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content'>
				<Outlet></Outlet>
				<label
					htmlFor='my-drawer-2'
					className='btn btn-primary drawer-button lg:hidden'>
					Open drawer
				</label>
			</div>
			<div className='drawer-side bg-[#D1A054]'>
				<label htmlFor='my-drawer-2' className='drawer-overlay'></label>
				<ul className='menu p-4 w-80 '>
					{isAdmin ? (
						<>
							<li>
								<NavLink to='/dashboard/adminhome'>
									<FaHome />
									Admin Home
								</NavLink>
							</li>
							<li>
								<NavLink to='/dashboard/addItem'>
									<FaUtensils />
									Add an Item
								</NavLink>
							</li>
							<li>
								<NavLink to='/dashboard/manageitems'>
									<FaWallet />
									Manage Items
								</NavLink>
							</li>
							<li>
								<NavLink to='/dashboard/history'>
									<FaBook />
									Manage Bookings
								</NavLink>
							</li>
							<li>
								<NavLink to='/dashboard/allusers'>
									<FaUsers />
									All Users
								</NavLink>
							</li>
						</>
					) : (
						<>
							<li>
								<NavLink to='/dashboard/userhome'>
									<FaHome />
									User Home
								</NavLink>
							</li>
							<li>
								<NavLink to='/dashboard/reservation'>
									<FaCalendarAlt />
									Reservation
								</NavLink>
							</li>
							<li>
								<NavLink to='/dashboard/history'>
									<FaWallet />
									Payment History
								</NavLink>
							</li>
							<li>
								<NavLink to='/dashboard/mycart'>
									<FaShoppingCart />
									My Cart
									<div className='badge badge-secondary'>
										+ {cart.length || 0}
									</div>
								</NavLink>
							</li>
						</>
					)}

					<div className='divider'></div>
					<li>
						<NavLink to='/'>
							<FaHome /> Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/menu'>
							{' '}
							<GrMenu /> Our menu{' '}
						</NavLink>
					</li>
					<li>
						<NavLink className='p-4' to='/order/salad'>
							Order Food
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
