import axios from "axios"
const api=axios.create({
    baseURL:"http://13.126.247.210:9137/api/hsd/list/v1?date=2025-04-25",
    
})

export const deletePost=(id)=>{
    return api.delete(`/${id}`)
}