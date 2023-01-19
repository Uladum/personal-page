import { NavBar } from '../components/NavBar'
import { useForm } from 'react-hook-form'
import { Contact as IContact } from '../interfaces/project'
import axios from 'axios'
import { getEnvVariables } from '../helpers/getEnvVariables'

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({ mode: 'onTouched' })

  const { VITE_API_URL } = getEnvVariables()

  const onSubmit = async (data: any) => {
    axios.post(`${VITE_API_URL}/contact`, data)
  }

  return (
    <>
      <NavBar />

      <div>
        <div>
          <div>
            <h3>Contact</h3>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
              <div>
                <input
                  {...register('name', {
                    required: true,
                    minLength: 2,
                    maxLength: 20
                  })}
                  type='text'
                  placeholder='Name'
                  autoComplete='off'
                />
                {errors.name?.type === 'required' && <p>Name is required</p>}
                {errors.name?.type === 'minLength' && <p>Name too short</p>}
                {errors.name?.type === 'maxLength' && <p>Name too long</p>}
              </div>
              <div>
                <input
                  {...register('email', {
                    required: true,
                    pattern: emailPattern
                  })}
                  type='text'
                  placeholder='Email'
                  autoComplete='off'
                />
                {errors.email?.type === 'required' && <p>E-mail is required</p>}
                {errors.email?.type === 'pattern' && <p>Not valid e-mail</p>}
              </div>
              <div>
                <input
                  {...register('subject', {
                    required: true,
                    minLength: 2,
                    maxLength: 30
                  })}
                  type='text'
                  placeholder='Subject'
                  autoComplete='off'
                />
                {errors.subject?.type === 'required' && (
                  <p>Subject is required</p>
                )}
                {errors.subject?.type === 'minLength' && (
                  <p>Subject too short</p>
                )}
                {errors.subject?.type === 'maxLength' && (
                  <p>Subject too long</p>
                )}
              </div>
              <div>
                <textarea
                  {...register('message', {
                    required: true,
                    minLength: 1,
                    maxLength: 200
                  })}
                  placeholder='Message'
                  autoComplete='off'
                />
                {errors.message?.type === 'required' && <p>Message required</p>}
                {errors.message?.type === 'minLength' && (
                  <p>Message too short</p>
                )}
                {errors.message?.type === 'maxLength' && (
                  <p>Message too long</p>
                )}
              </div>
              <div>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
