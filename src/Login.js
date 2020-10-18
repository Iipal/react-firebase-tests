import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className='login'>
      <div className='loginContainer'>
        <label htmlFor='loginUsername'>UserName</label>
        <input
          id='loginUsername'
          type='text'
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className='errorMsg'>{emailError}</p>
        <label htmlFor='inputPassword'>Passowrd</label>
        <input
          id='inputPassword'
          type='password'
          required
          onChange={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className='errorMsg'>{passwordError}</p>
        <div className='btnContainer'>
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign in</button>
              <p>
                Don't have an account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign up</button>
              <p>
                Have an account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
