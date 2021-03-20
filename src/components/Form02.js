import React, { useState } from "react"

function Form02() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    console.log({ email, password })
  }

  let url = " "
  return (
    <div className="container-body">
      <div className="container-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <h2>Log in to Example</h2>
            <a href={url} className="link">
              or create an account
            </a>
          </div>

          <div className="form-group">
            <label htmlFor="email-register">E-mail</label>
            <input
              onChange={e => setEmail(e.target.value)}
              id="email-register"
              name="email"
              className="form-control"
              type="text"
              placeholder="e.g.johndoe@gmail.com"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password-register">Password</label>
            <input
              onChange={e => setPassword(e.target.value)}
              id="password-register"
              name="password"
              className="form-control"
              type="password"
              placeholder="•••••••••••••"
            />
          </div>

          <div className="checkbox">
            <input type="checkbox" id="checkbox"  />
            <label htmlFor="checkbox">
            Agree with &nbsp;
            <a href={url} className="link">
              Terms & Conditions
            </a></label>
            
          </div>

          <button className="btn-login" type="submit">
            Login
          </button>

          <div className="password">
            <a href={url} className="link">
              Forgotten password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form02
