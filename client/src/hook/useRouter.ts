import { useNavigate } from "react-router-dom";

export const useRouter = () => {
  const router = useNavigate();

  return { router };
};
