import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export const NavBar = () => {
  return (
    <nav>
      <button>
        <Logo />
      </button>
      <div>
        <Link to={'/'}>Home</Link>

        <Link to={'/about'}>About</Link>

        <Link to={'/projects'}>Projects</Link>

        <Link to={'/contact'}>Contact</Link>
      </div>
    </nav>
  )
}
