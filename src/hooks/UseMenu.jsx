// use useQuery 

import { useQuery } from "@tanstack/react-query";
const useMenu = () => {
	const { data: menu = [], isLoading: loading ,refetch} = useQuery({
		queryKey: ['menu'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/menu');
			return res.json()
		}
	})
	return [menu, loading, refetch];
}
export default useMenu;


// use axios 
// 	const [axiosSecure] = useAxiosSecure();
// 	const {
// 		isLoading,
// 		data: menu = [],
// 		isError,
// 		error,
// 		refetch,
// 	} = useQuery(['menu'], {
// 		queryFn: async () => {
// 			const res = await axiosSecure('/menu');
// 			// console.log(res);
// 			return res.data;
// 		},
// 	});

// 	return [menu];
// };
	
	// normal use 
	// useEffect(() => {
	// 	fetch('http://localhost:5000/menu')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setMenu(data);
	// 			setLading(false);
	// 		});
    // }, []);


