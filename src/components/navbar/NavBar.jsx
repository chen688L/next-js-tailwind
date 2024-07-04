"use client"
import Link from 'next/link'
import Image from "next/image";
import { Fragment, useState, useMemo } from "react";
import profilePic from '../../../public/menu.png';
import NavLink from "./navLink/navLink";
import Submenu from "./submenu/submenu";

const tabs = [
  {
    name: 'Design',
    route: '/',
    component: [
      {
        name: 'Design1',
        route: '/'
      },
      {
        name: 'Design2',
        route: '/'
      },
      {
        name: 'Design3',
        route: '/'
      }
    ]
  },
  {
    name: 'Plugins',
    route: '/Design',
    component: [
      {
        name: 'Plugins1',
        route: '/'
      },
      {
        name: 'Plugins2',
        route: '/'
      },
      {
        name: 'Plugins3',
        route: '/'
      }
    ]
  },
  {
    name: 'Whiteboarding',
    route: '/Plugins',
    component: [
      {
        name: 'Plugins1',
        route: '/'
      },
      {
        name: 'Plugins2',
        route: '/'
      },
      {
        name: 'Plugins3',
        route: '/'
      }
    ]
  },
  {
    name: 'Presentations',
    route: '/Presentations',
    component: [
      {
        name: 'Plugins1',
        route: '/'
      },
      {
        name: 'Plugins2',
        route: '/'
      }
    ]
  }
]
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const openFn = () => {
    setOpen(false)
  }

  const refDiv = useMemo(() => {
    console.log(hoverIndex);
    return (
      <Fragment>
        <div
          onMouseLeave={() => setHoverIndex(-1)}
          className='top-20 w-3/5 h-52 fixed left-28 top-10 '>
          <Submenu className='top-20' item={tabs[hoverIndex]}></Submenu>
        </div>
      </Fragment>
    )

  }, [hoverIndex])


  return (
    <>
      <nav onMouseLeave={() => setHoverIndex(-1)} className="fixed bg-neutral-800 w-full h-20 bg-black shadow-lg font-white border-b border-b-[#444444] padding-0.5">
        <div className="hidden lg:block">
          <div className="flex py-4  items-center justify-between max-w-8xl h-full pl-24 pr-6 ">
            <div
              className="ml-1 flex items-baseline space-x-4">
              {tabs.map((item, idx) => (
                <Link
                  onMouseEnter={() => { setHoverIndex(idx); }}
                  className="text-gray-500 hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" key={idx} href={item.route}>
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center">
              <div className="hidden lg:block">
                {/* 搜索框 */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-2 flex items-center ">
                    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" >
                      <path fill="#fff" fillOpacity=".7" fillRule="evenodd" stroke="none" d="M20 15c0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5 2.761 0 5 2.239 5 5zm-1.126 4.581C17.83 20.466 16.477 21 15 21c-3.314 0-6-2.686-6-6 0-3.314 2.686-6 6-6 3.314 0 6 2.686 6 6 0 1.477-.534 2.83-1.419 3.874l4.273 4.272-.708.708-4.272-4.273z"></path>
                    </svg>
                  </div>
                  <input type="text" className="pl-20 bg-neutral-700 text-gray-200 focus:border-blue-500 focus:outline-none w-full py-2 px-3 border border-transparent rounded-3xl" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>
          {hoverIndex >= 0 ? refDiv : ''}
        </div>
        <div className="block lg:hidden">
          <Image
            className="pt-5 pl-6"
            src={profilePic}
            alt=""
            width={60}
            height={60}
            onClick={() => setOpen((prev) => !prev)}
          />
          {open && (
            <NavLink setOpen={openFn} tabs={tabs} />
          )}
        </div>

      </nav>



    </>
  )
}

export default NavBar;