import useSWR from "swr";
import axios from "axios";

const useCurrentUser = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);
  return { data, error, isLoading, mutate };
}

export default useCurrentUser;