"use client"
import Image from "next/image";
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";



export default function Images() {

  
    
  const A = 0
  const W1 = Math.floor(Math.random() * (800 - 300 + 1)) + 300;
  const W2 = Math.floor(Math.random() * (800 - 300 + 1)) + 300;
  const W3 = Math.floor(Math.random() * (800 - 300 + 1)) + 300;

    return(
        <>

<div className={`${ A > 0.5 ? ' w-full h-screen flex flex-col items-start flex-nowrap  gap-3 p-3 text-xs snap-always snap-start  ': 'w-full h-screen  flex flex-row items-start flex-nowrap gap-3 p-3 text-xs snap-always snap-start '}`}> 


{/*  map over just one of these and feed it Row A*/}

        <div className="flex items-start">
        <Link
          href="/ProjectPages">
           <Image 
           className="text-xs pb-1.5"
           src="https://cdn.sanity.io/images/zqezr1kn/production/f970e3b1f58eb8990c8f951980dcd2063ece6c7a-3500x2333.jpg" 
           alt="2" width={W1} height={500} />
                   {A < 0.5  &&
                     <h1 className="text-xs  ">
                     Studio Lowrie<br/>
                     Branding<br/>
                        Web Design<br/>
                        Creative Coding<br/>
                        
                 </h1>  
                 }  
          </Link>
          { A > 0.5  &&
                     <h1 className="text-xs  ">
                     Studio Lowrie<br/>
                     Branding<br/>
                        Web Design<br/>
                        Creative Coding<br/>
                        
                 </h1>  
                 }  
        </div>

        

        <div className="flex items-start">
        <Link
          href="/ProjectPages">
           <Image 
           className="text-xs pb-1.5"
           src="https://cdn.sanity.io/images/zqezr1kn/production/ea0011c64b68dbbecca35eddde0df9bc79fd8366-3000x1960.jpg" 
           alt="1" width={W3} height={500} />
                   {A < 0.5  &&
                     <h1 className="text-xs  ">
                     Studio Lowrie<br/>
                     Branding<br/>
                        Web Design<br/>
                        Creative Coding<br/>
                        
                 </h1>  
                 }  
          </Link>
          { A > 0.5  &&
                     <h1 className="text-xs  ">
                     Studio Lowrie<br/>
                     Branding<br/>
                        Web Design<br/>
                        Creative Coding<br/>
                        
                 </h1>  
                 }  
        </div>

        <div className="flex items-start">
        <MuxPlayer
            className=""
            
            playbackId={"TqqfKrgy00Oms6d73GyIdhqUCME9gAYtqSpISerzKTDY"}
            autoPlay
          
          
            ></MuxPlayer>
          
               
        </div>
        </div>
        </>
    )

}