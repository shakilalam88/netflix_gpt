const CheckFormValidation = (isSignInForm, name, email, password) => {
  const nameValidation = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
  const emailValidation =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
  const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  )

  if (!isSignInForm && !nameValidation) return 'Invalid Name'
  if (!emailValidation) return 'Invalid Email'
  if (!passwordValidation) return 'Invalid Password'

  return 'Validation Passed'
}

export default CheckFormValidation
