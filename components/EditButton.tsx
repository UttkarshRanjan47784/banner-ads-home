import { Pencil } from "lucide-react";
import React from "react";

const EditButton = ({ bannerNum }: { bannerNum: number }) => {
  return (
    <div className="absolute bottom-5 right-5">
      <Pencil />
    </div>
  );
};

export default EditButton;
