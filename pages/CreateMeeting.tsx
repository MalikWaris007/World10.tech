import React from 'react'
import Layout from './Components/L/Layout'
import CreateMeetingMainSec from './Components/C/CreateMeetingMainSec'
import AppointmentForm from './Components/A/AppointmentForm'

const CreateMeeting = () => {
  return (
    <Layout>
      <CreateMeetingMainSec />
      <AppointmentForm />
    </Layout>
  )
}

export default CreateMeeting
