import Link from "next/link";
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

// ✅ Corrected typing for params
export default async function ProjectPages({ params }: { params: { slug: string } }) {
  if (!params?.slug) {
    console.error("Slug is missing from params");
    return <h1 className="text-red-500">Page Not Found</h1>;
  }

  const data = await getPageData(params.slug);

  if (!data) {
    console.error(`No data found for slug: ${params.slug}`);
    return <h1 className="text-red-500">Page Not Found</h1>;
  }

  return (
    <div className="w-screen h-screen bg-white selection:text-white selection:bg-black">
      <Link 
        href="/" 
        className="text-black text-sm p-3 md:p-6 absolute top-0 text-pretty hover:text-gray-600">
        Back.
      </Link>
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
