import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import React from 'react';

export const SidebarData=[ 
    {
        title:"Home",
        path:"/",
        icon:<AiIcons.AiFillHome/>,
        classname:"nav-text",

    },
    {
        title:"Reports",
        path:"/reports",
        icon:<IoIcons.IoIosPaper/>,
        classname:"nav-text",
        
    },
    {
        title:"Product",
        path:"/product",
        icon:<FaIcons.FaCartPlus/>,
        classname:"nav-text",
        
    }
]


