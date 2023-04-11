import Button from '../components/Button'
import axiosInstance from '../axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
export default function Register() {
  useEffect(() => {
    localStorage.clear()
}, [])
    const [pcError, setPcError] = useState(false)
    var email = ''
    var username = ''
    var password = ''
    var password2 = ''
    return (
        <form action='javascript:void(0)' onSubmit={() => {
          if(password!==password2) return alert("passwords doesn't match")
          axiosInstance
            .post(
              "singup/", {
                username: username,
                password: password,
                email: "a@a.com"
            }
            )
            .then(
              axiosInstance
                .post(
                  "token/", {username: username, password: password}
                ).then(function(request) {
                  localStorage.setItem('access_token', request.data.access)
                  localStorage.setItem('refresh_token', request.data.refresh)
                  axiosInstance.defaults.headers['Autorization'] =
                  "JWT " + localStorage.getItem("access_token")
                })
            )
          }} className="rounded-[4px] fixed left-[50vw] top-[50vh] -translate-x-1/2 -translate-y-1/2 border-[#CCCCCC] w-[312px] pt-5 border-2 flex pb-[11px] flex-col items-center px-[11px]">
        <h3 className="text-[21px] text-center">Registrati</h3>
        {/* <label className="text-[20px] w-full ml-[17px] mt-[14px]" htmlFor="email">Email</label>
        <input onChange={(e) => email=e.target.value} required className="rounded-[4px] w-full border-[#CCCCCC] border-2 py-2 px-[11px] text-[13px]" type="email" name="email" id="email" /> */}
        <label className="text-[20px] w-full ml-[17px] mt-[17px]" htmlFor="username">Username</label>
        <input onChange={(e) => username=e.target.value} required className="rounded-[4px] w-full border-[#CCCCCC] border-2 py-2 px-[11px] text-[13px]" type="text" name="username" id="username" />
        <label className="text-[20px] w-full ml-[17px] mt-[17px]" htmlFor="password">Password</label>
        <input onChange={(e) => password=e.target.value} required className="rounded-[4px] w-full border-[#CCCCCC] border-2 py-2 px-[11px] text-[13px]" type="password" name="password" id="password" />
        <label className="text-[20px] w-full ml-[17px] mt-[17px]" htmlFor="password2">Conferma Password</label>
        <input onChange={(e) => password2=e.target.value} required className="rounded-[4px] w-full border-[#CCCCCC] border-2 py-2 px-[11px] text-[13px]" type="password" name="password2" id="password2" />
        <div className='w-full mt-[11px] flex flex-col items-center'>
            <Button type="submit" text='Registrati' color='#367FFF' />
            <span className='mt-[11px]'>Hai già un account? <Link to='/login' className='text-[#367FFF]'>Accedi</Link></span>
        </div>
    </form>
    )
}