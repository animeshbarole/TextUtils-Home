import React from 'react'
import Alert from 'react-bootstrap/Alert';
//import PropTypes from 'prop-types'

function AlertCom(props) {



  return (
    <>
      <Alert >
          <strong >{props.Alert}</strong>
        </Alert>
      
    </>
  )
}

export default AlertCom