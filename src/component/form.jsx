
// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import logo from '/src/Logo (1).png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
// import useState  from 'react';



function form() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginCredentials = {
      email,
      password,
    };

    console.log('this is from before response');
    console.log(loginCredentials);
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post('https://dummyjson.com/auth/login', loginCredentials); // Replace with your API endpoint
      // localStorage.setItem('token', response.token); // Store token in localStorage (adjust based on your API response)
      navigate('/dashboard'); // Redirect to protected route on successful login
      console.log(response);
      toast.success("You have successfully logged in!"); // Display toast notification (uncomment if needed)
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Login failed');
      // console.log(response)
    }
  };

  return (
    <>
    {/* <button onClick={notify}>Notify!</button> */}
    
    <div className="flex h-screen dark:bg-slate-800 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center dark:text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="border-gray-50 rounded-md space-y-6 p-6 shadow-lg shadow-blue-500/50" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                value={email}
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

            </div>
           
          </div>
          <div className="text-sm">
                <a href="/forgot" className="font-semibold py-1.5 text-orange-500 hover:text-indigo-500">
                  Forgot password?
                </a>
                <p className="italic text-xs text-gray-400">By signing in, you agree to our  <a href="#" className="font-semibold py-1.5 text-orange-500 hover:text-indigo-500">Privacy Policy. </a></p>
              </div>
          <div>
          {/* <Link to="/dashabord"> */}
            <button
              type="submit"
               onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Sign in
            </button>
            {errorMessage && <p className="error">{errorMessage}</p>}
            
<ToastContainer 
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
            {/* </Link> */}
          </div>
        </form>

        <p className="mt-10 text-center text-sm p-6 text-gray-500 dark:text-white">
          Not a member?{' '} Going to {' '}
          <a href="/signup" className="font-semibold leading-6 text-orange-500 hover:text-indigo-500">
              Signup
          </a>
        </p>
      </div>
    </div>
    </>
  )

}

export default form