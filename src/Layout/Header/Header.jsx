import { NavLink, Link} from "react-router-dom"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState, useEffect } from "react";
import {BiSolidSun, BiSolidMoon} from 'react-icons/bi';
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [profile, setProfile ] = useState(false);

  const Handler = () => {
    setToggle(!toggle)
  }
  const profileHandler = () => {
    setProfile(!profile)
  }
  const hover = 'hover:text-bgButton transitions dark:text-fontColor';
  const Hover = ({isActive}) => (isActive ? 'text-bgButton' : hover);

  const subhover = 'hover:text-bgButton transitions dark:text-fontColor';
  const MainHover = ({isActive}) => (isActive ? 'text-bgButton' : subhover); 
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if(localStorage.getItem('theme') === null){
      localStorage.setItem('theme', 'light');
    }
  },[]);

  useEffect(()=> {
    const html = document.querySelector('html');
    if(localStorage.getItem('theme') === 'dark'){
      html.classList.add('dark');
      setTheme('dark');
    }else{
      html.classList.remove('dark');
      setTheme('light');
    }
  },[theme])

  const handleThemeSwitch = () => {
    if(localStorage.getItem('theme') === 'light'){
      setTheme('dark');
      localStorage.setItem('theme','dark');
    }else{
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }

    }
  
  return(
    <div className="bg-bgHeader p-2 w-full shadow-lg fixed mb-10 z-40 dark:bg-bgFooter dark:text-fontColor">
      <div className='flex justify-between items-center container mx-auto relative'>
        <div className="flex justify-center items-center text-black font-bold text-xl">
          <Link to='/' className="flex justify-center items-center gap-1">
            <img src="/logo.jpg" alt="logo" width={40} height={20} className="object-cover rounded-full"/>
            <h1>Generation X Gym </h1>
          </Link>
          
        </div>
        <div className="md:flex justify-center items-center gap-6 font-semibold hidden">
          <NavLink to='/' className={Hover}>Home</NavLink>
          <NavLink to='/instructor' className={Hover}>Intructor</NavLink>
          <NavLink to='/Upper' className={Hover}>Classes</NavLink>
          <NavLink to='/about' className={Hover}>About</NavLink>
          <NavLink to='/Register' className="bg-bgButton p-2 text-fontColor rounded-md">Register Now</NavLink>
        </div>
        <div className="sm:hidden">
          <HiOutlineMenuAlt3  onClick={Handler} className="w-10 h-9 bg-bgButton text-lg font-normal p-1 rounded-md cursor-pointer" />
          { toggle &&
            <div className="absolute bg-fontColor  dark:bg-bgFooter dark:text-fontColor top-0 left-0 w-full h-64 rounded-lg transition-all ease-in-out shadow-xl z-50">
              <div className="flex flex-col relative">
                <div className="flex justify-end items-center">
                  <div className="flex justify-between items-center gap-3 mt-2 mr-2 ">
                    <div onClick={handleThemeSwitch} className='bg-[#fef08a] p-1 w-8 h-8 rounded-md flex justify-center items-center cursor-pointer'>
                      {
                        theme === 'light' ? <BiSolidMoon/> : <BiSolidSun/>
                      }               
                    </div>
                    <div onClick={profileHandler} className='bg-[#a7f3d0] p-1 text-sm w-8 h-8 rounded-md flex justify-center items-center cursor-pointer'>
                      <h1 className="cursor-pointer">LS</h1>
                    </div>
                    <div onClick={Handler} className='bg-[#a7f3d0]   p-1 w-8 h-8 rounded-md flex justify-center items-center cursor-pointer'>
                      <FaTimes/>
                    </div>
                    
                  </div>

              
                </div>
                <div className="flex flex-col relative w-full pl-3 ">
                  <NavLink to='/' className={`${Hover}`}>Home</NavLink>
                  <NavLink to='/instructor' className={Hover}>Intructor</NavLink>
                  <NavLink to='/Upper'className={Hover}>Classes</NavLink>
                  <NavLink to='/about'className={Hover}>About</NavLink>
                  <NavLink to='/Register' className=" text-fontColor rounded-md">Register Now</NavLink>                 
                </div>
              { profile &&
                <div className="absolute bg-bgHeader dark:text-bgFooter top-11 left-0 profile shadow-sm rounded-md">
                  <div>Dashboard</div>
                </div>
              } 
              </div>
            
            </div>
          }
        
        </div>
        
      </div>
      
    </div>
  )
}
export default Header