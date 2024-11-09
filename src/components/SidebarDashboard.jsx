import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import logo from "../assets/barterstyle-logo.svg";

function SidebarDashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log('User logged out');
    
    navigate('/');
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/Dashboard", name: "Dashboard", icon: <MdDashboard /> },
    {
      id: 2,
      path: "/Riwayat",
      name: "Riwayat Transaksi",
      icon: <MdDashboard />,
    },
    { id: 3, path: "/Medali", name: "My Medali", icon: <MdDashboard /> },
    { id: 4, path: "/Event", name: "Event", icon: <MdDashboard /> },
    { id: 5, path: "/Akun", name: "Pengaturan Akun", icon: <MdDashboard /> },
    { id: 6, path: "/Logout", name: "Logout", icon: <MdDashboard /> },
  ];
  return (
    <div className=" w-16 md:w-56 pt-16 fixed bg-white">
      <div className="flex-col">

        <img src="user.png" alt="User" className="w-30 hidden md:flex px-3"/>
        <img src="user.png" alt="User"  className="w-10 flex md:hidden"/>

        <h3 className="font-bold text-xl ml-3">Fatmawati</h3>
      </div>
      <ul className=" mt-8 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
         <li
         key={index}
         className={'font-medium text-2xl rounded-md py-2 hover:bg-teal hover:text-white '}
       >
         {link.path === '#logout' ? (
           <button onClick={handleLogout} className="flex items-center md:space-x-5">
             <span className="md:hidden">{link.icon} </span>
             <span className="text-xl hidden md:flex">{link.name}</span>
           </button>
         ) : (
           <Link to={link.path} className="flex items-center md:space-x-5">
             <span className="md:hidden">{link.icon} </span>
             <span className="text-xl hidden md:flex">{link.name}</span>
           </Link>
         )}
       </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarDashboard;
