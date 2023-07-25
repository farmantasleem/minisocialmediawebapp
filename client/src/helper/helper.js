import axios from "axios";
export const getData = async()=>{
   try {
    const resp=await axios.get("http://localhost:8081/post")
   console.log(resp.data.data)
    return resp.data.data
    
   } catch (error) {
        console.log(error.message)
        return []
   }
}