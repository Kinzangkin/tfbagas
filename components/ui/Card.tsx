"use client";
import Image from "next/image";

interface Maincardprops {
  title: string;
  media: string;
  type: string;
}


function Card({ title, media, type }: Maincardprops) {

  // Tentukan sumber thumbnail berdasarkan URL
  let thumbnailUrl = "";
  let youtubeUrl = "";

  if (media.includes("youtu")) {
    // Ambil video ID dari YouTube
    const videoId = media.includes("watch?v=")
      ? media.split("watch?v=")[1].split("&")[0]
      : media.split("youtu.be/")[1].split("?")[0];

    thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  } else if (media.includes("drive.google.com")) {
  const fileIdMatch = media.match(/\/d\/(.*?)\//);
  const fileId = fileIdMatch ? fileIdMatch[1] : "";
  thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}`;
  youtubeUrl = `https://drive.google.com/file/d/${fileId}/view`;
}


  return (
    <div className="space-y-5 flex flex-col justify-center">
      {thumbnailUrl && (
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
          <div className="relative aspect-video w-100 cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="rounded-2xl absolute inset-0 object-cover"
            />
            <div className="text-white font-bold absolute text-sm bottom-5 left-5 space-y-2 z-10 shadow-xl">
              <div>
                <div>{type}</div>
                <p>{title}</p>
              </div>
            </div>

            <div className="bg-black/50 hover:bg-black/10 w-full h-64 relative rounded-2xl">
            </div>
          </div>
        </a>
      )}
    </div>
  );
}

export default Card;