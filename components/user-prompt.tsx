"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { genWithAi, getPhotosPexels } from "./actions/actions";
import { useSetRecoilState } from "recoil";
import { aiBanners, altImages } from "./store/store";
import { bannerInfoType } from "./types/types";
import { toast } from "sonner";

const UserPrompt = () => {
  const handleClick = async () => {
    setLoading(true);
    try {
      let reponse = await genWithAi(userText);
      if (reponse == `Ai Err`)
        throw Error(
          `Gemini Model is overloaded at the moment. Please try again after 30 seconds`
        );
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
      } else
        throw Error(`Error fetching pictures from Pexels. Please try again.`);
    } catch (error: any) {
      toast(error.message);
    }
    setLoading(false);
  };

  const setAiBanners = useSetRecoilState(aiBanners);
  const setAltImages = useSetRecoilState(altImages);

  const [userText, setUserText] = useState(``);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-center my-10 mx-5 md:mx-24 md:space-x-5 space-y-5 md:space-y-0">
      <Input
        name="userPrompt"
        placeholder="Enter prompt"
        value={userText}
        onChange={(event) => {
          setUserText(event.target.value);
        }}
      />
      <Button onClick={handleClick} disabled={userText.length == 0 && !loading}>
        {!loading ? `Generate with AI` : `Loading...`}
      </Button>
    </div>
  );
};

export default UserPrompt;
