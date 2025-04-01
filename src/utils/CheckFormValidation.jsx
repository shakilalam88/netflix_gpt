// const CheckFormValidation = (isSignInForm, name, email, password) => {
//   const nameValidation = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
//   const emailValidation =
//     /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
//   const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
//     password
//   )

//   if (!isSignInForm && !nameValidation) return 'Invalid Name'
//   if (!emailValidation) return 'Invalid Email'
//   if (!passwordValidation) return 'Invalid Password'

//   return 'Validation Passed'
// }

// export { CheckFormValidation }

export const CheckFormValidation = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  )
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

  if (!isEmailValid) return 'Email ID is not valid'
  if (!isPasswordValid) return 'Password is not valid'

  return null
}
