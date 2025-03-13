"use client"

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
// clinet side rendering. button, state, rearange logic, 
// map() to put in hero, project info and slugs.
// map() over a link three times .
//start by getting the links into there own components/ map ready then start on the randomiser.



const DynamicRowB = dynamic(() => import('./ImagesRow2'), {ssr: false})



interface propsType{
  data:data[]
}

interface data{

  heroimage:string,
  video: {
    asset: {
      playbackId: string;
      assetId: string;
      filename: string;
      _id: string;
    }
  },
  titleinfo:string,
  type:string,
  services:string,
  slug:string,
  projectimages:{ imageUrl: string; text: string[] }[];
}



export default function Projects({data}:propsType) {

  const [counter,Setcounter] = useState(0)
  const [shuffledData,setShuffledData] = useState<data[]>([]);
  const [itemsPerRow,setItemsPerRow] = useState<number>(3)

//shuffle data when component mounts

  useEffect(()=> {

    setShuffledData([...data].sort(() => Math.random() - 0.5))

  //detect screen size 

  const handleResize = () => {
    setItemsPerRow(window.innerWidth <= 768 ? 1 : 3)
  };

  handleResize();//set initial state
  window.addEventListener('resize',handleResize);

//cleanup to avoid memory leaks
return () => window.removeEventListener('resize',handleResize);
},[data]);






// shuffle data again when button is clicked
  const handleShuffle = () => {
    setShuffledData([...data].sort(() => Math.random() - 0.5));
    Setcounter(counter + 1);
  };

  // split the data dynamically

  const groupedData: data[][]=[]
  for (let i = 0; i < shuffledData.length; i += itemsPerRow) {
    groupedData.push(shuffledData.slice(i, i + itemsPerRow));
  }



    return (
        
        <div className="snap-always snap-start flex flex-col ">
        
         {groupedData.map((group,index)=> (
          <DynamicRowB key={index} data={group} />
        
        ))}

        
        


       



          
    
    

       


        <div className="w-full text-right  fixed bottom-0 right-0 p-3 ">
        <h2 className="text-base  justify-end">Version_{counter}</h2>
        <button 
        onClick={handleShuffle}
        className="text-4xl md:text-6xl hover:text-gray-600 ">Archie Lennon</button>
        
        </div>
        
        </div>
    )
}