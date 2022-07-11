import React, { useState, useEffect } from 'react'
import { PatientVisualizer } from 'fhir-visualizers'

export default function ReadPatient (props) {
  console.debug('ReadPatient', props)
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
      <h2>Read Patient</h2>
      With <pre>PatientVisualizer</pre>
      {
        patient
          ? <PatientVisualizer patient={patient} />
          : <h3>Loading...</h3>
      }
    </div>
  )
}
