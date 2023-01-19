import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Projects } from '../pages/Projects'
import { Contact } from '../pages/Contact'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router'
export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}
