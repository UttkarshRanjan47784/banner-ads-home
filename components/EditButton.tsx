import { Pencil, Upload } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { aiBanners, altImages } from "./store/store";
import { bannerInfoType } from "./types/types";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const EditButton = ({ bannerNum }: { bannerNum: number }) => {
  const allBanners: bannerInfoType[] = useRecoilValue(aiBanners);
  const altImg = useRecoilValue(altImages);
  const setAllBanners = useSetRecoilState(aiBanners);

  const [newBannerTitle, setNewBannerTitle] = useState(
    allBanners[bannerNum].bannerTitle
  );
  const [newBannerDesc, setNewBannerDesc] = useState(
    allBanners[bannerNum].bannerDescription
  );

  const handleImgChange = (event: any) => {
    setAllBanners((currVal) => {
      let temp = [...currVal];
      temp[bannerNum] = {
        ...temp[bannerNum],
        bannerImageURL: event.target.id.split(` `)[0],
        bannerImageAlt: event.target.id.split(` `)[1],
      };
      return [...temp];
    });
  };

  const handleEdit = () => {
    setAllBanners((currVal) => {
      let temp = [...currVal];
      temp[bannerNum] = {
        ...temp[bannerNum],
        bannerTitle: newBannerTitle,
        bannerDescription: newBannerDesc,
      };
      return [...temp];
    });
  };

  return (
    <div className="absolute bottom-5 right-5 cursor-pointer">
      <Dialog>
        <DialogTrigger>
          <Pencil />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Banner</DialogTitle>
            <DialogDescription>
              Edit the poster image, title or the description
            </DialogDescription>
          </DialogHeader>
          <p>Images</p>
          <div className="flex items-center space-x-5 flex-wrap">
            <Avatar className="size-10 cursor-pointer">
              <AvatarImage src={``} />
              <AvatarFallback>
                <Upload />
              </AvatarFallback>
            </Avatar>
            {altImg.map((item, index) => {
              const flag =
                item.bannerImageURL == allBanners[bannerNum].bannerImageURL;
              return (
                <Avatar
                  className={
                    flag
                      ? "size-10 cursor-pointer border-2 border-orange-400"
                      : "size-10 cursor-pointer"
                  }
                  key={`${Math.random()}${index}`}
                >
                  <AvatarImage
                    src={item.bannerImageURL || ``}
                    id={`${item.bannerImageURL} ${item.bannerImageAlt}` || ``}
                    onClick={handleImgChange}
                  />
                  <AvatarFallback>Img</AvatarFallback>
                  <input
                    type="file"
                    name="customPosterImg"
                    className="hidden"
                  />
                </Avatar>
              );
            })}
          </div>

          <Input
            name="editBannerTitle"
            value={newBannerTitle}
            onChange={(event) => {
              setNewBannerTitle(event.target.value);
            }}
          />
          <Textarea
            name="editBannerDesc"
            value={newBannerDesc}
            onChange={(event) => {
              setNewBannerDesc(event.target.value);
            }}
            className="mb-3"
          />
          <div className="flex items-center justify-end space-x-3">
            <DialogClose asChild>
              <Button onClick={handleEdit}>Save</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Cancel</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditButton;
