import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as IoIcons5 from 'react-icons/io5'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <RiIcons.RiDashboardLine />
    },
    {
        title: 'Employee',
        icon: <BsIcons.BsPeopleFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Add employee',
                path: '/employee/add_employee',
                icon: <BsIcons.BsPeopleFill />,
            },
            {
                title: 'Manage Employee',
                path: '/employee/manage_emp',
                icon: <BsIcons.BsPeopleFill />,
            },
        ]
    },
    {
        title: 'Food Management',
        icon: <IoIcons5.IoFastFood />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Today Menu',
                path: '/employee/add_employee',
                icon: <IoIcons5.IoFastFood />,
            },
            {
                title: 'Add Category',
                path: '/employee/manage_emp',
                icon: <IoIcons5.IoFastFood />,
            },
            {
                title: 'Category List',
                path: '/employee/add_employee',
                icon: <IoIcons5.IoFastFood />,
            },
        ]
    },
    {
        title: 'Reports',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'User Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Add Payments',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <AiIcons.AiOutlineMessage />
    },
    {
        title: 'Orders',
        path: '/messages',
        icon: <FaIcons.FaClipboardList />
    },
    {
        title: 'Customers',
        path: '/messages',
        icon: <BsIcons.BsPeopleCircle />
    }
]
