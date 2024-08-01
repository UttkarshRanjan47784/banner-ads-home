"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { genWithAi, getPhotosPexels } from "./actions/actions";
import { useSetRecoilState } from "recoil";
import { aiBanners, altImages } from "./store/store";
import { bannerInfoType, imgInfoType } from "./types/types";

const UserPrompt = () => {
  const handleClick = async () => {
    let reponse = await genWithAi(userText);
    let result = await JSON.parse(reponse);

    let responseImg = await getPhotosPexels(userText);
    if ("photos" in responseImg) {
      let photoSRC = responseImg.photos.map((item) => {
        return {
          bannerImageURL: item.src.medium,
          bannerImageAlt: item.alt,
        };
      });

      setAltImages(photoSRC);

      let finalResult = result.map((item: bannerInfoType, index: number) => {
        return {
          ...item,
          ...photoSRC[index],
        };
      });
      setAiBanners(finalResult);
    } else alert(`Error!`);
  };

  const setAiBanners = useSetRecoilState(aiBanners);
  const setAltImages = useSetRecoilState(altImages);

  const [userText, setUserText] = useState(``);

  return (
    <div className="flex justify-center items-center my-10 mx-24 space-x-5">
      <Input
        name="userPrompt"
        placeholder="Enter prompt"
        value={userText}
        onChange={(event) => {
          setUserText(event.target.value);
        }}
      />
      <Button onClick={handleClick} disabled={userText.length == 0}>
        Generate with AI
      </Button>
    </div>
  );
};

export default UserPrompt;
