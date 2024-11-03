import React from 'react'
import ResuablePriorityPage from '../reusablePriorityPage'
import { Priority } from '@/state/api'


const Urgent = () => {
  return (
    <ResuablePriorityPage priority={Priority.Urgent} />
  )
}

export default Urgent