import { NavLink, Link } from 'react-router-dom';

import { BsFillCartFill } from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/UseCart ';
import useAdmin from '../../hooks/UseAdmin';

const Header = () => {
	const { user, logOut } = useAuth();
	const [ cart ] = useCart();
	const [isAdmin] = useAdmin()

	// add scrolling effect

	const style =
		'hover:btn-secondary rounded-md hover:text-white active:bg-primary active:text-white uppercase';

	const handleUserRemove = () => {
		logOut()
			.then(() => {})
			.catch((err) => {});
	};

	const largeDeviceMenuItems = (
		<>
			<li>
				<NavLink className={style} to='/'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink className={style} to='/menu'>
					Our menu
				</NavLink>
			</li>
			<li>
				<NavLink className={style} to='/order/salad'>
					Order Food
				</NavLink>
			</li>
			<li>
				<NavLink
					className={style}
					to={isAdmin ? 'dashboard/adminhome' : 'dashboard/userhome'}>
					Dashboard
				</NavLink>
			</li>
			<li>
				<NavLink
					to={'/dashboard/mycart'}
					className={
						'btn btn-primary mx-5 flex justify-center items-center w-12 rounded-full relative'
					}>
					<BsFillCartFill className='w-20' />
					<div className='badge absolute -top-2 left-6 w-5 h-5 text-black bg-white border-white'>
						{cart.length || 0}
					</div>
				</NavLink>
			</li>
		</>
	);

	return (
		<header
			className={`navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl mx-auto text-white`}>
			<div className='navbar font-semibold lg:w-11/12 mx-auto'>
				<div className='navbar-start'>
					<Link to='/' className='flex flex-col justify-center'>
						<span className='font-cinzel font-black md:text-2xl text-lg lg:text-3xl'>
							Awesome
						</span>
						<span className='font-cinzel hidden lg:inline md:inline md:tracking-widest lg:tracking-[.5rem] font-semibold text-2xl'>
							Restaurant
						</span>
					</Link>
				</div>
				<div className='navbar-end'>
					<div className='navbar-center hidden lg:flex'>
						<ul className='menu menu-horizontal p-0 gap-3'>
							{largeDeviceMenuItems}
						</ul>
					</div>
					{user?.email ? (
						<div className='flex gap-3 items-center dropdown dropdown-bottom dropdown-end'>
							<div
								tabIndex={0}
								className='tooltip tooltip-left tooltip-primary'
								data-tip={user.displayName}>
								<img
									className='rounded-full w-12'
									alt={user.displayName}
									src={user.photoURL}
								/>
							</div>
							<ul
								tabIndex={0}
								className='dropdown-content menu p-2 bg-white rounded-box w-52 flex flex-col gap-2'>
								<li className='list-none text-primary'>
									<Link
										className='w-full hover:bg-primary hover:text-white'
										to='/profile'>
										Profile
									</Link>
								</li>
								<li className='list-none text-primary'>
									<button
										onClick={handleUserRemove}
										className='btn btn-md rounded-md btn-outline btn-primary w-full hover:text-white'>
										Logout
									</button>
								</li>
							</ul>
						</div>
					) : (
						<Link
							to='/login'
							className='btn btn-md rounded-md btn-outline btn-primary lg:ml-5'>
							Log In
						</Link>
					)}
					<div className='dropdown dropdown-bottom dropdown-end flex'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-6 h-6'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
								/>
							</svg>
						</label>
						<ul className='menu menu-compact dropdown-content mt-3 p-2 bg-slate-900 rounded-box text-white w-52'>
							{largeDeviceMenuItems}
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
