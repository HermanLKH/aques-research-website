import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchDevices = async () => {
  const response = await axios.get("api/devices");
  return response.data;
};

const useDevices = () => {
  return useQuery({
    queryKey: ["devices"],
    queryFn: fetchDevices,
  });
};

export default useDevices;
