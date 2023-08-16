import {Component} from 'react'

import './index.css'

const statusData = {
  registrationInt: '',
  registrationClose: 'REGISTRATIONS_CLOSED',
  registrationOpen: 'YET_TO_REGISTER',
  registrationDone: 'REGISTERED',
}

class ActiveEventRegistrationDetails extends Component {
  state = {status: statusData.registrationInt}

  componentDidMount() {
    const {statusPassed} = this.props
    this.setState(pre => ({...pre, status: statusPassed}))
  }

  renderGui = () => {
    const {status} = this.state
    console.log(status)
    switch (status) {
      case statusData.registrationInt:
        return (
          <p className="initialData">
            Click on an event , to view its registraton details
          </p>
        )

      case statusData.registrationClose:
        return <p className="initialData">closed</p>

      case statusData.registrationOpen:
        return <p className="initialData">Open</p>

      case statusData.registrationDone:
        return <p className="initialData">Done</p>

      default:
        return null
    }
  }

  render() {
    return this.renderGui()
  }
}

export default ActiveEventRegistrationDetails
