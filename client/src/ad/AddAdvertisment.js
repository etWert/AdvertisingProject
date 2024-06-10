import Axios from "axios"
import { useState } from "react"
import AdvertismentItem from "./AdvertismentItem"
import AdvertismentList from "./AdvertismentList"
import App from "../App"

const AddAdvertisment = ({ location, fetchAds }) => {

  const [status, setStatus] = useState(true)
  const [image, setImage] = useState("")
  // const [currentCount, setCurrentCount] = useState(0)
  const [maxCount, setMaxCount] = useState(0)
  const [email, setEmail] = useState("")

  const [submitted, setSubmitted] = useState(false)
  let objAd = { location, image, currentCount: 0, maxCount, email, status }
  const submitForm = async (e) => {
    e.preventDefault()
    objAd = { location, image, currentCount: 0, maxCount, email, status }
    console.log("objAd");
    console.log(objAd);
    const { data } = await Axios.post("http://localhost:1212/ad/add", { location, image, currentCount: 0, maxCount, email, status })
    console.log(data)
    if (e.target.hasAttribute('type') && e.target.getAttribute('type').toLowerCase() == 'submit') {
      //טופס לא נשלח
    }
    else {
      setSubmitted(true)
    }
    fetchAds()
  }

  if (submitted === true) {
    return <AdvertismentItem ad={objAd} />
  }
  else {
    return <form className="form" onSubmit={submitForm}>
      <input required="true" placeholder="הכנס URL תמונה" onChange={(e) => setImage(e.target.value)}></input>
      <input required="true" placeholder="הכנס איימייל" onChange={(e) => setEmail(e.target.value)}></input>
      <input required="true" placeholder="הכנס מספר צפיות מקסימלי" onChange={(e) => setMaxCount(e.target.value)}></input>
      <button type="submit">הוסף</button>
    </form>
  }
}
export default AddAdvertisment
