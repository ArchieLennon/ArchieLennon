"use client";

import Image from "next/image";
import { useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import Link from "next/link";

interface DataType {
    heroimage: string;
    video?: {
      asset?: {
        playbackId?: string;
      };
    };
    titleinfo: string;
    slug: string;
    projectimages:ProjectImage[] | null
}

interface ProjectImage{

    imageUrl: string | null;
    text: string[];
    projVideo?: string | null;
    
}

export default function Carousel({ data }: { data: DataType }) {
    const images = data.projectimages?.map((projectimage) => projectimage.imageUrl) || [];
    const videos = data.projectimages?.map((projectimage) => projectimage.projVideo) || [];
    const texts = data.projectimages?.map((projectimage) => projectimage.text) || [];

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);

    };


    const videoPlaybackId = videos[current]

    if (images.length === 0 || texts.length === 0) {
        return <h1 className="text-red-500">No images or texts available</h1>;
    }






    return (
        <>
        <div onClick={next} className="flex flex-col h-screen">
        <Link 
        href="/" 
        className="text-black text-sm p-3 md:p-6 text-pretty hover:text-gray-600">
        Back.
      </Link>

            <div  className="flex justify-center items-center p-3 md:p-6">
                
            {videoPlaybackId ? (
                    <MuxPlayer
                    className=" w-full md:w-8/12" 
                    autoPlay
                    muted
                    loop
                    playbackId = {videoPlaybackId}
                    ></MuxPlayer>
                ): images[current]? (
                <Image src={images[current]} alt="Project Image" width={600} height={500} />
            ):(<div>No video available</div> ) }
            </div>

            <h1 className="text-black text-sm p-3 md:p-6 flex  items-end text-pretty mt-auto">
                {texts[current] && texts[current].length > 0 ? texts[current].join(" ") : "No text available"}
            </h1>
            
            </div>
        </>
    );
}
