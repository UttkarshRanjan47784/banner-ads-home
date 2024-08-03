import { bannerInfoType } from "./types/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import EditButton from "./edit-button";

const Banner = ({ item, index }: { item: bannerInfoType; index: number }) => {
  return (
    <div key={index} className="h-64 w-64 sm:h-80 sm:w-80 relative shadow-xl">
      <Image
        alt={item.bannerImageAlt || ""}
        src={item.bannerImageURL || ""}
        fill
        sizes="(min-width: 808px) 50vw, 100vw"
        style={{
          objectFit: "cover",
        }}
        className="-z-50"
      />
      <div className="bg-gradient-to-br from-black h-full w-full px-5 py-3 text-white relative">
        <h1 className="text-2xl">{item.bannerTitle}</h1>
        <h3 className="text-sm mt-3">{item.bannerDescription}</h3>
        <Link href="/cta">
          <Button className="bg-black dark:bg-white mt-5 text-xs">
            Know More {`>`}
          </Button>
        </Link>
        <EditButton bannerNum={index} />
      </div>
    </div>
  );
};

export default Banner;
