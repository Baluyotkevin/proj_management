import { Priority } from '@/state/api'
import React from 'react'
import ResuablePriorityPage from '../reusablePriorityPage'


const Low = () => {
  return (
    <ResuablePriorityPage priority={Priority.Low} />
  )
}

export default Low