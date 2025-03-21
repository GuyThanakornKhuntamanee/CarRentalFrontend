"use client"

import { useWindowListener } from "@/hooks/useWindowListener";
import { useRef, useEffect, useState } from "react";

export function VlogPlayer({vdoSrc, isPlaying} : {vdoSrc:string, isPlaying:boolean}) {

    const vdoRef = useRef<HTMLVideoElement>(null);
    
    useEffect(() => {
        //alert('Width is ' + vdoRef.current?.videoWidth)
        if(isPlaying) {
            //alert("Play Video");
            vdoRef.current?.play();
        } else {
            //alert("Pause Video");
            vdoRef.current?.pause();
        }
    }, [isPlaying])

    useWindowListener("resize", (e) => {alert("Window Width is " + (e.target as Window).innerWidth)});

    return (
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef} controls loop muted />
    );
}