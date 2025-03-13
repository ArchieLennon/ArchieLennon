import Projects from './Projects';
import Info from './Info'
import {client} from '../lib/sanity'


async function getProjects(){
    const query = `*[_type == "Projects"  ]{
  "heroimage": heroimage.asset->url,
  video {
    asset-> {
      playbackId,
      assetId,
      filename,
      _id,
    }
  },
  titleinfo,
  type,
  services,
  'slug': slug.current,
  projectimages[]{
    "imageUrl": images.asset->url,  
    "text": text[]
  }
}`
     //now this part fetches it
    
  
     return client.fetch(query)
  }
  
  export const revalidate = 60;


export default async function Container(){

    const data = await getProjects()

   

    return(
        <>
        <div className="w-full snap-y snap-mandatory overflow-y-scroll h-screen ">
        <Projects data={data}/>
        <Info />
        </div>

        </>
    )
};