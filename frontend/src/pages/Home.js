import { useEffect } from 'react'
import {useWorkoutCon} from "../hooks/userWorkoutCon"

//components
import WorkoutDetails from '../components/workoutDetails'
import WorkoutForm from '../components/workoutForm'

const Home=() => {
  const {workouts, dispatch} = useWorkoutCon()

  useEffect(() => {
    const fetchWorkouts = async() => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    fetchWorkouts()
  }, [])

  return (
    <div className="home">
	  <div className="workouts">
	  {workouts && workouts.map((workout) => (
		  <WorkoutDetails key={workout._id} workout={workout} />
	  ))}
	  </div>
	  <WorkoutForm />
    </div>
  )
}

export default Home
