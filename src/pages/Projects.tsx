import { NavBar } from '../components/NavBar'
import { Card } from '../interfaces/project'
import { Project } from '../components/Project'

const myProjects: Card[] = [
  // TODO: Get all projects from backend
]

export const Projects = () => {
  return (
    <>
      <NavBar />

      {myProjects.length >= 1 ? (
        myProjects.map(({ year, type, title }) => {
          return <Project key={title} year={year} type={type} title={title} />
        })
      ) : (
        <p>Projects incomming</p>
      )}
    </>
  )
}
