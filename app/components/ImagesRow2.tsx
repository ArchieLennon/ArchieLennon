"use client";
import Image from "next/image";
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";


  interface propsType{
    data:data[]
  }
  
  interface data{
  
    heroimage: string;
    video: {
      asset: {
        playbackId: string;
        assetId: string;
        filename: string;
        _id: string;
      }
    }
    titleinfo: string;
    type:string;
    services:string;
    slug: string;
    projectimages: { imageUrl: string; text: string[] }[];
  }
  

export default function Images({data}:propsType) {

  const A = 0; // Randomly determine layout

  return (
    <div
      className={`${ A > 0.5
          ? "w-full h-screen flex flex-col items-start flex-nowrap gap-3 p-3  text-xs snap-always snap-start"
          : "w-full h-screen flex flex-row items-start flex-nowrap gap-3 p-3 text-xs snap-always snap-start"
      }`}
    >


      {data?.map((item, index) => {
        const randomWidth = Math.floor(Math.random() * (800 - 300 + 1)) + 300; // Generate a unique width for each image
        
        const hasVideo = item.video && item.video.asset && item.video.asset.playbackId;

        console.log(`Item ${index}:`, item); // Check full item structure
        console.log(`PlaybackId for ${item.titleinfo}:`, item.video?.asset?.playbackId);
        console.log("poop",item.type)

        
        return (
          <div key={index} className="flex  w-full items-start">
            <Link
            className="w-full  " 
            href={`/${item.slug}`}>
            {item.video?.asset ? (
            <MuxPlayer
            className="w-full h-full aspect-video" 
            autoPlay
            muted
            loop
            playbackId = {hasVideo ? item.video.asset.playbackId : ""}
            ></MuxPlayer>
            ):(
      
              <Image
                className="text-xs w-full pb-1.5 "
                src={item.heroimage}
                alt={`Image ${index + 1}`}
                width={randomWidth}
                height={500}
              />
            )}
              {A < 0.5 && (
                <div className="text-xs  grid grid-cols-2 w-36">
                  <h1 className="font-semibold">
                  
                  Client:
                  <br />
                  Type:
                  <br />
                  Services:
                  <br />
                  </h1>
                  <h1 className="w-32">
                  {item.titleinfo}
                  <br />
                  {item.type}
                  <br />
                  {item.services}

                  <br />
                  </h1>
                </div>
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
