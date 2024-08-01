import { atom } from "recoil";
import { bannerInfoType, imgInfoType } from "../types/types";

const userQuery = atom({
  key: "userQuery",
  default: ``,
});

const aiBanners = atom<bannerInfoType[] | []>({
  key: "aiBanners",
  default: [],
});

const allImages = atom<imgInfoType[] | []>({
  key: "allImages",
  default: [],
});

export { userQuery, aiBanners, allImages };
