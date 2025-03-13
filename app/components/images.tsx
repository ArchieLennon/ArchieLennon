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
           src="https://cdn.sanity.io/images/zqezr1kn/production/de2b80063f0aff888ea8b75202790c24a5083bf5-3000x1874.jpg" 
           alt="1" width={W1} height={500} />
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
            
            playbackId={"NHuEpq01ny6urlr018HEblO6MnJ011LfLF6v3f6RtshLyk"}
            autoPlay
          
          
            ></MuxPlayer>
          
               
        </div>

        <div className="flex items-start">
        <Link
          href="/ProjectPages">
           <Image 
           className="text-xs pb-1.5"
           src="https://cdn.sanity.io/images/zqezr1kn/production/1b12e93408685ef2915ada34ff71a0ece963cf3c-3508x2480.jpg" 
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
        </div>
        </>
    )

}