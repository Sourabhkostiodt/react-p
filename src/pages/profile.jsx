import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Sidebar from '../component/sidebar'
import myImage from '/src/Logo (1).png'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { useNavigate } from 'react-router-dom'


function Profile() {
  const [data, setData] = useState({}) // Change initial state to an empty object
  // const navigate = useNavigate();  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [errorMessage, setErrorMessage] = useState(); 
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1').then((res) => {
      setData(res.data)
    })
  }, [])

  const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      '',
  }

  const navigation = [
    // { name: 'Dashboard', href: '/form', current: true },
    { name: 'Orders', href: '#', current: false },
    { name: 'Employee', href: '#', current: false },
    { name: 'IWO', href: '#', current: false },
    { name: 'Garnishment', href: '#', current: false },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '/profile' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginCredentials = {
      email,
      password,
    };
  };
  // Ensure that data and its nested properties exist before rendering
  return (
    <div>
         <header className="bg-white bg-gray-800 shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-6">
            
            
          <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                  <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                      <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                          <img
                className="mx-auto h-10 logo-inner w-auto"
                src={myImage}
                alt="Your Company"
              />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={myImage} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
          </div>
         
        </header>
        <div className="container main ml-auto mt-6">
        <div className='sidebar'><Sidebar/></div>
        <div className="contant content ml-auto mt-6">
                      <h1 className='edit-profile'>Profile</h1>
                    <form onSubmit={handleSubmit} className=" grid grid-cols-2 gap-4 border-gray-50 rounded-md space-y-6 p-6 shadow-lg shadow-blue-500/50" action="#" method="POST">
                    
                    <div className=''> 
                        <label htmlFor="name" className="block text-slate-500 text-sm font-medium leading-6">
                          UserName 
                        </label>
                        <div className="mt-2">
                          <input
                            id="username"
                            name="username"
                            value={data.username}
                            type="username"
                            autoComplete="username"
                            // onChange={(e) => setEmail(e.target.value)}
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className=''>
                        <label htmlFor="name" className="block text-slate-500 text-sm font-medium leading-6">
                          Name 
                        </label>
                        <div className="mt-2">
                          <input
                            id="name"
                            name="name"
                            value={data.name}
                            type="name"
                            autoComplete="name"
                            // onChange={(e) => setEmail(e.target.value)}
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className=''>
                        <label htmlFor="email" className="text-slate-500 block  text-sm font-medium leading-6 ">
                          Email 
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            value={data.email}
                            type="email"
                            autoComplete="email"
                            // onChange={(e) => setEmail(e.target.value)}
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="text-slate-500 block  text-sm font-medium leading-6 ">
                          Company 
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            value={data.company ? data.company.name : 'Loading...'}
                            type="email"
                            autoComplete="email"
                            // onChange={(e) => setEmail(e.target.value)}
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="text-slate-500 block  text-sm font-medium leading-6 ">
                            Phone 
                          </label>
                        </div>
                        <div className="mt-2">
                          <input 
                            id="phone"
                            name="phone"
                            type="phone"
                            value={data.phone}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />

                        </div>
                        
                      
          </div>
          <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="text-slate-500 block  text-sm font-medium leading-6 ">
                            City 
                          </label>
                        </div>
                        <div className="mt-2">
                          <input 
                            id="phone"
                            name="phone"
                            type="phone"
                            value={data.address ? data.address.city : 'Loading...'}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />

                        </div>
                        
                      
          </div>
          <div >
          {/* <Link to="/dashabord"> */}
            <button
              type="submit"
               onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 custom-btn"
            >
              UPDATE
            </button>
            </div>
            <div >
            <button
              type="reset"
               onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              CANCEL
            </button>
            
            {errorMessage && <p className="error">{errorMessage}</p>}
            
            

            {/* </Link> */}
          </div>
          
        </form>
       </div>
        </div>
        
      <p>
        Name: {data.username || 'Loading...'}
      </p>
      <p>
        Email: {data.email || 'Loading...'}
      </p>
      <p>
        Phone: {data.phone || 'Loading...'}
      </p>
      <p>
        Website: {data.website || 'Loading...'}
      </p>
      <p>
        Company: {data.company ? data.company.name : 'Loading...'}
      </p>
      
    </div>
  )
}

export default Profile
