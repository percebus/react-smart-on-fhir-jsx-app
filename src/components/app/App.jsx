import React, { useState, useEffect } from 'react'
import { PatientVisualizer } from 'fhir-visualizers'

export default function App (props) {
  console.debug('App', props)
  const client = props.client

  const [patient, setPatient] = useState(null)
  useEffect(() => {
    client
      .patient.read()
      .then((patient) => {
        console.debug('patient', patient)
        setPatient(patient)
        // this.forceUpdate() // FIXME XXX
      })
  })

  return (
    <div>
      {
        patient
          ? <PatientVisualizer patient={patient} />
          : <h1>Loading</h1>
      }
    </div>
  )
}
