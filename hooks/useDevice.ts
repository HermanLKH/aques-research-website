import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchDevice = async (id: number) => {
  const response = await axios.get(`api/devices/${id}`);
  return response.data;
};

const useDevice = (id: number) => {
  return useQuery({
    queryKey: ["devices", "id"],
    queryFn: () => fetchDevice(id),
  });
};

export default useDevice;
