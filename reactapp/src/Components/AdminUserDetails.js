import React from 'react'
import {Stack } from 'react-bootstrap'
import { useState } from 'react'
const AdminUserDetails = () => {
  const [Users, setUsers] = useState()
  const [Developers, setDevelopers] = useState()
  const [NewIssue, setNewissue] = useState()
  const [SolvedIssue, setSolvedIssue] = useState()
  const [ActiveIssue, setActiveIssue] = useState()

  return (
    <div
      className=' container bg-light border adminGrid'
      
    >
      <Stack gap={3}>
        <h3 style={{textAlign:"center"}}>ADMIN</h3>
        <div>
          Users {Users}
        </div>
        <div>
          Developers {Developers}
        </div>
        <div>
          NewIssue {NewIssue}
        </div>
        <div>
          SolvedIssue {SolvedIssue}
        </div>
        <div>
          ActiveIssue {ActiveIssue}
        </div>
      </Stack>
    </div>
  )
}

export default AdminUserDetails
