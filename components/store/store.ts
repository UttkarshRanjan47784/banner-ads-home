import { atom } from "recoil";

const userQuery = atom({
  key: "userQuery",
  default: ``,
});

const aiBanners = atom({
  key: "aiBanners",
  default: [],
});

export { userQuery, aiBanners };
