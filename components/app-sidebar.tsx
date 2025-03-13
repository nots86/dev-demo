"use client"

import React, {useState} from 'react';
import { Calendar, Home, Package, LayoutPanelTop, ClipboardCheck, Eye, Flag, Settings } from "lucide-react";
import LinesIcon from "@/app/icons/LinesIcon.svg";
import SettingIcon from '@/app/icons/SettingIcon.svg'; 
import Logo from '@/app/icons/Logo.svg';
import ProfileIcon from '@/app/icons/ProfileIcon.svg';
import AuditIcon from '@/app/icons/Auditcon.svg';
import StatusIcon from '@/app/icons/StatusIcon.svg';
import HomeIcon from '@/app/icons/HomeIcon.svg';
import './styles/AppSidebar.css';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Span } from 'next/dist/trace';

const logo = [
  {
    title: "",
    url: "#",
    icon: Logo
  }
];

const profileImg = [
  {
    title: "",
    url: "#",
    icon: ProfileIcon
  }
];

// Menu items array
const items = [   
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Lines",
    url: "/line",
    icon: LayoutPanelTop,
  },
  {
    title: "Audit",
    url: "#",
    icon: ClipboardCheck,
  },
  {
    title: "Status",
    url: "#",
    icon: Flag,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {

    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Sidebar  className= {'sidebar ${isExpanded ? "expanded" : "collapsed"}'}>
     <div className='sidebar-container'>
        {/* Sidebar Toggle Button */}
        <button className='sidebar-toggle-button' onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <span>&larr;</span> : <span>&rarr</span>}
        </button>
         {/* Render logo at the top */}
      <div  className="logoWrapper">
        {logo.map((item) => (
          <a href={item.url} key={item.title} className="menuItemLink">
            <item.icon className="logo" />
          </a>
        ))}
      </div>

      {/* Render Profile Image */}
      <div  className="profile-img-wrapper">
        {profileImg.map((item) => (
          <a href={item.url} key={item.title} className="menuItemLink">
            <item.icon className="profile-img" />
            <span  className="menuItemText">{item.title}</span>
          </a>
        ))}
      </div>

      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className='sidebar-menu'>
              {items.map((item) => (
                <SidebarMenuItem  key={item.title}>
                  <SidebarMenuButton  asChild className='sidebar-toggle-button'>
                    <a href={item.url} className="menuItemLink">
                      <div  className="iconPlaceholder">
                         <item.icon className="icon" size={15} color='white' strokeWidth={0.5} /> 
                      </div>
                      <span  className="menuItemText">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
     </div>
    </Sidebar>
  );
}