import {Routes, Route} from 'react-router-dom'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Createmovie } from '../pages/CreateMovie'
import { MoviePreview } from '../pages/MoviePreview'

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Createmovie" element={<Createmovie />} />
      <Route path="/MoviePreview" element={<MoviePreview />} />
    </Routes>
  )
}