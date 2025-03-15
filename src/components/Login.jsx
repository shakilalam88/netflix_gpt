import { useRef, useState } from 'react'
import Header from './Header'
import CheckFormValidation from '../utils/CheckFormValidation'
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const Name = useRef(null)
  const Email = useRef(null)
  const Password = useRef(null)

  const handleButtonClick = (e) => {
    e.preventDefault()

    // form validation
    const message = CheckFormValidation(
      isSignInForm,
      Name?.current?.value,
      Email.current.value,
      Password.current.value
    )
    setErrorMessage(message)

    // sign in or sign up
    if (message === 'Validation Passed') {
      console.log('Validation Passed')
    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div className="relative">
      <Header />
      <>
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
            alt="hero_image"
          />
        </div>
        <div className="absolute w-3/12 top-40 left-0 right-0 m-auto bg-[#000000c7] text-white p-5">
          <h1 className="mb-4">{isSignInForm ? 'Sign IN' : 'Sign UP'}</h1>
          <form action="">
            {!isSignInForm && (
              <input
                ref={Name}
                className="bg-[#333232] rounded-xs text-xs p-2 w-full mb-2"
                type="text"
                placeholder="Full name"
              />
            )}
            <input
              ref={Email}
              className="bg-[#333232] rounded-xs text-xs p-2 w-full"
              type="text"
              placeholder="Email or phone number"
            />
            <input
              ref={Password}
              className="bg-[#333232] rounded-xs text-xs p-2 w-full mt-2"
              type="password"
              placeholder="Password"
            />
            <p className="text-sm text-red-600 mt-2 font-bold">
              {errorMessage}
            </p>
            <button
              className="bg-[#e7000b] rounded-xs text-xs p-2 w-full mt-4 cursor-pointer"
              onClick={handleButtonClick}
            >
              {isSignInForm ? 'Sign IN' : 'Sign UP'}
            </button>
            <div className="flex items-center mt-2 gap-2">
              <input
                type="checkbox"
                className="outline-0 border-0"
              />
              <span className="text-xs">Remember me</span>
            </div>
            <p
              className="mt-16 text-xs cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? ' New to Netflix? Sign up now'
                : ' Already Register. Sign in now'}
            </p>
            <p className="text-[9px] mt-2 mb-10">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="">Learn more.</a>
            </p>
          </form>
        </div>
      </>
    </div>
  )
}

export default Login
