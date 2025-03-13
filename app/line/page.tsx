"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Line(){
    const router = useRouter();
    return(
        <>
        <h1>Lines</h1>
        <button onClick={() => router.push("/line")}></button>
        </>
    )
}