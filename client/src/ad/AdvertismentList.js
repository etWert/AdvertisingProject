import Axios from "axios"
import { useEffect, useState } from "react"
import AdvertismentItem from "./AdvertismentItem"
import AddButtonAdvertisment from "./AddButtonAdvertisment"


const AdvertismentList = () => {

  const [ads, setAds] = useState([])

  const fetchAds = async () => {
    const { data } = await Axios.get("http://localhost:1212/ad/get")
    setAds(data)
  }

  useEffect(() => {
    fetchAds()
  }, [])

  const findAd = (loc) => {
    const ad = ads.find(ad => ad.location === loc)
    if (ad && ad.status === true) {
      return <AdvertismentItem ad={ad} />
    }
    else {
      return <AddButtonAdvertisment location={loc} fetchAds={fetchAds} />
    }
  }

  if (ads === null) return <h1>loading...</h1>
  return <div className="ads-list">
    <div className="loc1">
      {findAd(1)}
    </div>
    <div className="loc2">
      {findAd(2)}
    </div>
    <div className="loc3">
      {findAd(3)}
    </div>
    <div className="loc4">
      {findAd(4)}
    </div>
  </div>
}

export default AdvertismentList
