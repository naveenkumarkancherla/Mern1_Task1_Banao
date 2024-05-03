import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, Heading, SelectBox, Input } from "../../components";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function NotLoggedInDesktopPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Join Computer Engineering Groups | ATG</title>
        <meta
          name="description"
          content="Search and join computer engineering groups to connect with 142,765 professionals. Share articles, attend events, and find job opportunities."
        />
      </Helmet>
      <div className="w-full bg-white-A700 pb-[98px] md:pb-5">
        {/* header section */}
        <header className="flex items-center justify-center bg-white-A700 px-4 pb-3.5 pt-4 shadow-xs">
          <div className="flex w-[92%] items-center justify-between gap-5 md:w-full md:flex-col">
            <Img src="images/img_header_logo.png" alt="primary logo" className="h-[24px] w-[162px] object-contain" />
            <Input
              color="gray_100_02"
              size="xs"
              shape="round"
              name="Search Bar"
              placeholder={`Search for your favorite groups in ATG`}
              value={searchBarValue1}
              onChange={(e) => setSearchBarValue1(e)}
              prefix={<Img src="images/img_search.svg" alt="search" className="h-[22px] w-[22px] cursor-pointer" />}
              suffix={
                searchBarValue1?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue1("")} height={22} width={22} fillColor="#7a7a7aff" />
                ) : null
              }
              className="w-[28%] gap-3.5 text-gray-700_01 md:w-full sm:pr-5"
            />
            <div className="flex w-[16%] items-center justify-center md:w-full">
              <Text size="2xl" as="p" className="!font-medium !text-blue_gray-900">
                <span className="text-blue_gray-900">Create account.&nbsp;</span>
                <span className="font-bold text-blue-A700">It’s free!</span>
              </Text>
              <Img
                src="images/img_header_logo_blue_gray_900.svg"
                alt="secondary logo"
                className="h-[24px] w-[24px] object-contain"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center gap-10">
          {/* community stats section */}
          <div className="h-[440px] self-stretch bg-[url(/public/images/img_group_25.png)] bg-cover bg-no-repeat md:h-auto">
            <div className="flex flex-col items-center justify-center bg-gradient pb-[77px] pt-[289px] md:py-5">
              <div className="container-xs flex flex-col items-start md:p-5">
                <Heading size="xl" as="h1" className="!text-white-A700">
                  Computer Engineering
                </Heading>
                <Text size="3xl" as="p" className="!text-white-A700">
                  142,765 Computer Engineers follow this
                </Text>
              </div>
            </div>
          </div>
          <div className="container-xs md:p-5">
            {/* content filter section */}
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex flex-wrap gap-[21px]">
                <Text size="2xl" as="p">
                  All Posts(32)
                </Text>
                <Text size="2xl" as="p" className="self-start !text-blue_gray-400">
                  Article
                </Text>
                <Text size="2xl" as="p" className="!text-blue_gray-400">
                  Event
                </Text>
                <Text size="2xl" as="p" className="self-start !text-blue_gray-400">
                  Education
                </Text>
                <Text size="2xl" as="p" className="self-start !text-blue_gray-400">
                  Job
                </Text>
              </div>
              <div className="flex w-[26%] justify-center gap-4 md:w-full">
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_baselinearrowdropdown24px.svg"
                      alt="baseline-arrow_drop_down-24px"
                      className="h-[22px] w-[22px]"
                    />
                  }
                  name="Write Dropdown"
                  placeholder={`Write a Post`}
                  options={dropDownOptions}
                  className="w-full gap-px font-medium sm:pr-5"
                />
                <Button
                  color="blue_A700"
                  size="lg"
                  shape="round"
                  leftIcon={
                    <Img
                      src="images/img_baselinegroupadd24px.svg"
                      alt="baseline-group_add-24px"
                      className="h-[22px] w-[22px]"
                    />
                  }
                  className="min-w-[125px] gap-1.5 font-medium"
                >
                  Join Group
                </Button>
              </div>
            </div>

            {/* separator section */}
            <div className="mt-3 flex flex-col items-start">
              <div className="h-px w-full self-stretch bg-gray-300" />
              <div className="relative mt-[-1px] h-px w-[9%] bg-black-900" />
            </div>
            <div className="mt-[27px]">
              <div className="flex items-start justify-between gap-5 md:flex-col">
                {/* posts list section */}
                <div className="flex w-[67%] flex-col gap-4 md:w-full">
                  <div className="flex flex-1 flex-col items-center gap-[17px] rounded border border-solid border-gray-300 bg-white-A700 pb-5">
                    <Img
                      src="images/img_rectangle_5.png"
                      alt="article image"
                      className="h-[220px] w-full rounded-tl rounded-tr object-cover md:h-auto"
                    />
                    <div className="flex w-[94%] md:w-full md:p-5">
                      <div className="flex w-full flex-col items-start">
                        <Text size="3xl" as="p">
                          <span className="font-medium text-black-900">✍️&nbsp;</span>
                          <span className="font-medium text-black-900">Article</span>
                        </Text>
                        <div className="mt-[13px] flex items-start gap-6 self-stretch md:flex-col">
                          <Heading size="md" as="h2" className="w-[96%] leading-[134.17%] md:w-full">
                            What if famous brands had regular fonts? Meet RegulaBrands!
                          </Heading>
                          <Img
                            src="images/img_baseline_more_vert_24px.svg"
                            alt="more options image"
                            className="h-[28px] w-[28px] md:w-full"
                          />
                        </div>
                        <Text size="4xl" as="p" className="mt-3.5 !text-gray-700_01">
                          I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                        </Text>
                        <div className="mt-[29px] flex items-center justify-between gap-5 self-stretch">
                          <div className="flex w-[28%] items-center justify-center gap-2.5">
                            <Img
                              src="images/img_rectangle_3.png"
                              alt="author image"
                              className="h-[48px] w-[48px] rounded-[50%]"
                            />
                            <Heading as="h3">Sarthak Kamra</Heading>
                          </div>
                          <div className="flex w-[27%] items-center justify-between gap-5">
                            <div className="flex items-center gap-2">
                              <Img src="images/img_eye.svg" alt="views image" className="h-[18px] w-[18px]" />
                              <Text as="p" className="!font-medium !text-blue_gray-700">
                                1.4k views
                              </Text>
                            </div>
                            <Button color="blue_gray_50_01" size="md" shape="round" className="w-[42px] !rounded-sm">
                              <Img src="images/img_search_blue_gray_900.svg" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-[17px] rounded border border-solid border-gray-300 bg-white-A700 pb-5">
                    <Img
                      src="images/img_rectangle_5_220x692.png"
                      alt="education image"
                      className="h-[220px] w-full rounded-tl rounded-tr object-cover md:h-auto"
                    />
                    <div className="flex w-[94%] md:w-full md:p-5">
                      <div className="flex w-full flex-col items-start">
                        <Text size="3xl" as="p">
                          <span className="font-medium text-black-900">🔬️</span>
                          <span className="font-medium text-black-900">&nbsp;Education</span>
                        </Text>
                        <div className="mt-[13px] flex items-start gap-6 self-stretch md:flex-col">
                          <Heading size="md" as="h4" className="w-[96%] leading-[134.55%] md:w-full">
                            Tax Benefits for Investment under National Pension Scheme launched by Government
                          </Heading>
                          <Img
                            src="images/img_baseline_more_vert_24px_black_900.svg"
                            alt="education more options"
                            className="h-[28px] w-[28px] md:w-full"
                          />
                        </div>
                        <Text size="4xl" as="p" className="mt-3.5 !text-gray-700_01">
                          I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                        </Text>
                        <div className="mt-[29px] flex items-center justify-between gap-5 self-stretch">
                          <div className="flex w-[24%] items-center justify-center gap-2.5">
                            <Img
                              src="images/img_rectangle_3_48x48.png"
                              alt="educator image"
                              className="h-[48px] w-[48px] rounded-[50%]"
                            />
                            <Heading as="h5">Sarah West</Heading>
                          </div>
                          <div className="flex w-[27%] items-center justify-between gap-5">
                            <div className="flex items-center gap-2">
                              <Img src="images/img_eye.svg" alt="education views image" className="h-[18px] w-[18px]" />
                              <Text as="p" className="!font-medium !text-blue_gray-700">
                                1.4k views
                              </Text>
                            </div>
                            <Button color="blue_gray_50_01" size="md" shape="round" className="w-[42px] !rounded-sm">
                              <Img src="images/img_search_blue_gray_900.svg" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-[19px] rounded border border-solid border-gray-300 bg-white-A700 pb-5">
                    <Img
                      src="images/img_rectangle_5_1.png"
                      alt="image"
                      className="h-[220px] w-full rounded-tl rounded-tr object-cover md:h-auto"
                    />
                    <div className="flex w-[94%] md:w-full md:p-5">
                      <div className="flex w-full flex-col items-start">
                        <Text size="3xl" as="p">
                          <span className="font-medium text-black-900">🗓️</span>
                          <span className="font-medium text-black-900">&nbsp;Meetup</span>
                        </Text>
                        <div className="mt-2.5 flex items-center justify-between gap-5 self-stretch sm:flex-col">
                          <Heading size="md" as="h6" className="self-end">
                            Finance & Investment Elite Social Mixer @Lujiazui
                          </Heading>
                          <div className="flex rounded bg-gray-400_01 p-0.5">
                            <Img
                              src="images/img_baseline_more_vert_24px_black_900.svg"
                              alt="baselinemore"
                              className="h-[28px] w-[28px]"
                            />
                          </div>
                        </div>
                        <div className="mt-[9px] flex w-[55%] justify-between gap-5 md:w-full">
                          <div className="flex gap-1">
                            <Img
                              src="images/img_baseline_today_24px.svg"
                              alt="baselinetoday"
                              className="h-[20px] w-[20px]"
                            />
                            <Text size="xl" as="p">
                              Fri, 12 Oct, 2018
                            </Text>
                          </div>
                          <div className="flex gap-1">
                            <Img
                              src="images/img_outline_location_on_24px.svg"
                              alt="outline"
                              className="h-[20px] w-[20px]"
                            />
                            <Text size="xl" as="p">
                              Ahmedabad, India
                            </Text>
                          </div>
                        </div>
                        <Button
                          size="lg"
                          className="mt-[15px] w-full rounded-lg border border-solid border-blue_gray-200_01 font-semibold sm:px-5"
                        >
                          Visit Website
                        </Button>
                        <div className="mt-8 flex items-center justify-between gap-5 self-stretch">
                          <div className="flex w-[25%] items-center justify-center gap-2.5">
                            <Img
                              src="images/img_rectangle_3_1.png"
                              alt="circleimage"
                              className="h-[48px] w-[48px] rounded-[50%]"
                            />
                            <Heading as="h6">Ronal Jones</Heading>
                          </div>
                          <div className="flex w-[27%] items-center justify-between gap-5">
                            <div className="flex items-center gap-2">
                              <Img src="images/img_eye.svg" alt="eye" className="h-[18px] w-[18px]" />
                              <Text as="p" className="!font-medium !text-blue_gray-700">
                                1.4k views
                              </Text>
                            </div>
                            <Button color="blue_gray_50_01" size="md" shape="round" className="w-[42px] !rounded-sm">
                              <Img src="images/img_search_blue_gray_900.svg" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 rounded border border-solid border-gray-300 bg-white-A700 px-[18px] pb-5 pt-[18px]">
                    <div className="flex w-full flex-col items-start">
                      <Text size="3xl" as="p" className="!font-medium">
                        💼️ Job
                      </Text>
                      <div className="mt-[15px] flex items-center justify-between gap-5 self-stretch">
                        <Heading size="md" as="h5" className="self-end">
                          Software Developer
                        </Heading>
                        <Img
                          src="images/img_baseline_more_vert_24px_black_900.svg"
                          alt="baselinemore"
                          className="h-[28px] w-[28px] self-start"
                        />
                      </div>
                      <div className="mt-2.5 flex flex-wrap sm:flex-col">
                        <Img
                          src="images/img_outline_work_outline_24px.svg"
                          alt="outlinework"
                          className="h-[20px] w-[20px] self-start sm:w-full"
                        />
                        <Text size="xl" as="p">
                          Innovaccer Analytics Private Ltd.
                        </Text>
                        <Img
                          src="images/img_outline_location_on_24px.svg"
                          alt="outline"
                          className="ml-10 h-[20px] w-[20px] self-start sm:ml-0 sm:w-full"
                        />
                        <Text size="xl" as="p">
                          Noida, India
                        </Text>
                      </div>
                      <Button
                        size="lg"
                        className="mt-[15px] w-full rounded-[10px] border border-solid border-blue_gray-200_01 font-semibold !text-green-A700 sm:px-5"
                      >
                        Apply on Timesjobs
                      </Button>
                      <div className="mt-8 flex items-center justify-between gap-5 self-stretch">
                        <div className="flex w-[25%] items-center justify-center gap-2.5">
                          <Img
                            src="images/img_rectangle_3_2.png"
                            alt="circleimage"
                            className="h-[48px] w-[48px] rounded-[50%]"
                          />
                          <Heading as="h6">Joseph Gray</Heading>
                        </div>
                        <div className="flex w-[27%] items-center justify-between gap-5">
                          <div className="flex items-center gap-2">
                            <Img src="images/img_eye.svg" alt="eye" className="h-[18px] w-[18px]" />
                            <Text as="p" className="!font-medium !text-blue_gray-700">
                              1.4k views
                            </Text>
                          </div>
                          <Button color="blue_gray_50_01" size="md" shape="round" className="w-[42px] !rounded-sm">
                            <Img src="images/img_search_blue_gray_900.svg" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* location info section */}
                <div className="mt-[27px] w-[23%] md:w-full">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-1">
                      <Img
                        src="images/img_outline_location_on_24px.svg"
                        alt="location image"
                        className="h-[18px] w-[18px] self-start"
                      />
                      <Text as="p">Noida, India</Text>
                    </div>
                    <Img
                      src="images/img_baseline_edit_24px.svg"
                      alt="edit location image"
                      className="h-[20px] w-[20px]"
                    />
                  </div>
                  <div className="mt-[9px] h-px bg-gray-400" />
                  <div className="mt-[31px] flex items-start gap-[7px]">
                    <Img
                      src="images/img_baseline_error_outline_24px.svg"
                      alt="error image"
                      className="h-[16px] w-[16px]"
                    />
                    <Text size="s" as="p" className="w-[93%] leading-[15px] !text-black-900_7f">
                      Your location will help us serve better and extend a personalised experience.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
