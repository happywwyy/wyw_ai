import {
  useEffect
} from 'react'
import {
  useParams
} from 'reapt-router-dom'
const UserProfile = () => {
  useEffect(() => {
    console.log(window.location)
  }, [])
  return (
    <>
      UserProfile { id }
    </>
  )
}