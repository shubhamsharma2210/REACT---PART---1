import { useParams } from "react-router-dom";
const User = () => {
    const {userid} = useParams()
    return (
    
    <>
    
    <div className=" flex bg-gray-600 text-white text-3xl items-center p-4">user : {userid}</div>
    
    </>

    )
}


export default User;