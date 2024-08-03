"use client";

import { useRecoilValue } from "recoil";
import { aiBanners } from "./store/store";
import { bannerInfoType } from "./types/types";
import Banner from "./banner";

const DisplayGrid = () => {
  const aiGenBanners: bannerInfoType[] = useRecoilValue(aiBanners);

  const renderBanners = aiGenBanners?.map((item, index) => (
    <Banner item={item} index={index} key={index} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 pb-5">
      {renderBanners}
    </div>
  );
};

export default DisplayGrid;
