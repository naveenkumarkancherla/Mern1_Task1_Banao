import React from "react";
import { Text, Img, Button, Input, Heading } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function DesktopJoinGroup({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1040px]">
      {/* signup section */}
      <div className="container-xs px-[152px] md:p-5 md:px-5">
        {/* signup header section */}
        <div className="flex flex-col items-center gap-6 rounded-lg bg-white-A700 pb-[35px] sm:pb-5">
          {/* signup tagline section */}
          <div className="flex justify-center self-stretch rounded-tl-lg rounded-tr-lg bg-gray-100 p-4">
            <Text as="p" className="!font-medium !text-teal-800">
              Let&#39;s learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
            </Text>
          </div>
          <div className="flex w-[90%] md:w-full md:p-5">
            <div className="flex w-full items-center gap-6 md:flex-col">
              {/* account creation form section */}
              <div className="flex w-full flex-col items-start gap-[22px]">
                <a href="#">
                  {/* create account button section */}
                  <Heading size="lg" as="h1">
                    Create Account
                  </Heading>
                </a>

                {/* social signup options section */}
                <div className="flex flex-col gap-6 self-stretch">
                  <div className="flex flex-col gap-[19px]">
                    {/* personal details form section */}
                    <div>
                      <div className="relative z-[1] flex items-center justify-between gap-5 rounded-tl-sm rounded-tr-sm border border-solid border-blue_gray-100 bg-gray-100_01 pl-3 pr-[75px] md:pr-5">
                        <Text size="xl" as="p" className="!text-blue_gray-400">
                          First Name
                        </Text>
                        <div className="flex items-center gap-[11px]">
                          <div className="h-full w-px bg-blue_gray-100_01" />
                          <Text size="xl" as="p" className="mb-3 self-end !text-blue_gray-400">
                            Last Name
                          </Text>
                        </div>
                      </div>
                      <Input
                        shape="square"
                        type="email"
                        name="Email Field"
                        placeholder={`Email`}
                        className="relative mt-[-1px] border border-solid border-blue_gray-100 sm:pr-5"
                      />
                      <Input
                        shape="square"
                        type="password"
                        name="Password Field"
                        placeholder={`Password`}
                        suffix={<Img src="images/img_eye_blue_gray_400.svg" alt="eye" className="h-[18px] w-[18px]" />}
                        className="relative z-[2] mt-[-1px] gap-[35px] border border-solid border-blue_gray-100"
                      />
                      <Input
                        shape="square"
                        type="password"
                        name="Confirm Password Field"
                        placeholder={`Confirm Password`}
                        className="relative mt-[-1px] !rounded-bl-sm !rounded-br-sm border border-solid border-blue_gray-100 sm:pr-5"
                      />
                    </div>

                    {/* submit signup form button section */}
                    <Button color="blue_A700" size="xl" className="w-full rounded-[20px] font-semibold sm:px-5">
                      Create Account
                    </Button>
                  </div>

                  {/* social media signup buttons section */}
                  <div className="flex flex-col gap-2">
                    <Button
                      size="xl"
                      shape="round"
                      leftIcon={
                        <Img
                          src="images/img_flogorgbblue1024.png"
                          alt="f_logo_rgb-blue_1024"
                          className="h-[16px] w-[16px]"
                        />
                      }
                      className="w-full gap-2.5 !rounded-sm border border-solid border-blue_gray-100_01 !text-black-900 sm:px-5"
                    >
                      Sign up with Facebook
                    </Button>
                    <Button
                      size="xl"
                      shape="round"
                      leftIcon={<Img src="images/img_search_red_500.svg" alt="search" className="h-[16px] w-[16px]" />}
                      className="w-full gap-2.5 !rounded-sm border border-solid border-blue_gray-100_01 !text-black-900 sm:px-5"
                    >
                      Sign up with Google
                    </Button>
                  </div>
                </div>
              </div>

              {/* signin link section */}
              <div className="flex w-full flex-col items-end gap-[29px]">
                <Text size="md" as="p" className="!text-gray-800">
                  <span className="text-gray-800">Already have an account?&nbsp;</span>
                  <span className="font-semibold text-blue-A700">Sign In</span>
                </Text>
                <div className="flex flex-col gap-[13px] self-stretch">
                  {/* image gallery section */}
                  <div className="px-5 pb-[38px] pt-5 sm:pb-5">
                    {/* visual content section */}
                    <div className="relative h-[260px]">
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[98%] flex-col items-end">
                        <div className="relative z-[35] mr-[73px] flex w-[52%] flex-col items-start md:mr-0 md:w-full">
                          <div className="flex flex-col items-end self-stretch">
                            <div className="mr-[13px] flex items-start md:mr-0">
                              <div className="flex items-start">
                                <div className="flex items-start">
                                  <Img
                                    src="images/img_image_478.png"
                                    alt="image one"
                                    className="relative z-[36] h-[47px] object-cover"
                                  />
                                  <Img
                                    src="images/img_fill_146.svg"
                                    alt="image two"
                                    className="relative ml-[-8px] mt-4 h-[4px]"
                                  />
                                </div>
                                <Img
                                  src="images/img_image_479.png"
                                  alt="image three"
                                  className="relative z-[37] h-[38px] object-cover"
                                />
                              </div>
                              <Img
                                src="images/img_image_480.png"
                                alt="image four"
                                className="relative z-[38] ml-[-16px] mt-[17px] h-[7px] object-cover"
                              />
                            </div>
                            <div className="relative z-[39] mt-[-32px] h-[92px] self-stretch bg-[url(/public/images/img_group_107.svg)] bg-cover bg-no-repeat pb-2 pl-[13px]">
                              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[77px] w-full flex-col items-center bg-[url(/public/images/img_group_104.svg)] bg-cover bg-no-repeat pb-5 pl-1.5 pt-1.5 md:h-auto">
                                <div className="flex flex-col items-start gap-[9px]">
                                  <Img src="images/img_fill_150.svg" alt="image five" className="h-[3px] self-end" />
                                  <Img
                                    src="images/img_fill_150.svg"
                                    alt="image six"
                                    className="mr-[11px] h-[5px] self-end md:mr-0"
                                  />
                                  <Img
                                    src="images/img_arrow_left.svg"
                                    alt="arrow left one"
                                    className="ml-[15px] h-[6px] md:ml-0"
                                  />
                                  <Img src="images/img_arrow_left.svg" alt="arrow left two" className="h-[6px]" />
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-[16.94px] top-0 my-auto flex h-max w-[83%] flex-col items-start gap-[33px]">
                                <div className="flex h-[40px] w-[67%] items-center justify-center self-end bg-[url(/public/images/img_group_107_teal_200.svg)] bg-cover bg-no-repeat px-px pb-1 pt-px md:h-auto md:w-full">
                                  <div className="flex h-[33px] w-full items-center justify-center bg-[url(/public/images/img_group_109.svg)] bg-cover bg-no-repeat pb-[3px] pl-[3px] pr-px pt-[5px] md:h-auto">
                                    <div className="flex flex-col items-start">
                                      <div className="flex items-center gap-[3px] self-end">
                                        <Img src="images/img_fill_160.svg" alt="image seven" className="h-[9px]" />
                                        <Img src="images/img_fill_146.svg" alt="image eight" className="h-px" />
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Img src="images/img_fill_160.svg" alt="image nine" className="h-[11px]" />
                                        <Img src="images/img_fill_146.svg" alt="image ten" className="h-px self-end" />
                                      </div>
                                      <Img src="images/img_fill_146.svg" alt="image eleven" className="h-px" />
                                    </div>
                                  </div>
                                </div>
                                <Img src="images/img_arrow_left.svg" alt="arrow left three" className="h-[7px]" />
                              </div>
                            </div>
                          </div>
                          <div className="relative z-40 ml-7 mt-[-15px] flex h-[16px] w-[19%] flex-col items-center bg-[url(/public/images/img_group_103.svg)] bg-cover bg-no-repeat pb-0.5 pl-[3px] pr-px pt-1.5 md:ml-0 md:h-auto md:w-full">
                            <div className="flex flex-col items-start">
                              <Img src="images/img_fill_397.svg" alt="image twelve" className="h-px w-[2px]" />
                              <Img src="images/img_fill_437.svg" alt="image thirteen" className="h-px w-px" />
                              <Img
                                src="images/img_fill_438.svg"
                                alt="image fourteen"
                                className="relative z-[41] h-px w-px self-end"
                              />
                              <Img
                                src="images/img_fill_393.svg"
                                alt="image fifteen"
                                className="h-[2px] w-px self-end"
                              />
                              <Img src="images/img_fill_394.svg" alt="image sixteen" className="h-px w-px" />
                            </div>
                          </div>
                        </div>
                        <div className="relative mt-[-55px] flex items-center self-stretch">
                          <div className="relative z-[33] mb-[70px] flex w-[12%] items-center self-end">
                            <div className="relative z-[34] h-[27px] w-[27%] md:h-auto">
                              <Img
                                src="images/img_image_503.png"
                                alt="image seventeen"
                                className="h-[27px] w-full object-cover"
                              />
                              <Img
                                src="images/img_image_504.png"
                                alt="image eighteen"
                                className="absolute right-[0.46px] top-[0.16px] m-auto h-[9px] object-cover"
                              />
                            </div>
                            <Img
                              src="images/img_image_499.png"
                              alt="image nineteen"
                              className="h-[18px] self-end object-cover"
                            />
                          </div>
                          <div className="relative ml-[-23px] flex flex-1 items-center">
                            <div className="relative z-[32] mb-14 h-[23px] w-[10%] self-end md:h-auto">
                              <Img
                                src="images/img_image_494.png"
                                alt="image twenty"
                                className="h-[23px] w-full object-cover"
                              />
                              <Img
                                src="images/img_image_495.png"
                                alt="image twenty one"
                                className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[8px] object-cover"
                              />
                            </div>
                            <div className="flex flex-1 items-center">
                              <Img
                                src="images/img_image_510.png"
                                alt="image twenty two"
                                className="relative z-[31] mb-14 h-[19px] w-[18px] self-end object-cover"
                              />
                              <div className="relative ml-[-13px] flex flex-1 items-center">
                                <div className="relative h-[208px] flex-1 bg-[url(/public/images/img_group_308.svg)] bg-cover bg-no-repeat pb-[5px] pl-[66px] pt-10 md:pl-5 sm:pt-5">
                                  <div className="absolute right-[12.04px] top-[20%] m-auto h-[98px] w-[53%]">
                                    <div className="absolute bottom-[17.42px] right-[-0.15px] m-auto flex items-center">
                                      <Img
                                        src="images/img_mobile.svg"
                                        alt="mobile icon"
                                        className="relative z-[3] mb-[5px] h-[7px] self-end"
                                      />
                                      <Img
                                        src="images/img_television.svg"
                                        alt="television icon"
                                        className="relative ml-[-8px] h-[48px]"
                                      />
                                    </div>
                                    <div className="absolute bottom-[17.46px] left-[0.27px] z-[4] m-auto flex w-[70%] flex-col items-start">
                                      <div className="flex items-start">
                                        <div className="flex items-start">
                                          <div className="flex items-center">
                                            <Img
                                              src="images/img_television.svg"
                                              alt="television icon two"
                                              className="h-[48px]"
                                            />
                                            <div className="relative mb-1.5 ml-[-5px] flex h-[15px] flex-col self-end bg-[url(/public/images/img_group_105.svg)] bg-cover bg-no-repeat pb-[3px] pr-px md:h-auto">
                                              <Img
                                                src="images/img_forward.svg"
                                                alt="forward icon"
                                                className="h-[12px]"
                                              />
                                            </div>
                                          </div>
                                          <Img
                                            src="images/img_contrast.svg"
                                            alt="contrast icon"
                                            className="relative ml-[-11px] mt-3.5 h-[8px]"
                                          />
                                        </div>
                                        <Img
                                          src="images/img_image_491.png"
                                          alt="image twenty three"
                                          className="relative ml-[-19px] h-[8px] object-cover"
                                        />
                                      </div>
                                      <div className="relative mt-[-48px] flex w-[85%] items-center md:w-full">
                                        <div className="flex flex-1 items-start">
                                          <div className="flex flex-1 items-center">
                                            <Img
                                              src="images/img_calendar.svg"
                                              alt="calendar icon"
                                              className="relative z-[6] h-[48px]"
                                            />
                                            <div className="relative ml-[-11px] flex h-[18px] w-[25%] flex-col items-center bg-[url(/public/images/img_group_103.svg)] bg-cover bg-no-repeat pb-[3px] pl-0.5 pr-[5px] pt-2 md:h-auto">
                                              <div className="flex flex-col items-start">
                                                <Img
                                                  src="images/img_fill_61.svg"
                                                  alt="fill icon one"
                                                  className="relative z-[5] h-px w-px"
                                                />
                                                <Img
                                                  src="images/img_fill_43.svg"
                                                  alt="fill icon two"
                                                  className="h-[3px]"
                                                />
                                                <Img
                                                  src="images/img_fill_61.svg"
                                                  alt="fill icon three"
                                                  className="relative mt-[-2px] h-px w-px self-end"
                                                />
                                                <Img
                                                  src="images/img_fill_394.svg"
                                                  alt="fill icon four"
                                                  className="h-px w-[2px] self-center"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="relative z-[7] ml-[-17px] mt-[18px] flex h-[5px] w-[30%] flex-col items-center bg-[url(/public/images/img_group_102.svg)] bg-cover bg-no-repeat px-1 pb-px pt-1 md:h-auto">
                                            <Img
                                              src="images/img_fill_50.svg"
                                              alt="fill icon five"
                                              className="h-px w-[2px]"
                                            />
                                          </div>
                                        </div>
                                        <div className="relative z-[8] mb-[17px] ml-[-7px] flex items-start self-end">
                                          <Img
                                            src="images/img_fill_50.svg"
                                            alt="fill icon six"
                                            className="h-px w-[2px]"
                                          />
                                          <Img
                                            src="images/img_fill_45.svg"
                                            alt="fill icon seven"
                                            className="relative z-10 mb-1 h-[5px] w-[4px]"
                                          />
                                          <div className="relative ml-[-3px] flex h-[4px] items-center bg-[url(/public/images/img_group_104_gray_400_02.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                                            <Img
                                              src="images/img_fill_50.svg"
                                              alt="fill icon eight"
                                              className="relative z-[9] h-px w-px self-end"
                                            />
                                            <Img
                                              src="images/img_fill_48.svg"
                                              alt="fill icon nine"
                                              className="relative ml-[-1px] h-[2px] w-px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[0.03px] left-0 right-0 z-[11] m-auto flex h-[30px] items-center bg-[url(/public/images/img_group_95.svg)] bg-cover bg-no-repeat px-px pb-1.5 pt-px md:h-auto">
                                      <div className="flex flex-col items-start pb-px">
                                        <div className="relative z-[13] flex items-end">
                                          <Img
                                            src="images/img_fill_38.svg"
                                            alt="fill icon ten"
                                            className="mb-2.5 h-[13px]"
                                          />
                                          <Img
                                            src="images/img_fill_32.svg"
                                            alt="fill icon eleven"
                                            className="h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_20.svg"
                                            alt="fill icon twelve"
                                            className="h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_32.svg"
                                            alt="fill icon thirteen"
                                            className="h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_25.svg"
                                            alt="fill icon fourteen"
                                            className="h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_25.svg"
                                            alt="fill icon fifteen"
                                            className="h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_25.svg"
                                            alt="fill icon sixteen"
                                            className="h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_31.svg"
                                            alt="fill icon seventeen"
                                            className="h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_32.svg"
                                            alt="fill icon eighteen"
                                            className="mb-[5px] h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_25.svg"
                                            alt="fill icon nineteen"
                                            className="h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_34.svg"
                                            alt="fill icon twenty"
                                            className="relative z-[14] h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_25.svg"
                                            alt="fill icon twenty one"
                                            className="mb-[5px] h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_25.svg"
                                            alt="fill icon twenty two"
                                            className="h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_25.svg"
                                            alt="fill icon twenty three"
                                            className="h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_32.svg"
                                            alt="fill icon twenty four"
                                            className="mb-2 h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_25.svg"
                                            alt="fill icon twenty five"
                                            className="h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_25.svg"
                                            alt="fill icon twenty six"
                                            className="h-px w-px"
                                          />
                                          <Img
                                            src="images/img_fill_38.svg"
                                            alt="fill icon twenty seven"
                                            className="ml-[23px] h-[13px]"
                                          />
                                        </div>
                                        <div className="relative ml-2.5 mt-[-1px] flex md:ml-0">
                                          <Img
                                            src="images/img_fill_32.svg"
                                            alt="fill icon twenty eight"
                                            className="relative z-[12] h-px w-full self-start"
                                          />
                                          <Img
                                            src="images/img_fill_32.svg"
                                            alt="fill icon twenty nine"
                                            className="h-px w-full self-end"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute left-0 right-0 top-[0.00px] z-[15] m-auto flex w-[53%] flex-col items-end">
                                      <div className="relative h-[40px] self-stretch bg-[url(/public/images/img_group_92.svg)] bg-cover bg-no-repeat md:h-auto">
                                        <Img src="images/img_favorite.svg" alt="favorite" className="h-[17px]" />
                                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[40px] w-max flex-col items-center bg-[url(/public/images/img_group_103_white_a700.svg)] bg-cover bg-no-repeat pb-px pl-px pr-[25px] pt-[31px] md:h-auto sm:pr-5 sm:pt-5">
                                          <Img src="images/img_call.svg" alt="call icon" className="h-[9px]" />
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_call.svg"
                                        alt="call icon two"
                                        className="relative z-[16] mt-[-9px] h-[9px]"
                                      />
                                    </div>
                                    <div className="absolute left-0 right-0 top-[23.04px] z-[17] m-auto flex flex-col items-center">
                                      <Img
                                        src="images/img_image_493.png"
                                        alt="image twenty four"
                                        className="relative z-[18] h-[6px] w-full object-cover"
                                      />
                                      <Img
                                        src="images/img_image_492.png"
                                        alt="image twenty five"
                                        className="h-[8px] object-cover"
                                      />
                                    </div>
                                    <Img
                                      src="images/img_image_501.png"
                                      alt="image twenty six"
                                      className="absolute bottom-[17.32px] left-[0.00px] z-[19] m-auto h-[24px] object-cover"
                                    />
                                    <Img
                                      src="images/img_image_502.png"
                                      alt="image twenty seven"
                                      className="absolute bottom-[17.32px] right-[0.40px] z-20 m-auto h-[24px] object-cover"
                                    />
                                    <div className="absolute bottom-[1.51px] left-0 right-0 z-[21] m-auto flex flex-col items-end">
                                      <Img
                                        src="images/img_image_509.png"
                                        alt="image twenty eight"
                                        className="relative z-[23] h-[14px] object-cover"
                                      />
                                      <div className="relative mt-[-5px] flex items-center self-start">
                                        <Img
                                          src="images/img_image_513.png"
                                          alt="image twenty nine"
                                          className="relative z-[22] h-[4px] self-end object-cover"
                                        />
                                        <Img
                                          src="images/img_image_508.png"
                                          alt="image thirty"
                                          className="h-[8px] object-cover"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[6.29px] right-[-0.09px] z-[24] m-auto h-[66px] w-[61%]">
                                    <div className="absolute bottom-0 right-[0.03px] top-0 my-auto flex h-max w-[71%] flex-col items-start">
                                      <div className="relative z-[26] ml-2 flex h-[65px] flex-col items-center bg-[url(/public/images/img_group_114.svg)] bg-cover bg-no-repeat pb-[5px] pl-[5px] pr-1 pt-[21px] md:ml-0 md:h-auto sm:pt-5">
                                        <Img src="images/img_thumbs_up.svg" alt="thumbs up icon" className="h-[37px]" />
                                      </div>
                                      <div className="relative mt-[-20px] flex items-center self-stretch">
                                        <div className="relative z-[25] flex self-end">
                                          <Img src="images/img_fill_80.svg" alt="fill icon thirty" className="h-px" />
                                          <Img
                                            src="images/img_fill_80.svg"
                                            alt="fill icon thirty one"
                                            className="h-px"
                                          />
                                        </div>
                                        <div className="relative ml-[-7px] flex w-[25%] items-center">
                                          <div className="flex h-[20px] flex-1 flex-col items-center bg-[url(/public/images/img_group_95_red_400.svg)] bg-cover bg-no-repeat px-px pb-1 pt-px md:h-auto">
                                            <div className="flex flex-col items-start gap-1.5">
                                              <Img
                                                src="images/img_fill_9.svg"
                                                alt="fill icon thirty two"
                                                className="h-[4px] w-full self-center"
                                              />
                                              <div className="flex">
                                                <Img
                                                  src="images/img_fill_160.svg"
                                                  alt="fill icon thirty three"
                                                  className="h-[3px]"
                                                />
                                                <Img
                                                  src="images/img_fill_160.svg"
                                                  alt="fill icon thirty four"
                                                  className="h-[3px] self-start"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <Img
                                            src="images/img_fill_80.svg"
                                            alt="fill icon thirty five"
                                            className="h-px self-end"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute left-[1.60px] top-[0.00px] z-[27] m-auto flex h-[58px] w-[60%] flex-col bg-[url(/public/images/img_group_121.svg)] bg-cover bg-no-repeat md:h-auto">
                                      <div className="flex items-start">
                                        <Img
                                          src="images/img_settings.svg"
                                          alt="settings icon"
                                          className="h-[53px] w-[66%]"
                                        />
                                        <div className="relative ml-[-13px] mt-[7px] flex w-[34%] flex-col">
                                          <div className="relative z-[28] h-[19px] md:h-auto">
                                            <Img
                                              src="images/img_image_506.png"
                                              alt="image thirty one"
                                              className="h-[19px] w-full object-cover"
                                            />
                                            <Img
                                              src="images/img_image_507.png"
                                              alt="image thirty two"
                                              className="absolute left-0 right-0 top-[0.61px] m-auto h-[17px] w-full object-cover"
                                            />
                                          </div>
                                          <Img
                                            src="images/img_image_505.png"
                                            alt="image thirty three"
                                            className="h-[12px] object-cover"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_fill_58.svg"
                                        alt="fill icon thirty six"
                                        className="relative z-[29] h-px"
                                      />
                                    </div>
                                    <div className="absolute bottom-[0.62px] left-[0.00px] z-30 m-auto w-[23%] pb-px">
                                      <div className="flex items-center">
                                        <div className="flex flex-1 flex-col items-start pb-1.5">
                                          <div className="flex h-[7px] flex-col items-center self-stretch bg-[url(/public/images/img_group_95_red_400.svg)] bg-cover bg-no-repeat px-0.5 pb-1 pt-0.5 md:h-auto">
                                            <Img
                                              src="images/img_fill_54.svg"
                                              alt="fill icon thirty seven"
                                              className="h-px"
                                            />
                                          </div>
                                          <Img
                                            src="images/img_fill_54.svg"
                                            alt="fill icon thirty eight"
                                            className="relative ml-1 mt-[-6px] h-px md:ml-0"
                                          />
                                        </div>
                                        <Img
                                          src="images/img_fill_55.svg"
                                          alt="fill icon thirty nine"
                                          className="relative ml-[-4px] h-[4px] w-[5px] self-end"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_fill_54.svg"
                                        alt="fill icon forty"
                                        className="relative mt-[-1px] h-px w-full"
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[22.23px] left-[41%] m-auto h-[25px] w-[14%]">
                                    <Img
                                      src="images/img_thumbs_up_gray_400_02.svg"
                                      alt="thumbs up icon two"
                                      className="absolute left-[0.00px] top-[0.00px] m-auto h-[19px]"
                                    />
                                    <div className="absolute bottom-[0.27px] left-0 right-0 m-auto flex flex-col items-end pb-px">
                                      <div className="flex items-center self-start">
                                        <div className="flex h-[10px] items-center bg-[url(/public/images/img_group_310.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                                          <div className="flex items-start">
                                            <Img
                                              src="images/img_fill_406.svg"
                                              alt="fill icon forty one"
                                              className="h-[3px] w-[3px]"
                                            />
                                            <Img
                                              src="images/img_fill_54.svg"
                                              alt="fill icon forty two"
                                              className="ml-[5px] h-px"
                                            />
                                            <Img
                                              src="images/img_fill_38.svg"
                                              alt="fill icon forty three"
                                              className="h-[4px]"
                                            />
                                          </div>
                                        </div>
                                        <Img
                                          src="images/img_fill_405.svg"
                                          alt="fill icon forty four"
                                          className="relative ml-[-20px] h-[3px] w-[4px] self-end"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_fill_54.svg"
                                        alt="fill icon forty five"
                                        className="relative mr-1.5 mt-[-9px] h-px md:mr-0"
                                      />
                                      <Img
                                        src="images/img_fill_54.svg"
                                        alt="fill icon forty six"
                                        className="mt-[7px] h-px w-full"
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[21.40px] left-[31%] m-auto flex gap-0.5">
                                    <Img
                                      src="images/img_fill_80.svg"
                                      alt="fill icon forty seven"
                                      className="h-px w-[2px]"
                                    />
                                    <Img src="images/img_fill_80.svg" alt="fill icon forty eight" className="h-px" />
                                  </div>
                                  <Img
                                    src="images/img_fill_80.svg"
                                    alt="fill icon forty nine"
                                    className="absolute bottom-[21.40px] left-[51%] m-auto h-px"
                                  />
                                </div>
                                <Img
                                  src="images/img_fill_80.svg"
                                  alt="fill icon fifty"
                                  className="mb-[5px] h-px w-[2px] self-end"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-[0.00px] top-[3.29px] z-[42] m-auto flex w-[68%] flex-col items-end">
                        <div className="flex flex-col items-end self-stretch">
                          <div className="relative z-[61] mr-[26px] flex items-center md:mr-0">
                            <Img
                              src="images/img_fill_160.svg"
                              alt="fill icon fifty one"
                              className="relative z-[62] mb-[13px] h-[5px] w-[4px] self-end"
                            />
                            <div className="relative ml-[-4px] flex h-[36px] flex-col items-center bg-[url(/public/images/img_group_89.svg)] bg-cover bg-no-repeat pb-[25px] pl-[5px] pr-[3px] pt-1.5 md:h-auto sm:pb-5">
                              <Img
                                src="images/img_fill_160.svg"
                                alt="fill icon fifty two"
                                className="h-[4px] w-[3px]"
                              />
                            </div>
                          </div>
                          <div className="relative mt-[-21px] flex items-start self-stretch">
                            <div className="flex flex-1 items-start">
                              <div className="flex flex-1">
                                <div className="flex flex-1 items-center">
                                  <div className="h-[104px] w-[43%] self-end bg-[url(/public/images/img_group_85.svg)] bg-cover bg-no-repeat pb-[5px] md:h-auto">
                                    <div className="flex items-center">
                                      <div className="flex flex-1 items-start">
                                        <Img
                                          src="images/img_fill_150.svg"
                                          alt="fill icon fifty three"
                                          className="relative z-[47] mt-2 h-px"
                                        />
                                        <div className="relative ml-[-7px] h-[94px] flex-1 bg-[url(/public/images/img_group_108.svg)] bg-cover bg-no-repeat pr-1.5">
                                          <div className="absolute left-[7.33px] top-[2.51px] m-auto flex flex-col items-start gap-2">
                                            <Img
                                              src="images/img_fill_150.svg"
                                              alt="fill icon fifty four"
                                              className="h-[12px]"
                                            />
                                            <Img
                                              src="images/img_fill_150.svg"
                                              alt="fill icon fifty five"
                                              className="h-[3px] w-full"
                                            />
                                          </div>
                                          <div className="absolute bottom-[2.33px] left-0 right-0 m-auto h-[59px] w-full">
                                            <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[92%] flex-col items-end">
                                              <div className="mr-1 flex w-[63%] items-start md:mr-0 md:w-full">
                                                <Img
                                                  src="images/img_fill_150.svg"
                                                  alt="fill icon fifty six"
                                                  className="mt-2.5 h-px"
                                                />
                                                <div className="relative ml-[-15px] h-[44px] w-[54%] bg-[url(/public/images/img_group_111.svg)] bg-cover bg-no-repeat md:h-auto">
                                                  <div className="relative h-[44px] bg-[url(/public/images/img_group_118.svg)] bg-cover bg-no-repeat py-[3px] pl-[3px] pr-0.5">
                                                    <Img
                                                      src="images/img_light_bulb.svg"
                                                      alt="light bulb icon"
                                                      className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[37px]"
                                                    />
                                                    <div className="absolute bottom-[9.88px] left-0 right-0 m-auto flex flex-col items-start">
                                                      <div className="flex items-start">
                                                        <Img
                                                          src="images/img_fill_134.svg"
                                                          alt="fill icon fifty seven"
                                                          className="h-[2px]"
                                                        />
                                                        <Img
                                                          src="images/img_fill_135.svg"
                                                          alt="fill icon fifty eight"
                                                          className="h-[8px]"
                                                        />
                                                      </div>
                                                      <Img
                                                        src="images/img_fill_134.svg"
                                                        alt="fill icon fifty nine"
                                                        className="h-[2px]"
                                                      />
                                                      <Img
                                                        src="images/img_fill_135.svg"
                                                        alt="fill icon sixty"
                                                        className="h-[7px] self-end"
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="relative z-[43] mt-[-28px] flex items-start self-stretch">
                                                <div className="relative z-[44] flex h-[42px] flex-1 flex-col items-center bg-[url(/public/images/img_group_113.svg)] bg-cover bg-no-repeat px-[3px] pb-2 pt-[3px] md:h-auto">
                                                  <div className="flex flex-col items-start">
                                                    <div className="flex items-end">
                                                      <Img
                                                        src="images/img_fill_146.svg"
                                                        alt="fill icon sixty one"
                                                        className="relative z-[45] mb-[5px] h-[2px]"
                                                      />
                                                      <Img
                                                        src="images/img_fill_160.svg"
                                                        alt="fill icon sixty two"
                                                        className="relative ml-[-4px] h-[8px]"
                                                      />
                                                      <Img
                                                        src="images/img_fill_160.svg"
                                                        alt="fill icon sixty three"
                                                        className="ml-[9px] mt-1.5 h-[12px]"
                                                      />
                                                    </div>
                                                    <div className="relative mt-[-1px] flex items-center gap-1 self-end">
                                                      <Img
                                                        src="images/img_fill_142.svg"
                                                        alt="fill icon sixty four"
                                                        className="h-px self-end"
                                                      />
                                                      <Img
                                                        src="images/img_fill_143.svg"
                                                        alt="fill icon sixty five"
                                                        className="h-[12px]"
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <Img
                                                  src="images/img_fill_150.svg"
                                                  alt="fill icon sixty six"
                                                  className="relative ml-[-24px] mt-3 h-px"
                                                />
                                              </div>
                                            </div>
                                            <Img
                                              src="images/img_arrow_left.svg"
                                              alt="arrow left four"
                                              className="absolute right-[0.55px] top-[0.00px] z-[46] m-auto h-[21px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_arrow_left.svg"
                                        alt="arrow left five"
                                        className="relative z-[48] mb-[17px] ml-[-5px] h-[17px] self-end"
                                      />
                                    </div>
                                  </div>
                                  <Img
                                    src="images/img_fill_165.svg"
                                    alt="fill icon sixty seven"
                                    className="relative z-[49] ml-[-39px] h-[194px] w-[57%]"
                                  />
                                </div>
                                <div className="relative z-50 ml-[-97px] flex h-[194px] w-[42%] flex-col items-center gap-1 bg-[url(/public/images/img_group_51.svg)] bg-cover bg-no-repeat px-1 pb-5 pt-1 md:h-auto">
                                  <div className="flex w-[41%] items-center gap-[3px] md:w-full">
                                    <Img
                                      src="images/img_fill_179.svg"
                                      alt="fill icon sixty eight"
                                      className="h-[2px] w-[2px]"
                                    />
                                    <div className="h-px w-[32px] flex-1 bg-white-A700_01" />
                                  </div>
                                  <div className="flex items-start self-stretch">
                                    <Img
                                      src="images/img_television_indigo_50.svg"
                                      alt="television icon three"
                                      className="relative z-[58] h-[16px] w-full"
                                    />
                                    <div className="relative ml-[-89px] w-[50%] rounded-bl-[3px] rounded-br rounded-tl rounded-tr bg-white-A700_01 pb-[9px] pl-1.5 pr-[5px] pt-[25px] sm:pt-5">
                                      <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-[3px]">
                                          <Img
                                            src="images/img_mobile_indigo_50.svg"
                                            alt="mobile icon two"
                                            className="h-[11px] w-[11px]"
                                          />
                                          <Img
                                            src="images/img_television_indigo_50_10x60.svg"
                                            alt="television icon four"
                                            className="h-[10px] w-[84%] self-start"
                                          />
                                        </div>
                                        <div className="relative h-[78px] md:h-auto">
                                          <div className="flex w-[98%] flex-col">
                                            <div className="flex flex-col items-end">
                                              <div className="flex flex-col items-end self-stretch">
                                                <Img
                                                  src="images/img_fill_180.svg"
                                                  alt="fill icon sixty nine"
                                                  className="relative z-[51] mr-1 h-px w-[2px] md:mr-0"
                                                />
                                                <div className="flex items-center self-stretch">
                                                  <div className="flex w-[26%] items-center">
                                                    <Img
                                                      src="images/img_mobile_indigo_50.svg"
                                                      alt="mobile icon three"
                                                      className="h-[11px] w-[11px]"
                                                    />
                                                    <div className="relative ml-[-1px] flex h-[5px] w-[50%] flex-col items-center self-end bg-[url(/public/images/img_group_114_gray_400_02.svg)] bg-cover bg-no-repeat pb-px pl-px pr-[3px] pt-[3px] md:h-auto">
                                                      <Img
                                                        src="images/img_fill_418.svg"
                                                        alt="fill icon seventy"
                                                        className="h-px"
                                                      />
                                                    </div>
                                                  </div>
                                                  <Img
                                                    src="images/img_television_indigo_50_10x60.svg"
                                                    alt="television icon five"
                                                    className="relative ml-[-5px] h-[10px] w-[74%] self-start"
                                                  />
                                                </div>
                                              </div>
                                              <div className="relative mr-[11px] mt-[-4px] flex h-[18px] w-[47%] items-center bg-[url(/public/images/img_group_109_indigo_400.svg)] bg-cover bg-no-repeat md:mr-0 md:h-auto md:w-full">
                                                <div className="h-[18px] w-full bg-[url(/public/images/img_group_116.svg)] bg-cover bg-no-repeat md:h-auto">
                                                  <div className="flex h-[18px] items-center bg-[url(/public/images/img_group_117.svg)] bg-cover bg-no-repeat px-[3px] pb-[5px] pt-px md:h-auto">
                                                    <Img
                                                      src="images/img_fill_241.svg"
                                                      alt="fill icon seventy one"
                                                      className="h-[11px]"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <Img
                                              src="images/img_thumbs_up_indigo_50.svg"
                                              alt="thumbs up icon three"
                                              className="relative mt-[-6px] h-[33px] w-[80%]"
                                            />
                                          </div>
                                          <div className="absolute right-[1.74px] top-[0.00px] m-auto flex items-start">
                                            <Img
                                              src="images/img_play.svg"
                                              alt="play icon"
                                              className="relative z-[52] h-[7px] w-[7px]"
                                            />
                                            <Img
                                              src="images/img_mobile_indigo_50.svg"
                                              alt="mobile icon four"
                                              className="mb-[7px] h-[11px] w-[11px]"
                                            />
                                          </div>
                                          <Img
                                            src="images/img_thumbs_up_indigo_50.svg"
                                            alt="thumbs up icon four"
                                            className="absolute left-[0.00px] top-[0.13px] z-[56] m-auto h-[20px] w-[79%]"
                                          />
                                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[78%] flex-col items-start">
                                            <div className="relative z-[55] flex h-[5px] w-[19%] flex-col items-center bg-[url(/public/images/img_group_114_gray_400_02.svg)] bg-cover bg-no-repeat pb-px pl-px pr-[3px] pt-[3px] md:h-auto md:w-full">
                                              <Img
                                                src="images/img_fill_418.svg"
                                                alt="fill icon seventy two"
                                                className="h-px"
                                              />
                                            </div>
                                            <div className="relative mt-[-3px] flex items-start self-stretch">
                                              <div className="relative z-[54] flex w-[17%] items-center justify-center pr-px">
                                                <div className="flex h-[5px] flex-1 flex-col items-center self-end bg-[url(/public/images/img_group_114_gray_400_02.svg)] bg-cover bg-no-repeat pb-px pl-0.5 pr-px pt-0.5 md:h-auto">
                                                  <Img
                                                    src="images/img_fill_397.svg"
                                                    alt="fill icon seventy three"
                                                    className="h-[2px] w-[3px]"
                                                  />
                                                </div>
                                                <Img
                                                  src="images/img_fill_397.svg"
                                                  alt="fill icon seventy four"
                                                  className="relative ml-[-3px] h-[3px] self-start"
                                                />
                                              </div>
                                              <div className="relative ml-[-7px] flex flex-1 items-start">
                                                <Img
                                                  src="images/img_user.svg"
                                                  alt="user icon"
                                                  className="relative z-[53] mt-1 h-[8px]"
                                                />
                                                <Img
                                                  src="images/img_user_gray_400_02.svg"
                                                  alt="user icon two"
                                                  className="relative ml-[-9px] h-[21px] w-[85%]"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <Img
                                            src="images/img_play.svg"
                                            alt="play icon two"
                                            className="absolute right-[0.03px] top-[15.42px] z-[57] m-auto h-[18px] w-[18px]"
                                          />
                                        </div>
                                        <div className="flex items-start gap-0.5">
                                          <Img
                                            src="images/img_mobile_indigo_50.svg"
                                            alt="mobile icon five"
                                            className="mt-1 h-[11px] w-[11px]"
                                          />
                                          <div className="relative h-[28px] flex-1">
                                            <Img
                                              src="images/img_thumbs_up_indigo_50.svg"
                                              alt="thumbs up icon five"
                                              className="absolute bottom-[0.31px] left-0 right-0 m-auto h-[23px] w-[98%]"
                                            />
                                            <Img
                                              src="images/img_thumbs_up_gray_400_02.svg"
                                              alt="thumbs up icon six"
                                              className="absolute left-[0.00px] top-[0.00px] m-auto h-[18px] w-[18px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Img
                                src="images/img_user_gray_400_02.svg"
                                alt="user icon three"
                                className="relative z-[59] ml-[-9px] mt-[60px] h-[47px]"
                              />
                            </div>
                            <div className="relative z-[60] ml-[-11px] mt-[42px] flex h-[31px] flex-col bg-[url(/public/images/img_group_92.svg)] bg-cover bg-no-repeat md:h-auto">
                              <div className="flex h-[31px] flex-col items-center bg-[url(/public/images/img_group_124.svg)] bg-cover bg-no-repeat py-2 pl-[7px] pr-2 md:h-auto">
                                <Img src="images/img_favorite.svg" alt="favorite icon two" className="h-[13px]" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative z-[63] mr-[30px] mt-[-81px] flex w-[61%] items-center md:mr-0 md:w-full">
                          <div className="relative z-[66] mb-6 h-[10px] w-[42%] self-end bg-blue_gray-200" />
                          <div className="relative ml-[-58px] flex flex-1 items-start">
                            <div className="relative z-[65] mt-3.5 flex flex-col items-center pb-px">
                              <div className="flex h-[17px] items-center bg-[url(/public/images/img_group_310.svg)] bg-cover bg-no-repeat px-px pb-0.5 pt-px md:h-auto">
                                <div className="flex flex-col items-start">
                                  <div className="flex items-start self-center pr-px">
                                    <Img src="images/img_checkmark.svg" alt="checkmark icon" className="h-[11px]" />
                                    <Img
                                      src="images/img_fill_412.svg"
                                      alt="fill icon seventy five"
                                      className="relative ml-[-3px] h-px"
                                    />
                                    <Img
                                      src="images/img_fill_413.svg"
                                      alt="fill icon seventy six"
                                      className="relative ml-[-3px] h-[3px] w-[3px]"
                                    />
                                  </div>
                                  <div className="relative mt-[-2px] flex items-center">
                                    <Img
                                      src="images/img_fill_160.svg"
                                      alt="fill icon seventy seven"
                                      className="h-[3px] w-[2px] self-start"
                                    />
                                    <Img
                                      src="images/img_fill_146.svg"
                                      alt="fill icon seventy eight"
                                      className="h-[2px] w-[2px] self-end"
                                    />
                                  </div>
                                </div>
                              </div>
                              <Img
                                src="images/img_fill_146.svg"
                                alt="fill icon seventy nine"
                                className="relative mt-[-3px] h-[2px] w-[2px]"
                              />
                            </div>
                            <div className="relative ml-[-13px] flex flex-1 items-start">
                              <Img
                                src="images/img_checkmark_red_400.svg"
                                alt="checkmark icon two"
                                className="relative z-[64] mt-2 h-[59px] w-[60px]"
                              />
                              <div className="relative ml-[-13px] h-[95px] w-[32%] bg-[url(/public/images/img_group_96.svg)] bg-cover bg-no-repeat md:h-auto">
                                <Img
                                  src="images/img_bookmark.svg"
                                  alt="bookmark icon"
                                  className="h-[95px] w-full md:h-auto"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-[19%] top-[12%] z-[67] m-auto flex w-[48%] flex-col">
                        <div className="flex items-start">
                          <div className="flex flex-1 items-start">
                            <div className="flex flex-1 items-center">
                              <div className="h-[162px] flex-1 rounded-bl-[3px] rounded-br rounded-tl rounded-tr bg-white-A700_01" />
                              <div className="relative mb-16 ml-[-23px] flex h-[22px] w-[28%] items-center self-end bg-[url(/public/images/img_group_105_orange_a100.svg)] bg-cover bg-no-repeat md:h-auto">
                                <div className="flex h-[22px] w-full items-center justify-end bg-[url(/public/images/img_group_122.svg)] bg-cover bg-no-repeat px-px pb-4 pt-0.5 md:h-auto">
                                  <Img src="images/img_fill_418.svg" alt="fill icon eighty" className="h-[2px]" />
                                </div>
                              </div>
                            </div>
                            <Img
                              src="images/img_inbox.svg"
                              alt="inbox icon"
                              className="relative ml-[-1px] mt-[54px] h-[14px]"
                            />
                          </div>
                          <Img
                            src="images/img_image_482.png"
                            alt="image thirty four"
                            className="relative ml-[-12px] mt-[49px] h-[8px] object-cover"
                          />
                        </div>
                        <div className="relative ml-[19px] mt-[-52px] flex w-[63%] flex-col md:ml-0 md:w-full">
                          <div className="flex items-start">
                            <div className="flex h-[59px] flex-1 items-center justify-center bg-[url(/public/images/img_group_128.svg)] bg-cover bg-no-repeat px-1 pb-3.5 pt-1 md:h-auto">
                              <div className="flex h-[40px] flex-col items-start bg-[url(/public/images/img_group_118_deep_orange_a100.svg)] bg-cover bg-no-repeat pb-px pl-4 pr-2.5 pt-[39px] md:h-auto sm:pt-5">
                                <Img
                                  src="images/img_fill_387.svg"
                                  alt="fill icon eighty one"
                                  className="relative z-[68] h-px w-px"
                                />
                                <Img
                                  src="images/img_fill_387.svg"
                                  alt="fill icon eighty two"
                                  className="h-px w-px self-end"
                                />
                              </div>
                            </div>
                            <Img
                              src="images/img_fill_384.svg"
                              alt="fill icon eighty three"
                              className="relative ml-[-27px] h-[3px]"
                            />
                          </div>
                          <Img
                            src="images/img_play_white_a700_01.svg"
                            alt="play icon three"
                            className="relative ml-[18px] mt-[-3px] h-[11px] w-[11px] md:ml-0"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 top-0 z-[69] m-auto flex h-max w-[20%] flex-col items-end">
                        <div className="relative z-[73] mr-4 flex flex-col items-start md:mr-0">
                          <div className="relative z-[74] flex flex-col items-start">
                            <div className="relative z-[75] flex items-end self-center pr-px">
                              <Img
                                src="images/img_fill_423.svg"
                                alt="fill icon eighty four"
                                className="relative z-[76] h-[3px]"
                              />
                              <Img
                                src="images/img_question.svg"
                                alt="question icon"
                                className="relative ml-[-2px] h-[9px]"
                              />
                              <Img
                                src="images/img_fill_50.svg"
                                alt="fill icon eighty five"
                                className="relative ml-[-3px] h-px w-[2px]"
                              />
                            </div>
                            <div className="flex h-[4px] flex-col items-center bg-[url(/public/images/img_group_104_gray_400_02.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                              <div className="flex h-px items-center bg-[url(/public/images/img_group_119.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                                <Img src="images/img_fill_397.svg" alt="fill icon eighty six" className="h-px w-full" />
                              </div>
                              <Img src="images/img_fill_179.svg" alt="fill icon eighty seven" className="h-px w-px" />
                            </div>
                          </div>
                          <div className="relative mt-[-3px] flex h-[16px] flex-col items-center bg-[url(/public/images/img_group_105.svg)] bg-cover bg-no-repeat pb-[3px] pl-px md:h-auto">
                            <Img src="images/img_fill_390.svg" alt="fill icon eighty eight" className="h-[12px]" />
                          </div>
                        </div>
                        <div className="relative mt-[-7px] flex flex-col items-start self-stretch">
                          <div className="flex flex-col items-start">
                            <div className="flex items-start">
                              <div className="flex items-center">
                                <div className="flex items-start">
                                  <Img
                                    src="images/img_image_488.png"
                                    alt="image thirty five"
                                    className="relative z-[70] mt-[7px] h-[6px] object-cover"
                                  />
                                  <Img
                                    src="images/img_user_orange_a100.svg"
                                    alt="user icon four"
                                    className="relative ml-[-3px] h-[38px]"
                                  />
                                </div>
                                <Img
                                  src="images/img_image_489.png"
                                  alt="image thirty six"
                                  className="relative mb-[7px] ml-[-6px] h-[20px] w-[19px] self-end object-cover"
                                />
                              </div>
                              <Img
                                src="images/img_image_490.png"
                                alt="image thirty seven"
                                className="relative ml-[-19px] mt-[7px] h-[7px] object-cover"
                              />
                            </div>
                            <Img
                              src="images/img_close.svg"
                              alt="close icon"
                              className="relative z-[71] ml-[5px] mt-[-38px] h-[38px] md:ml-0"
                            />
                          </div>
                          <Img
                            src="images/img_image_485.png"
                            alt="image thirty eight"
                            className="relative z-[72] ml-3 mt-[-29px] h-[61px] w-[50%] object-cover md:ml-0"
                          />
                        </div>
                      </div>
                      <div className="absolute right-[34%] top-[31%] z-[77] m-auto flex w-[11%] flex-col items-start">
                        <div className="flex items-center">
                          <Img src="images/img_call.svg" alt="call icon three" className="h-[13px]" />
                          <Img
                            src="images/img_image_481.png"
                            alt="image thirty nine"
                            className="relative ml-[-6px] h-[9px] object-cover"
                          />
                        </div>
                        <div className="relative mt-[-11px] flex w-[40%] items-start justify-center pr-px md:w-full">
                          <div className="flex h-[15px] flex-1 flex-col items-center bg-[url(/public/images/img_call.svg)] bg-cover bg-no-repeat px-px pb-2.5 pt-px md:h-auto">
                            <Img src="images/img_fill_50.svg" alt="fill icon eighty nine" className="h-[4px] w-[4px]" />
                          </div>
                          <Img
                            src="images/img_fill_50.svg"
                            alt="fill icon ninety"
                            className="relative ml-[-4px] h-[4px] w-[4px]"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[23%] left-[32%] z-[78] m-auto flex flex-col items-start">
                        <div className="flex flex-col items-end">
                          <Img
                            src="images/img_image_484.png"
                            alt="image forty"
                            className="relative z-[80] h-[30px] object-cover"
                          />
                          <div className="relative mt-[-1px] flex items-start self-start">
                            <Img
                              src="images/img_image_512.png"
                              alt="image forty one"
                              className="relative z-[79] h-[7px] object-cover"
                            />
                            <Img
                              src="images/img_image_483.png"
                              alt="image forty two"
                              className="h-[16px] object-cover"
                            />
                          </div>
                        </div>
                        <Img
                          src="images/img_image_511.png"
                          alt="image forty three"
                          className="relative z-[81] mt-[-9px] h-[11px] object-cover"
                        />
                      </div>
                      <div className="absolute left-[41%] top-[42%] z-[82] m-auto flex flex-col">
                        <Img
                          src="images/img_image_487.png"
                          alt="image forty four"
                          className="relative z-[83] h-[3px] object-cover"
                        />
                        <Img
                          src="images/img_image_486.png"
                          alt="image forty five"
                          className="relative mt-[-3px] h-[13px] object-cover"
                        />
                      </div>
                      <div className="absolute bottom-[23%] left-[14.62px] z-[84] m-auto flex flex-col items-end">
                        <div className="relative z-[85] flex flex-col items-center">
                          <Img
                            src="images/img_image_498.png"
                            alt="image forty six"
                            className="relative z-[86] h-[12px] object-cover"
                          />
                          <Img
                            src="images/img_image_497.png"
                            alt="image forty seven"
                            className="relative mt-[-10px] h-[38px] w-full object-cover md:h-auto"
                          />
                        </div>
                        <Img
                          src="images/img_image_496.png"
                          alt="image forty eight"
                          className="relative mt-[-15px] h-[28px] w-full object-cover md:h-auto"
                        />
                      </div>
                      <Img
                        src="images/img_image_500.png"
                        alt="image forty nine"
                        className="absolute bottom-[35%] left-[14.77px] z-[87] m-auto h-[20px] object-cover"
                      />
                    </div>
                  </div>

                  {/* terms and conditions text section */}
                  <Text size="xs" as="p" className="tracking-[-0.09px] !text-black-900_99">
                    By signing up, you agree to our Terms & conditions, Privacy policy
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
