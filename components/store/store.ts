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

const altImages = atom<imgInfoType[] | []>({
  key: "altImages",
  default: [],
});

export { userQuery, aiBanners, altImages };
