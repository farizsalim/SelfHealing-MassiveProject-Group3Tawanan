import axios from "axios";
import Swal from "sweetalert2";

export const postApi = async (api, data) =>{
    try {
        const response = await axios.post(api,data);
        console.log(response);
        return data;
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        })
    }
}