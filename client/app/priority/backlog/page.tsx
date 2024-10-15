import { Priority } from '@/state/api'
import React from 'react'
import ResuablePriorityPage from '../reusablePriorityPage'


const Backlog = () => {
  return (
    <ResuablePriorityPage priority={Priority.Backlog} />
  )
}

export default Backlog