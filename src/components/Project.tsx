import { Card } from '../interfaces/project'

export const Project = ({ year, type, title }: Card) => {
  return (
    <>
      <p>
        {year}/{type} -{' '}
      </p>
      <h2>{title}</h2>
    </>
  )
}
