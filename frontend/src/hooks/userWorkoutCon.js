import { WorkoutContext } from "../context/workoutContext"
import {useContext} from 'react'

export const useWorkoutCon = () => {
  const context = useContext(WorkoutContext)
  if (!context) {
    throw Error('use workout ctx must be used inside workoutcxt provider')
  }

  return context

}
