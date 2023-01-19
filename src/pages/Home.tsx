import { Link } from 'react-router-dom'
import { Logo } from '../components/Logo'

export const Home = () => {
  return (
    <>
      <Logo />
      <ul>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/projects'}>Projects</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>
    </>
  )
}
