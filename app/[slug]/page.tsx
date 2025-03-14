
import Carousel from "../components/Carousel";
import { client } from "../lib/sanity";


interface Data {
  heroimage: string;
  video?: {
    asset?: {
      playbackId?: string;
    };
  };
  titleinfo: string;
  slug: string;
  projectimages: { imageUrl: string; text: string[] }[];
}

async function getPageData(slug: string): Promise<Data | null> {
  const query = `*[_type == "Projects" && slug.current == $slug][0]{
    "heroimage": heroimage.asset->url,
    "video": video.asset->{
      playbackId,
      assetId,
      filename,
      _id
    },
    titleinfo,
    'slug': slug.current,
    projectimages[]{
      "imageUrl": images.asset->url,  
      "text": text[],
      "projVideo": projvideo.asset->playbackId
    }
  }`;

  console.log("Fetching data for slug:", slug);
  return await client.fetch(query, { slug });
}


export default async function ProjectPages({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await params before destructuring

  if (!slug) {
    console.error("Slug is missing from params");
    return <h1 className="text-red-500">Page Not Found</h1>;
  }

  const data = await getPageData(slug);

  if (!data) {
    console.error(`No data found for slug: ${slug}`);
    return <h1 className="text-red-500">Page Not Found</h1>;
  }

  return (
    <div className="w-screen h-screen bg-white selection:text-white selection:bg-black">

      <Carousel data={data} />
    </div>
  );
}

export async function generateStaticParams() {
  const query = `*[_type == "Projects"] { "slug": slug.current }`;
  const slugs: { slug: string }[] = await client.fetch(query);
  
  return slugs.map((entry) => ({
    slug: entry.slug,
  }));
}

export const revalidate = 60;
