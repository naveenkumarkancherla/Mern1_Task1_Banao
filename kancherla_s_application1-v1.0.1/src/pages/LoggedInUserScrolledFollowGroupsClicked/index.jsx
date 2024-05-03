import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, SelectBox } from "../../components";
import Header from "../../components/Header";
import LoggedInUserScrolledFollowGroupsClickedRowfollowed from "../../components/LoggedInUserScrolledFollowGroupsClickedRowfollowed";

const data = [
  { leisuretext: "Leisure", followedbutton: "Followed" },
  { leisuretext: "Activism", followedbutton: "Follow" },
  { leisuretext: "MBA", followedbutton: "Follow" },
  { leisuretext: "Philosophy", followedbutton: "Follow" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function LoggedInUserScrolledFollowGroupsClickedPage() {
  return (
    <>
      <Helmet>
        <title>Explore Groups - Follow Your Interests</title>
        <meta
          name="description"
          content="Discover and follow groups that match your interests. Engage with posts, articles, events, and job opportunities in your favorite communities."
        />
      </Helmet>

      {/* user profile section */}
      <div className="relative h-[1024px] w-full bg-white-A700">
        {/* main content section */}
        <div className="absolute bottom-[-757.00px] left-0 right-0 m-auto flex w-full flex-col items-center">
          {/* navigation section */}
          <div className="relative z-[2] self-stretch">
            {/* header section */}
            <Header />

            {/* sub navigation section */}
            <div className="relative mt-[-42px] flex justify-center bg-white-A700 pb-[11px] pt-[62px] md:pt-5">
              <div className="container-xs flex flex-col gap-3 md:p-5">
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
                  <div className="flex w-[27%] justify-center gap-4 md:w-full">
                    <SelectBox
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_baselinearrowdropdown24px.svg"
                          alt="baseline-arrow_drop_down-24px"
                          className="h-[22px] w-[22px]"
                        />
                      }
                      name="Post Dropdown"
                      placeholder={`Write a Post`}
                      options={dropDownOptions}
                      className="w-full gap-px font-medium sm:pr-5"
                    />
                    <Button
                      size="lg"
                      shape="round"
                      leftIcon={
                        <Img
                          src="images/img_outlineexittoapp24px.svg"
                          alt="outline-exit_to_app-24px"
                          className="h-[22px] w-[22px]"
                        />
                      }
                      className="min-w-[134px] gap-1.5 border border-solid border-gray-500 font-medium !text-gray-700"
                    >
                      Leave Group
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="h-px w-full self-stretch bg-gray-300" />
                  <div className="relative mt-[-1px] h-px w-[9%] bg-black-900" />
                </div>
              </div>
            </div>
          </div>

          {/* posts list section */}
          <div className="container-xs relative mt-[-80px] md:p-5">
            {/* articles section */}
            <div className="flex flex-col gap-4 pb-[72px] md:pb-5">
              {/* education section */}
              <div className="flex flex-col">
                <div className="flex flex-1 flex-col items-center rounded border border-solid border-gray-300 bg-white-A700 pb-[92px] md:pb-5">
                  <Img
                    src="images/img_rectangle_5_178x692.png"
                    alt="article image"
                    className="relative z-[1] h-[178px] w-full rounded-tl rounded-tr object-cover md:h-auto"
                  />
                  <div className="relative mt-[-54px] flex w-[94%] flex-col items-start md:w-full md:p-5">
                    <Text size="3xl" as="p">
                      <span className="font-medium text-black-900">✍️&nbsp;</span>
                      <span className="font-medium text-black-900">Article</span>
                    </Text>
                    <div className="mt-[13px] flex items-start gap-6 self-stretch md:flex-col">
                      <Heading size="md" as="h1" className="w-[96%] leading-[134.17%] md:w-full">
                        What if famous brands had regular fonts? Meet RegulaBrands!
                      </Heading>
                      <Img
                        src="images/img_baseline_more_vert_24px.svg"
                        alt="article options icon"
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
                        <Heading as="h2">Sarthak Kamra</Heading>
                      </div>
                      <div className="flex w-[27%] items-center justify-between gap-5">
                        <div className="flex items-center gap-2">
                          <Img src="images/img_eye.svg" alt="views icon" className="h-[18px] w-[18px]" />
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
                        <Heading size="md" as="h3" className="w-[96%] leading-[134.55%] md:w-full">
                          Tax Benefits for Investment under National Pension Scheme launched by Government
                        </Heading>
                        <Img
                          src="images/img_baseline_more_vert_24px_black_900.svg"
                          alt="education options icon"
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
                            alt="contributor image"
                            className="h-[48px] w-[48px] rounded-[50%]"
                          />
                          <Heading as="h4">Sarah West</Heading>
                        </div>
                        <div className="flex w-[27%] items-center justify-between gap-5">
                          <div className="flex items-center gap-2">
                            <Img src="images/img_eye.svg" alt="views search icon" className="h-[18px] w-[18px]" />
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
              </div>

              {/* meetup section */}
              <div className="relative h-[775px]">
                <div className="absolute left-0 right-0 top-[0.00px] m-auto w-full rounded border border-solid border-gray-300 bg-white-A700 pb-5">
                  <div className="flex flex-col items-center gap-5">
                    <Img
                      src="images/img_rectangle_5_1.png"
                      alt="meetup image"
                      className="h-[220px] w-full rounded-tl rounded-tr object-cover md:h-auto"
                    />
                    <div className="flex w-[94%] flex-col items-start md:w-full">
                      <Text size="3xl" as="p">
                        <span className="font-medium text-black-900">🗓️</span>
                        <span className="font-medium text-black-900">&nbsp;Meetup</span>
                      </Text>
                      <div className="mt-2.5 flex items-center gap-6">
                        <Heading size="md" as="h5">
                          Finance & Investment Elite Social Mixer @Lujiazui
                        </Heading>
                        <Button color="gray_400_01" size="sm" shape="round" className="w-[28px] rotate-[-90deg]">
                          <Img src="images/img_baseline_more_vert_24px_black_900_28x28.svg" />
                        </Button>
                      </div>
                      <div className="relative h-[102px] self-stretch">
                        <div className="absolute bottom-[20.00px] left-0 right-0 m-auto flex w-full justify-center rounded-lg border border-solid border-blue_gray-200_01 bg-white-A700 p-2.5">
                          <Heading size="xs" as="h6" className="!text-deep_orange-A200">
                            Visit Website
                          </Heading>
                        </div>
                        <div className="absolute left-[0.00px] top-[8.00px] m-auto flex flex-wrap">
                          <Img src="images/img_baseline_today_24px.svg" alt="date icon" className="h-[20px] w-[20px]" />
                          <Text size="xl" as="p">
                            Fri, 12 Oct, 2018
                          </Text>
                          <Img
                            src="images/img_outline_location_on_24px.svg"
                            alt="location icon"
                            className="ml-10 h-[20px] w-[20px]"
                          />
                          <Text size="xl" as="p">
                            Ahmedabad, India
                          </Text>
                        </div>
                        <div className="absolute bottom-0 right-[0.00px] top-0 my-auto flex h-max w-[25%] flex-col items-start gap-[13px] rounded bg-white-A700 px-3 py-[11px] shadow-sm">
                          <Text as="p">Edit</Text>
                          <Text as="p">Report</Text>
                          <Text as="p">Option 3</Text>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-10 self-stretch md:flex-col">
                        <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch">
                          <div className="flex w-[28%] items-center justify-center gap-2.5">
                            <Img
                              src="images/img_rectangle_3_1.png"
                              alt="attendee image"
                              className="h-[48px] w-[48px] rounded-[50%]"
                            />
                            <Heading as="h6">Ronal Jones</Heading>
                          </div>
                          <div className="flex gap-2">
                            <Img src="images/img_eye.svg" alt="attendee views icon" className="h-[18px] w-[18px]" />
                            <Text as="p" className="!font-medium !text-blue_gray-700">
                              1.4k views
                            </Text>
                          </div>
                        </div>
                        <div className="flex rounded-sm bg-blue_gray-50_01 p-[9px]">
                          <Img
                            src="images/img_search_blue_gray_900.svg"
                            alt="attendee search icon"
                            className="h-[18px] w-[18px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* job section */}
                <div className="absolute bottom-[0.00px] left-0 right-0 m-auto w-full rounded border border-solid border-gray-300 bg-white-A700 p-5">
                  <div className="flex flex-col items-start">
                    <Text size="3xl" as="p" className="!font-medium">
                      💼️ Job
                    </Text>
                    <div className="mt-2.5 flex items-center gap-6 md:flex-col">
                      <Heading size="md" as="h5">
                        Software Developer
                      </Heading>
                      <Img
                        src="images/img_baseline_more_vert_24px_black_900.svg"
                        alt="job options icon"
                        className="h-[28px] w-[28px] md:w-full"
                      />
                    </div>
                    <div className="mt-3 flex flex-wrap sm:flex-col">
                      <Img
                        src="images/img_outline_work_outline_24px.svg"
                        alt="company icon"
                        className="h-[20px] w-[20px] sm:w-full"
                      />
                      <Text size="xl" as="p">
                        Innovaccer Analytics Private Ltd.
                      </Text>
                      <Img
                        src="images/img_outline_location_on_24px.svg"
                        alt="company location icon"
                        className="ml-10 h-[20px] w-[20px] sm:ml-0 sm:w-full"
                      />
                      <Text size="xl" as="p">
                        Noida, India
                      </Text>
                    </div>
                    <div className="mt-4 flex justify-center self-stretch rounded-[10px] border border-solid border-blue_gray-200_01 bg-white-A700 p-[9px]">
                      <Heading size="xs" as="p" className="!text-green-A700">
                        Apply on Timesjobs
                      </Heading>
                    </div>
                    <div className="mt-8 flex items-center justify-between gap-5 self-stretch">
                      <div className="flex w-[25%] items-center justify-center gap-2.5">
                        <Img
                          src="images/img_rectangle_3_2.png"
                          alt="applicant image"
                          className="h-[48px] w-[48px] rounded-[50%]"
                        />
                        <Heading as="h6">Joseph Gray</Heading>
                      </div>
                      <div className="flex w-[27%] items-center justify-between gap-5">
                        <div className="flex gap-2">
                          <Img src="images/img_eye.svg" alt="applicant views icon" className="h-[18px] w-[18px]" />
                          <Text as="p" className="!font-medium !text-blue_gray-700">
                            1.4k views
                          </Text>
                        </div>
                        <div className="flex rounded-sm bg-blue_gray-50_01 p-[9px]">
                          <Img
                            src="images/img_search_blue_gray_900.svg"
                            alt="applicant search icon"
                            className="h-[18px] w-[18px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* additional meetup section */}
                <div className="absolute bottom-[10%] left-0 right-0 m-auto flex w-full flex-col items-center gap-5 rounded border border-solid border-gray-300 bg-white-A700 pb-5">
                  <Img
                    src="images/img_rectangle_5_1.png"
                    alt="second meetup image"
                    className="h-[220px] w-full rounded-tl rounded-tr object-cover md:h-auto"
                  />
                  <div className="flex w-[94%] flex-col items-start md:w-full md:p-5">
                    <Text size="3xl" as="p">
                      <span className="font-medium text-black-900">🗓️</span>
                      <span className="font-medium text-black-900">&nbsp;Meetup</span>
                    </Text>
                    <div className="mt-2.5 flex items-center gap-6 md:flex-col">
                      <Heading size="md" as="h5">
                        Finance & Investment Elite Social Mixer @Lujiazui
                      </Heading>
                      <Img
                        src="images/img_baseline_more_vert_24px_black_900.svg"
                        alt="second meetup options icon"
                        className="h-[28px] w-[28px] md:w-full"
                      />
                    </div>
                    <div className="mt-3 flex flex-wrap">
                      <Img
                        src="images/img_baseline_today_24px.svg"
                        alt="second date icon"
                        className="h-[20px] w-[20px]"
                      />
                      <Text size="xl" as="p">
                        Fri, 12 Oct, 2018
                      </Text>
                      <Img
                        src="images/img_outline_location_on_24px.svg"
                        alt="second location icon"
                        className="ml-10 h-[20px] w-[20px]"
                      />
                      <Text size="xl" as="p">
                        Ahmedabad, India
                      </Text>
                    </div>
                    <Button
                      size="lg"
                      className="mt-4 w-full rounded-lg border border-solid border-blue_gray-200_01 font-semibold sm:px-5"
                    >
                      Visit Website
                    </Button>
                    <div className="mt-8 flex items-center justify-between gap-5 self-stretch">
                      <div className="flex w-[25%] items-center justify-center gap-2.5">
                        <Img
                          src="images/img_rectangle_3_1.png"
                          alt="second attendee image"
                          className="h-[48px] w-[48px] rounded-[50%]"
                        />
                        <Heading as="h6">Ronal Jones</Heading>
                      </div>
                      <div className="flex gap-2">
                        <Img src="images/img_eye.svg" alt="second attendee views icon" className="h-[18px] w-[18px]" />
                        <Text as="p" className="!font-medium !text-blue_gray-700">
                          1.4k views
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* location section */}
        <div className="absolute right-[14%] top-[19%] m-auto flex w-[17%] flex-col gap-[31px]">
          <div>
            <div className="flex flex-col gap-[9px]">
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-1">
                  <Img
                    src="images/img_outline_location_on_24px.svg"
                    alt="location icon"
                    className="h-[18px] w-[18px] self-start"
                  />
                  <Text as="p">
                    <span className="text-black-900">|</span>
                    <span className="text-gray_600">Enter your location</span>
                  </Text>
                </div>
                <Img src="images/img_baseline_clear_24px.svg" alt="clear icon" className="h-[20px] w-[20px]" />
              </div>
              <div className="h-px bg-gray-400" />
            </div>
          </div>
          <div className="flex items-start gap-[7px]">
            <Img src="images/img_baseline_error_outline_24px.svg" alt="error icon" className="h-[16px] w-[16px]" />
            <Text size="s" as="p" className="w-[93%] leading-[15px] !text-black-900_7f">
              Your location will help us serve better and extend a personalised experience.
            </Text>
          </div>
        </div>
        <Text as="p" className="absolute right-[17%] top-[33%] m-auto uppercase tracking-[1.40px]">
          REcommended Groups
        </Text>

        {/* recommended groups section */}
        <div className="absolute bottom-0 right-[14%] top-0 my-auto flex h-max w-[17%] flex-col items-end gap-[54px] sm:gap-[27px]">
          <div className="flex flex-col gap-[22px] self-stretch">
            {data.map((d, index) => (
              <LoggedInUserScrolledFollowGroupsClickedRowfollowed {...d} key={"leisureList" + index} />
            ))}
          </div>
          <Text size="s" as="p" className="!text-blue-A700">
            See More...
          </Text>
        </div>
        <Img
          src="images/img_contrast_black_900.svg"
          alt="contrast image"
          className="absolute right-[30%] top-[34%] m-auto h-[10px] w-[9px]"
        />
        <Img
          src="images/img_user_black_900.svg"
          alt="user image"
          className="absolute right-[30%] top-[34%] m-auto h-[15px] w-[16px]"
        />
      </div>
    </>
  );
}
