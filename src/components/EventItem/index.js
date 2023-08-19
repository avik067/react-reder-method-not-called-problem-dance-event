import './index.css'

const EventItem = ({details, triggerFuction}) => {
  const {id, imageUrl, name, location, registrationStatus} = details

  const selectItem = () => {
    triggerFuction(id, registrationStatus)
  }

  return (
    <li>
      <button className="but" type="button" onClick={selectItem}>
        <img className="img" src={imageUrl} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="place">{location}</p>
    </li>
  )
}

export default EventItem
