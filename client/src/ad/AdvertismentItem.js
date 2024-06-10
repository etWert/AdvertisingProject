import AddButtonAdvertisment from "./AddButtonAdvertisment"

const AdvertismentItem = ({ ad }) => {

  return <div className="item">
    <img src={`${ad.image}.jpg`} style={{ width:"300px", height: "300px" }} />
  </div>
}

export default AdvertismentItem
