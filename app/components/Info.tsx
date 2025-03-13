
import Link from "next/link"
import {client} from '../lib/sanity'


async function getInfo(){
    const query = `*[_type == "AboutMe"  ]{
 email,
 instagram,
 number,
 about
}`
     //now this part fetches it
    
  
     return client.fetch(query)
  }
  
  export const revalidate = 60;


interface Data{
    
    email:string,
    instagram:string,
    number:string,
    about:string
}


export default async function Info(){

    const data:Data[] = await getInfo()



    return(
        <>

        {data?.map((data,index:number)=> (
        
        
        <div
        key={index} 
        className="w-full h-screen  p-3 text-sm  snap-start  "
        >

        <h1 className="w-full text-2xl/tight mb-10">
           <Link className=" hover:text-gray-600 " href={"mailto:Archielennon11@gmail.com"}> {data.email} </Link> <br/>
           <Link className=" hover:text-gray-600 " href={"https://www.instagram.com/archie_lennon/"}> {data.instagram} </Link> <br/>
           {data.number}
        </h1>

        <div className="w-full  grid grid-rows-2 gap-3 md:grid-cols-2 "> 
            <h1 className="text-2xl  ">About
                <p className="text-sm pt-5">
                {data.about}
                </p>
            </h1>
            <h1 className="text-2xl pt-5 md:pt-0">Services

                <p className="text-sm pt-5"> 
Branding, <br/>
Digital Design, <br/>
Motion Design, <br/>
Web Design, <br/>
Web Development, <br/>
Creative Coding.<br/>
                </p>
            </h1 >
         
        </div>
        </div>

))}

        </>
    );
}