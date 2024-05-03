import React from "react";
import { Button, Text, Img } from "./..";

export default function LoggedInUserScrolledFollowGroupsClickedRowfollowed({
  leisuretext = "Leisure",
  followedbutton = "Followed",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center gap-5 md:p-5 flex-1`}>
      <div className="flex w-[39%] items-center justify-center gap-3">
        <Img src="images/img_rectangle_6_36x36.png" alt="profileimage" className="h-[36px] w-[36px] rounded-[50%]" />
        <Text as="p">{leisuretext}</Text>
      </div>
      <Button color="black_900" className="min-w-[73px] rounded-[12px]">
        {followedbutton}
      </Button>
    </div>
  );
}
