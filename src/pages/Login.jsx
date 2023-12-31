import { Link, useNavigate } from 'react-router-dom'
import { Button, Input } from '@material-tailwind/react'
import { useState } from 'react'
import { loginFetch } from '../utils/fetches/loginFetch.js'
import brandIcon from '../assets/icons/Logo.svg'
import eye from '../assets/icons/visibility_on.svg'
import eyeWhite from '../assets/icons/visibility_onWhite.svg'
import eyeOff from '../assets/icons/visibility_off.svg'
import eyeOffWhite from '../assets/icons/visibility_offWhite.svg'

function Login({ darkMode }) {
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(false)
  const navigate = useNavigate()

  const login = event => {
    event.preventDefault()
    loginFetch(event, navigate)
  }

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(false)
      setType('text')
    } else {
      setIcon(true)
      setType('password')
    }
  }

  return (
    <section className="flex flex-col items-center">
      <article className=" mt-6">
        <h2 className="text-start w-72 mx-auto text-4xl">Login to your </h2>
        <h2 className="text-start w-72 mx-auto text-4xl">Account</h2>
      </article>
      <div className=" my-28">
        <img src={brandIcon} alt="logo icon" className="w-[140px]" />
      </div>
      <form onSubmit={login} className="flex flex-col bg-zinc-600 justify-center">
        <div className="w-72 mt-8 mx-auto">
          <Input label="Email" type="email" name="email" id="email" />
        </div>

        <div className="w-72 mt-8 mx-auto relative">
          <Input label="Password" type={type} name="password" id="password" />
          <img
            role="presentation"
            className="cursor-pointer absolute top-2 right-2"
            onClick={handleToggle}
            src={darkMode ? (icon ? eyeWhite : eyeOffWhite) : icon ? eye : eyeOff}
            alt="pw_visibility"
          />
        </div>
        <Button className="w-72 mt-8 mx-auto bg-[#E98090] rounded-3xl" type="submit">
          Sign in
        </Button>
      </form>
      <p className="text-[#FF4D67] mt-8"> Forgot the password?</p>
      <p className="text-center mt-8">
        Need an account?{' '}
        <Link to="/register" className="text-[#FF4D67]">
          {' '}
          Sign up
        </Link>
      </p>
    </section>
  )
}

export default Login
