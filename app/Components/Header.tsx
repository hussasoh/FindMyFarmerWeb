import React from 'react'

const Header = () => {
    return (
            <header>
             <div className="navbar h-fit bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <img className="w-30 rounded-full" src="/images/FindMyFarmerLogo.png" alt="logo" />
                </div>
                <nav className="navbar-center">
                    <ul className="menu menu-xl menu-horizontal rounded-box wd-56">
                        <li><a>Menu 1</a></li>
                        <li><a>Menu 2</a></li>
                        <li><a>Menu 3</a></li>
                    </ul>
                </nav>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                            </div>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </header>
    )
}
export default Header
