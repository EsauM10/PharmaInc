import Axios from "axios";

export async function getUsers(limit){
	return Axios.get(`https://randomuser.me/api/?results=${limit}`).then(res => res.data);
}
