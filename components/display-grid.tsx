"use client";

import { useRecoilValue } from "recoil";
import { aiBanners } from "./store/store";
import { bannerInfoType } from "./types/types";
import Image from "next/image";
import EditButton from "./EditButton";
import Link from "next/link";

const DisplayGrid = () => {
  const aiGenBanners: bannerInfoType[] = useRecoilValue(aiBanners);

  const renderBanners = aiGenBanners?.map((item, index) => {
    return (
      <>
        <div
          key={`${Math.random()}${index}`}
          className="h-80 w-80 relative shadow-xl"
        >
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
            <h3>{item.bannerDescription}</h3>
            <Link href="/cta">CTA</Link>
            <EditButton bannerNum={index} />
          </div>
        </div>
      </>
    );
  });

  return <div className="grid grid-cols-2 gap-5">{renderBanners}</div>;
};

export default DisplayGrid;
