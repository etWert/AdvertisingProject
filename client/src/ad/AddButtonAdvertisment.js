import { useState } from "react"
import AddAdvertisment from "./AddAdvertisment"
import Axios from "axios"

const AddButtonAdvertisment = ({ location,fetchAds}) => {
    const [click, setClick] = useState(false)
    // const navigate = useNavigate()
    // navigate("/photos")


    const func = async () => {
        setClick(true)
        // const { data } = await Axios.post(`http://localhost:1212/ad/${location}`)
        // console.log(data);
        // הדטה מחזיר את שם התמונה במקרה שהמקום תפוס
        // למה צריך את זה אין בכלל אפשרות ללחוץ על מיקום תפוס
    }


    if (click === true) {
        return <AddAdvertisment location={location} fetchAds={fetchAds}/>
    }
    return <button onClick={func} style={{ width:"300px", height: "300px" }} >פרסם כאן</button>
}

export default AddButtonAdvertisment
