"use client"

import React, {useState} from 'react';
import Link from 'next/link'
import { Calendar, Home, Package, LayoutPanelTop, ClipboardCheck, Eye, Flag, Settings } from "lucide-react";
import './styles/AppSidebar.css';
import Logo from '@/app/icons/Logo.svg';
import ProfileIcon from '@/app/icons/ProfileIcon.svg';
import audit_trail_24px from "@/app/icons/audit_trail_24px.svg";
import flag_24px from "@/app/icons/flag_24px.svg";
import home_24px from "@/app/icons/home_24px.svg";
import material_handling_24px from "@/app/icons/material_handling_24px.svg";
import setting from "@/app/icons/setting.svg";



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
    url: "/",
    icon: home_24px,
  },
  {
    title: "Lines",
    url: "/line",
    icon: material_handling_24px,
  },
  {
    title: "Audit",
    url: "#",
    icon: audit_trail_24px,
  },
  {
    title: "Status",
    url: "#",
    icon: flag_24px,
  },
  {
    title: "Settings",
    url: "#",
    icon: setting,
  },
];

export function AppSidebar() {


  return (
    <Sidebar  className= {'sidebar ${isExpanded ? "expanded" : "collapsed"}'}>
     <div className='sidebar-container'>
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
                    <Link href={item.url} legacyBehavior>
                    <a  className="menuItemLink">
                      <div  className="iconPlaceholder">
                         {/* <item.icon className="icon" size={15} color='white' strokeWidth={0.5} />  */}
                         {/* <img src={item.icon} className='icon' alt={item.title}/> */}
                         <item.icon className= 'icon' alt= {item.title}/>
                      </div>
                      <span  className="menuItemText">{item.title}</span>
                    </a>
                    </Link>
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