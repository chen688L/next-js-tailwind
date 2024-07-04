"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
import { useState } from 'react';

const NavLink = ({ setOpen, tabs }) => {
  const pathName = usePathname();

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-zinc-800">
      {/* 关闭图标 */}
      <div onClick={setOpen}>
        <svg className="w-10 h-10 absolute left-10 top-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path fill="#fff" fillOpacity="1" fillRule="evenodd" stroke="none" d="M3.025 7.5h2.484c.06-1.737.427-3.263.971-4.265C4.615 3.83 3.225 5.49 3.026 7.5zM9.52 3.235c1.865.595 3.256 2.255 3.455 4.265h-2.484c-.06-1.737-.427-3.263-.971-4.265zM13.98 7.5C13.724 4.42 11.145 2 8 2 4.855 2 2.275 4.42 2.02 7.5H2v1h.02C2.276 11.58 4.856 14 8 14c3.145 0 5.725-2.42 5.98-5.5H14v-1h-.02zm-1.005 1h-2.484c-.06 1.736-.427 3.263-.972 4.265 1.866-.595 3.257-2.255 3.456-4.265zM8 13c.005 0 .024 0 .063-.02.043-.02.11-.065.198-.153.18-.183.388-.498.584-.969.348-.835.596-2.01.646-3.358H6.509c.05 1.349.298 2.523.646 3.358.196.47.404.786.584.969.087.088.155.133.198.153.04.02.058.02.063.02zm-1.52-.235c-.544-1.002-.912-2.529-.971-4.265H3.025c.2 2.01 1.59 3.67 3.456 4.265zM8 3c-.005 0-.024 0-.063.02-.043.02-.11.065-.198.153-.18.183-.388.498-.584.969-.348.835-.596 2.01-.646 3.358h2.982c-.05-1.349-.298-2.523-.646-3.358-.196-.47-.404-.786-.584-.969-.087-.088-.155-.132-.198-.154C8.023 3 8.005 3 8 3z"></path>
        </svg>
        <svg className="w-10 h-10 absolute right-6 top-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" >
          <path fill="#fff" fillOpacity="1" fillRule="evenodd" stroke="none" d="m8 8.707 6.646 6.647.708-.707L8.707 8l6.647-6.646-.707-.708L8 7.293 1.354.646l-.708.708L7.293 8 .646 14.646l.708.708L8 8.707z"></path>
        </svg>
      </div>
      {/* 菜单项 */}
      <div className="flex flex-col items-start ml-10 mt-20 text-left text-xl" >
        {tabs.map((item, index) => {
          return <Link
            key={index}
            href={item.route}
            className={`mt-3 ${pathName === item.path && styles.active
              }`}
          >
            {item.name}
          </Link>
        })}
      </div>

    </div>
  );
};

export default NavLink;
