"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import './line.css'

export default function Lines(){
    const router = useRouter();
    return(
        <>
        {/* <div className='sidebar-right'>Beside sidebar</div> */}
        <div className='form-container'>
            <div className='header'>
                <div>New line</div>
                <div>Kips portal logo </div>
                <h3>Fill in the details of the new line</h3>
            </div >
            <div className='form-group'>
            <div className='line-info-container'>
                <h2>Line Information</h2>
                <form action="">
                <label htmlFor="country">Country</label>
                <select name="" id="country"></select>
                <option value="">Danmark</option>
                </form>
            </div>
            <div className='form-group'>
            <div className='local-info-container'>
                <h3>Local Host Information</h3>

            </div>
            </div>
            <div className='ad-groups-container'>5555555555555</div>
            <button className='continue-button'>444444444</button>
            </div>
        </div> 
        <button onClick={() => router.push("/line")}></button>
        
        </>
    )
}