import { Priority } from '@/state/api'
import React from 'react'
import ResuablePriorityPage from '../reusablePriorityPage'


const High = () => {
  return (
    <ResuablePriorityPage priority={Priority.High} />
  )
}

export default High