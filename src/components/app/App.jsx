import ReadPatient from '../patient/read/ReadPatient'

export default function App (props) {
  const client = props.client
  return (
    <div>
      <h1>My First SMART on FHIR app</h1>
      <ReadPatient client={client} />
    </div>
  )
}
