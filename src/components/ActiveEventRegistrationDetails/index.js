import {Component} from 'react'

import './index.css'

const statusData = {
  registrationInt: '',
  registrationClose: 'REGISTRATIONS_CLOSED',
  registrationOpen: 'YET_TO_REGISTER',
  registrationDone: 'REGISTERED',
}

class ActiveEventRegistrationDetails extends Component {
  registerRequest = () => {
    const {idPassed, changeStatus} = this.props
    changeStatus(idPassed)
  }

  render() {
    const {statePassed} = this.props

    switch (statePassed) {
      case statusData.registrationInt:
        return (
          <p className="initialData">
            Click on an event , to view its registraton details
          </p>
        )

      case statusData.registrationClose:
        return (
          <div className="col center non-stretch">
            <img
              className="result-img"
              src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
              alt="registrations closed"
            />
            <h1>Registrations Are Closed Now!</h1>
            <p>Stay tuned.We will reopen this Registrations soon!</p>
          </div>
        )

      case statusData.registrationOpen:
        return (
          <div className="col center non-stretch">
            <img
              className="result-img"
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="yet to register"
            />
            <p className="initialData">
              A live performance brings so much to your relationship with
              dance.Seeing dance live can often make you fall totally in love
              with this beautiful art form.
            </p>
            <div className="col ceneter non-stretch">
              <button
                type="button"
                className="regi-but"
                onClick={this.registerRequest}
              >
                Register Here
              </button>
            </div>
          </div>
        )

      case statusData.registrationDone:
        return (
          <div className="col center non-stretch">
            <div>
              <img
                className="result-img"
                src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
                alt="registered"
              />
            </div>
            <p className="initialData">You have already registered for this</p>
          </div>
        )

      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
