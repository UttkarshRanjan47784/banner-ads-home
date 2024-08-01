import { Pencil } from "lucide-react";
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
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { aiBanners } from "./store/store";
import { bannerInfoType } from "./types/types";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const EditButton = ({ bannerNum }: { bannerNum: number }) => {
  const allBanners: bannerInfoType[] = useRecoilValue(aiBanners);
  const setAllBanners = useSetRecoilState(aiBanners);

  const [newBannerTitle, setNewBannerTitle] = useState(
    allBanners[bannerNum].bannerTitle
  );
  const [newBannerDesc, setNewBannerDesc] = useState(
    allBanners[bannerNum].bannerDescription
  );

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
            <DialogTitle className="mb-10">Edit Banner</DialogTitle>
            <DialogDescription>
              <Input
                name="editBannerTitle"
                value={newBannerTitle}
                onChange={(event) => {
                  setNewBannerTitle(event.target.value);
                }}
                className="mb-5"
              />
              <Textarea
                name="editBannerDesc"
                value={newBannerDesc}
                onChange={(event) => {
                  setNewBannerDesc(event.target.value);
                }}
                className="mb-5"
              />
              <div className="flex items-center justify-end space-x-3">
                <DialogClose asChild>
                  <Button onClick={handleEdit}>Save</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button>Cancel</Button>
                </DialogClose>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditButton;
