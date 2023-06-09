import Button from '../components/Button'
import axiosInstance from '../axios'
import { Link, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
export default function Login() {
  useEffect(() => {
    localStorage.clear()
}, [])
    var username = ''
    var password = ''
    return (
        <form action='javascript:void(0)' onSubmit={() => {
            axiosInstance
            .post(
              "token/", {username: username, password: password}
            ).then(function(request) {
              localStorage.setItem('access_token', request.data.access)
              localStorage.setItem('refresh_token', request.data.refresh)
              axiosInstance.defaults.headers['Autorization'] =
              "JWT " + localStorage.getItem("access_token")
            })
            // window.location.href = "https://forlens.vercel.app/chats/"
            console.log('logged in')
        }} className="rounded-[4px] fixed left-[50vw] top-[50vh] -translate-x-1/2 -translate-y-1/2 border-[#CCCCCC] w-[312px] pt-5 border-2 flex pb-[11px] flex-col items-center px-[11px]">
            <h3 className="text-[21px] text-center">Effettua il login</h3>
            <label className="text-[20px] w-full ml-[17px] mt-[14px]" htmlFor="username">Username</label>
            <input onChange={(e) => username=e.target.value} required className="rounded-[4px] w-full border-[#CCCCCC] border-2 py-2 px-[11px] text-[13px]" type="text" name="username" id="username" />
            <label className="text-[20px] w-full ml-[17px] mt-[17px]" htmlFor="password">Password</label>
            <input onChange={(e) => password=e.target.value} required className="rounded-[4px] w-full border-[#CCCCCC] border-2 py-2 px-[11px] text-[13px]" type="password" name="password" id="password" />
            <div className='w-full mt-[11px] flex flex-col items-center'>
                <Button type="submit" text='Login' color='#367FFF' />
                <span className='mt-[11px]'>Non hai un account? <Link to='/register' className='text-[#367FFF]'>Registrati</Link></span>
            </div>
        </form>
    )
}