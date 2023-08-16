import {Component} from 'react'
import eventsList from '../../eventsList' // Data Array
import EventItem from '../EventItem'
import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'

import './index.css'

class Events extends Component {
  state = {status: ''}

  selectItem = (id, registrationStatus) => {
    console.log(id)
    this.setState({status: registrationStatus})
  }

  render() {
    const {status} = this.state

    return (
      <div className="main-event-page row apart">
        <div className="dark">
          <h1 className="dark-head">Event</h1>
          <ul className="row wrap">
            {eventsList.map(each => (
              <EventItem
                key={each.id}
                details={each}
                triggerFuction={this.selectItem}
              />
            ))}
          </ul>
        </div>
        <div className="right">
          <ActiveEventRegistrationDetails statusPassed={status} />
        </div>
      </div>
    )
  }
}

export default Events
