import {Component} from 'react'
import eventsList from '../../eventsList' // Data Array
import EventItem from '../EventItem'
import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'

import './index.css'

class Events extends Component {
  state = {activeId: '', status: '', listItem: eventsList}

  selectItem = (id, registrationStatus) => {
    this.setState({status: registrationStatus, activeId: id})
  }

  changeStatus = id => {
    console.log(id)
    const {listItem} = this.state
    const newListItem = listItem.map(each => {
      if (each.id === id) {
        return {...each, registrationStatus: 'REGISTERED'}
      }

      return each
    })

    this.setState(pre => ({
      ...pre,
      listItem: newListItem,
      status: 'REGISTERED',
    }))
  }

  render() {
    const {status, listItem, activeId} = this.state

    return (
      <div className="main-event-page row apart">
        <div className="dark">
          <h1 className="dark-head">Events</h1>
          <ul className="row wrap">
            {listItem.map(each => (
              <EventItem
                key={each.id}
                details={each}
                triggerFuction={this.selectItem}
              />
            ))}
          </ul>
        </div>
        <div className="right">
          <ActiveEventRegistrationDetails
            idPassed={activeId}
            statePassed={status}
            changeStatus={this.changeStatus}
          />
        </div>
      </div>
    )
  }
}

export default Events
