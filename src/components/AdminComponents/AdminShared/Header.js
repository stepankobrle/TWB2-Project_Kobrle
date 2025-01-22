import React, { Fragment } from 'react'
import {  Popover, Transition } from '@headlessui/react'
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import ProfileDropdown from "../../UserComponents/ProfileDropdown";
import LogoutButton from "../../auth/LogoutButton";

export default function Header() {
    const navigate = useNavigate()

    return (
        <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
            {/* Vyhledávač */}
            <div className="relative ">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[13rem] md:w-[24rem] h-10 pl-11 pr-4 rounded-sm"
                />
            </div>

            <div className="flex items-center gap-2 mr-2">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineChatAlt fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-gray-700 font-medium">Messages</strong>
                                        <div className="mt-2 py-1 text-sm">This is messages panel.</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineBell fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-gray-700 font-medium">Notifications</strong>
                                        <div className="mt-2 py-1 text-sm">This is notification panel.</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>

                <Popover className="relative">
                    <Popover.Button
                        className=" lg:flex ml-2 bg-gray-800  text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                        <span className="sr-only">Open user menu</span>
                        <div
                            className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                            style={{backgroundImage: 'url("https://source.unsplash.com/80x80?face")'}}
                        >
                            <span className="sr-only">Marc Backes</span>
                        </div>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Popover.Panel
                            className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div
                                onClick={() => navigate('/account')}
                                className="rounded-sm px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200">
                                Account
                            </div>
                            <div
                                onClick={() => navigate('/settings')}
                                className="rounded-sm px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200">
                                Settings
                            </div>
                            <div
                                className="rounded-sm px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200">
                                <LogoutButton/>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>

            </div>
        </div>
    )
}