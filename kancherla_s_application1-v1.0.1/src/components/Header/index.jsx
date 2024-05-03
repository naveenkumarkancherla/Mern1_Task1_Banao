import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Input } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex items-center pt-4 pb-3.5 pl-[72px] pr-14 md:px-5 z-[3] relative bg-white-A700 shadow-xs`}
    >
      <div className="mx-auto flex w-full max-w-[1168px] items-start justify-between gap-5 md:flex-col">
        <Img src="images/img_header_logo.png" alt="logo image" className="h-[24px] w-[162px] object-contain" />
        <Input
          color="gray_100_02"
          size="xs"
          shape="round"
          name="Search Field"
          placeholder={`Search for your favorite groups in ATG`}
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e)}
          prefix={<Img src="images/img_search.svg" alt="search" className="h-[22px] w-[22px] cursor-pointer" />}
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={22} width={22} fillColor="#7a7a7aff" />
            ) : null
          }
          className="w-[31%] gap-3.5 text-gray-700_01 md:w-full sm:pr-5"
        />
        <div className="flex w-[15%] flex-wrap items-center justify-center md:w-full">
          <a href="#">
            <Img src="images/img_rectangle_6.png" alt="profile image" className="h-[36px] w-[36px] rounded-[50%]" />
          </a>
          <Text as="p" className="mb-[7px] ml-3 self-end">
            Naveen Kumar
          </Text>
          <a href="#">
            <Img
              src="images/img_baselinearrowdropdown24px.svg"
              alt="dropdown icon"
              className="ml-[7px] h-[22px] w-[22px]"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
