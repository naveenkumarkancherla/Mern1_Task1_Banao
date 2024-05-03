import React from "react";
import { Button, Text, Img } from "./..";

export default function LoggedInUserScrolledLocationEditEnabledRowfollow({
  leisuretext = "Leisure",
  followbutton = "Follow",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center gap-5 md:p-5 flex-1`}>
      <div className="flex w-[39%] items-center justify-center gap-3">
        <Img src="images/img_rectangle_6_36x36.png" alt="leisureimage" className="h-[36px] w-[36px] rounded-[50%]" />
        <Text as="p">{leisuretext}</Text>
      </div>
      <Button color="blue_gray_50" className="min-w-[60px] rounded-[12px]">
        {followbutton}
      </Button>
    </div>
  );
}
