import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, isError, data: users = [], error, refetch } = useQuery(['users', user?.email], {
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        },
    });
return { users, isError, isLoading, error, refetch }; // Return refetch as part of the object

};

export default useUser;