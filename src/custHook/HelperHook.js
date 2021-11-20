import { useSelector } from "react-redux";
const HelperHook=()=> {
    const token=useSelector((state) => state.user.jwtToken);
    const fetchOption = 
        { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        }
   return { fetchOption };
}
export default HelperHook;