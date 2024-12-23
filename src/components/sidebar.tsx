'use client'
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./side_bar";
import Link from "next/link";
import { cn } from "@/lib/utils";;
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
export default function SideBar() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("/")
    const links = [
      {
        label: "Home",
        href: "/",
        icon: (
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none"  xmlns="http://www.w3.org/2000/svg" className={cn("group-hover:fill-[#115E56] ", selected==="/"?"fill-[#115E56]":"fill-[#CCFBEF]")}>
          <path d="M15.5 7.22737V14.45C15.5 14.7815 15.3683 15.0995 15.1339 15.3339C14.8995 15.5683 14.5815 15.7 14.25 15.7H11.125C10.7935 15.7 10.4755 15.5683 10.2411 15.3339C10.0067 15.0995 9.875 14.7815 9.875 14.45V11.325C9.875 11.1593 9.80915 11.0003 9.69194 10.8831C9.57473 10.7659 9.41576 10.7 9.25 10.7H6.75C6.58424 10.7 6.42527 10.7659 6.30806 10.8831C6.19085 11.0003 6.125 11.1593 6.125 11.325V14.45C6.125 14.7815 5.9933 15.0995 5.75888 15.3339C5.52446 15.5683 5.20652 15.7 4.875 15.7H1.75C1.41848 15.7 1.10054 15.5683 0.866116 15.3339C0.631696 15.0995 0.5 14.7815 0.5 14.45V7.22737C0.499974 7.05437 0.535859 6.88325 0.605384 6.72483C0.674909 6.56642 0.776561 6.42416 0.903906 6.30706L7.15391 0.410183L7.1625 0.401589C7.39261 0.192318 7.69248 0.076355 8.00352 0.076355C8.31455 0.076355 8.61442 0.192318 8.84453 0.401589C8.8472 0.404646 8.85007 0.407517 8.85312 0.410183L15.1031 6.30706C15.2292 6.42478 15.3295 6.56731 15.3978 6.7257C15.4661 6.88408 15.5009 7.05489 15.5 7.22737Z" />
          </svg>  
        ),
      },
      {
        label: "Chat",
        href: "/chat",
        icon: (
          <svg width="15" height="15" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("group-hover:fill-[#115E56]  ", selected==="/chat"?"fill-[#115E56]":"fill-[#CCFBEF]")}>
              <path d="M16.125 7.88751C16.1227 9.95882 15.2989 11.9446 13.8343 13.4093C12.3696 14.8739 10.3838 15.6977 8.3125 15.7H1.72422C1.39966 15.6996 1.08852 15.5705 0.859022 15.341C0.629526 15.1115 0.500413 14.8003 0.5 14.4758V7.88751C0.5 5.81551 1.3231 3.82837 2.78823 2.36324C4.25336 0.898112 6.2405 0.0750122 8.3125 0.0750122C10.3845 0.0750122 12.3716 0.898112 13.8368 2.36324C15.3019 3.82837 16.125 5.81551 16.125 7.88751Z" />
          </svg>  
        ),
      },
      {
        label: "Users",
        href: "/users",
        icon: (
          <svg width="14" height="15" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("group-hover:fill-[#115E56]  ", selected==="/users"?"fill-[#115E56]":"fill-[#CCFBEF]")}>
              <path d="M17 15.3242C17.0699 15.4171 17.1125 15.5276 17.123 15.6433C17.1336 15.759 17.1116 15.8754 17.0597 15.9793C17.0078 16.0833 16.9279 16.1707 16.829 16.2318C16.7301 16.2928 16.6162 16.3251 16.5 16.325H1.5C1.38393 16.325 1.27015 16.2927 1.17142 16.2317C1.07268 16.1706 0.992891 16.0833 0.940983 15.9795C0.889075 15.8757 0.867102 15.7595 0.877526 15.6439C0.887949 15.5283 0.930358 15.4179 1 15.325C1.55343 14.583 2.29142 13.9988 3.14063 13.6305C2.67514 13.2056 2.34898 12.65 2.20496 12.0364C2.06094 11.4229 2.10579 10.7802 2.33362 10.1926C2.56145 9.60498 2.96161 9.1 3.48159 8.74392C4.00157 8.38784 4.61705 8.1973 5.24727 8.1973C5.87748 8.1973 6.49297 8.38784 7.01294 8.74392C7.53292 9.1 7.93308 9.60498 8.16091 10.1926C8.38874 10.7802 8.43359 11.4229 8.28957 12.0364C8.14555 12.65 7.81939 13.2056 7.35391 13.6305C7.96658 13.8953 8.52333 14.2742 8.99453 14.7469C9.46573 14.2742 10.0225 13.8953 10.6352 13.6305C10.1697 13.2056 9.84351 12.65 9.69949 12.0364C9.55547 11.4229 9.60032 10.7802 9.82815 10.1926C10.056 9.60498 10.4561 9.1 10.9761 8.74392C11.4961 8.38784 12.1116 8.1973 12.7418 8.1973C13.372 8.1973 13.9875 8.38784 14.5075 8.74392C15.0274 9.1 15.4276 9.60498 15.6554 10.1926C15.8833 10.7802 15.9281 11.4229 15.7841 12.0364C15.6401 12.65 15.3139 13.2056 14.8484 13.6305C15.7016 13.9969 16.4435 14.5809 17 15.3242ZM1.125 8.07501C1.19066 8.12425 1.26538 8.16008 1.34489 8.18045C1.4244 8.20082 1.50714 8.20533 1.58839 8.19372C1.66964 8.18212 1.74781 8.15462 1.81843 8.1128C1.88906 8.07099 1.95075 8.01567 2 7.95001C2.37841 7.44546 2.86909 7.03595 3.4332 6.7539C3.9973 6.47185 4.61932 6.32501 5.25 6.32501C5.88068 6.32501 6.5027 6.47185 7.0668 6.7539C7.63091 7.03595 8.12159 7.44546 8.5 7.95001C8.55822 8.02763 8.63371 8.09063 8.72049 8.13402C8.80728 8.17742 8.90297 8.20001 9 8.20001C9.09703 8.20001 9.19272 8.17742 9.27951 8.13402C9.36629 8.09063 9.44178 8.02763 9.5 7.95001C9.87841 7.44546 10.3691 7.03595 10.9332 6.7539C11.4973 6.47185 12.1193 6.32501 12.75 6.32501C13.3807 6.32501 14.0027 6.47185 14.5668 6.7539C15.1309 7.03595 15.6216 7.44546 16 7.95001C16.0493 8.01567 16.111 8.07098 16.1817 8.11277C16.2524 8.15457 16.3306 8.18204 16.4119 8.19361C16.4932 8.20518 16.5759 8.20063 16.6555 8.18021C16.735 8.15979 16.8097 8.12391 16.8754 8.07462C16.9411 8.02532 16.9964 7.96357 17.0382 7.8929C17.08 7.82223 17.1074 7.74402 17.119 7.66273C17.1306 7.58144 17.126 7.49867 17.1056 7.41914C17.0852 7.33961 17.0493 7.26489 17 7.19923C16.4466 6.45745 15.7085 5.87351 14.8594 5.50548C15.3249 5.08063 15.651 4.52498 15.795 3.91144C15.9391 3.2979 15.8942 2.65516 15.6664 2.06757C15.4386 1.47998 15.0384 0.975003 14.5184 0.618922C13.9984 0.262842 13.3829 0.0722961 12.7527 0.0722961C12.1225 0.0722961 11.507 0.262842 10.9871 0.618922C10.4671 0.975003 10.0669 1.47998 9.83909 2.06757C9.61126 2.65516 9.56641 3.2979 9.71043 3.91144C9.85445 4.52498 10.1806 5.08063 10.6461 5.50548C10.0334 5.7703 9.47667 6.14916 9.00547 6.62188C8.53427 6.14916 7.97751 5.7703 7.36484 5.50548C7.83033 5.08063 8.15649 4.52498 8.30051 3.91144C8.44453 3.2979 8.39968 2.65516 8.17185 2.06757C7.94402 1.47998 7.54386 0.975003 7.02388 0.618922C6.5039 0.262842 5.88842 0.0722961 5.2582 0.0722961C4.62799 0.0722961 4.0125 0.262842 3.49253 0.618922C2.97255 0.975003 2.57239 1.47998 2.34456 2.06757C2.11673 2.65516 2.07188 3.2979 2.2159 3.91144C2.35992 4.52498 2.68608 5.08063 3.15156 5.50548C2.29838 5.87219 1.55645 6.45652 1 7.20001C0.950755 7.26567 0.914924 7.34038 0.894554 7.41989C0.874184 7.4994 0.869675 7.58214 0.881282 7.66339C0.892889 7.74465 0.920387 7.82282 0.962204 7.89344C1.00402 7.96406 1.05934 8.02576 1.125 8.07501Z" />
          </svg>
        ),
      },
    ];
// "md:fill-[#CCFBEF] fill-[#115E56]"
    return(
    <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody> 
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
                <div className=""> 
                {open ? <Logo /> : <LogoIcon />}
                </div> 
                <Separator className="bg-[#134E48] mt-8"/>
                <div className="mt-8 flex flex-col gap-4 ">
                {links.map((link, idx) => (             
                  <SidebarLink key={idx} link={link} setOpen={setOpen} Open={open} selected={selected} setSelected={setSelected}/>            
                ))}
                </div>
            </div>
            <div>
                <SidebarLink
                selected = {selected}
                setSelected={setSelected}
                link={{
                    label: "Settings",
                    href: "/settings",
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("group-hover:fill-[#115E56]  ", selected==="/settings"?"fill-[#115E56]":"fill-[#CCFBEF]")}>
                            <path d="M15.875 9.16873C15.8781 9.05623 15.8781 8.94373 15.875 8.83123L17.0406 7.37498C17.1017 7.29852 17.1441 7.20877 17.1641 7.11297C17.1842 7.01716 17.1815 6.91798 17.1563 6.82341C16.9648 6.10525 16.679 5.41564 16.3063 4.77263C16.2574 4.6885 16.1896 4.61694 16.1082 4.56364C16.0268 4.51034 15.9341 4.47677 15.8375 4.4656L13.9844 4.25935C13.9073 4.1781 13.8292 4.09998 13.75 4.02498L13.5313 2.16716C13.52 2.07045 13.4863 1.97771 13.4329 1.89633C13.3794 1.81494 13.3077 1.74717 13.2234 1.69841C12.5805 1.32595 11.8908 1.04064 11.1727 0.849975C11.0781 0.824709 10.9789 0.822009 10.8831 0.842093C10.7873 0.862176 10.6976 0.904481 10.6211 0.9656L9.16876 2.12497C9.05626 2.12497 8.94376 2.12497 8.83126 2.12497L7.37501 0.961693C7.29855 0.900575 7.2088 0.85827 7.113 0.838186C7.01719 0.818103 6.91801 0.820803 6.82344 0.846068C6.10528 1.0375 5.41567 1.32332 4.77266 1.69607C4.68853 1.74492 4.61697 1.81273 4.56367 1.89411C4.51037 1.97548 4.4768 2.06818 4.46563 2.16482L4.25938 4.02107C4.17813 4.09867 4.10001 4.1768 4.02501 4.25544L2.16719 4.46872C2.07048 4.47998 1.97774 4.51367 1.89636 4.56711C1.81497 4.62055 1.7472 4.69227 1.69844 4.77654C1.32606 5.41963 1.0405 6.10923 0.849224 6.82732C0.824065 6.92195 0.821492 7.02116 0.841712 7.11697C0.861931 7.21277 0.904378 7.30249 0.96563 7.37888L2.12501 8.83123C2.12501 8.94373 2.12501 9.05623 2.12501 9.16873L0.961724 10.625C0.900605 10.7014 0.8583 10.7912 0.838217 10.887C0.818134 10.9828 0.820833 11.082 0.846099 11.1765C1.03753 11.8947 1.32335 12.5843 1.6961 13.2273C1.74495 13.3114 1.81276 13.383 1.89414 13.4363C1.97551 13.4896 2.06821 13.5232 2.16485 13.5344L4.01797 13.7406C4.09558 13.8219 4.1737 13.9 4.25235 13.975L4.46876 15.8328C4.48001 15.9295 4.5137 16.0222 4.56714 16.1036C4.62058 16.185 4.6923 16.2528 4.77657 16.3015C5.41967 16.6739 6.10926 16.9595 6.82735 17.1508C6.92198 17.1759 7.02119 17.1785 7.117 17.1583C7.21281 17.1381 7.30252 17.0956 7.37891 17.0344L8.83126 15.875C8.94376 15.8781 9.05626 15.8781 9.16876 15.875L10.625 17.0406C10.7015 17.1017 10.7912 17.144 10.887 17.1641C10.9828 17.1842 11.082 17.1815 11.1766 17.1562C11.8948 16.9651 12.5845 16.6793 13.2274 16.3062C13.3115 16.2574 13.383 16.1896 13.4363 16.1082C13.4896 16.0268 13.5232 15.9341 13.5344 15.8375L13.7406 13.9844C13.8219 13.9073 13.9 13.8291 13.975 13.75L15.8328 13.5312C15.9295 13.52 16.0223 13.4863 16.1037 13.4328C16.185 13.3794 16.2528 13.3077 16.3016 13.2234C16.674 12.5803 16.9595 11.8907 17.1508 11.1726C17.1759 11.078 17.1785 10.9788 17.1583 10.883C17.1381 10.7872 17.0956 10.6975 17.0344 10.6211L15.875 9.16873ZM9.00001 12.125C8.38194 12.125 7.77775 11.9417 7.26385 11.5983C6.74995 11.2549 6.34941 10.7669 6.11288 10.1959C5.87636 9.62484 5.81447 8.99651 5.93505 8.39032C6.05563 7.78413 6.35326 7.22731 6.7903 6.79027C7.22734 6.35323 7.78416 6.0556 8.39035 5.93502C8.99654 5.81444 9.62487 5.87633 10.1959 6.11285C10.7669 6.34938 11.255 6.74991 11.5983 7.26382C11.9417 7.77772 12.125 8.38191 12.125 8.99998C12.125 9.82878 11.7958 10.6236 11.2097 11.2097C10.6237 11.7957 9.82881 12.125 9.00001 12.125Z" />
                        </svg>
                    ),
                }}
                setOpen={setOpen}
                Open={open}
                />
            </div>
        </SidebarBody>
    </Sidebar>
    )
}


export const Logo = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <div className="flex gap-[8px] items-center " >
          <svg width="28.4" height="28.4" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_857_341)">
            <rect x="0.399994" width="33.2" height="33.2" rx="5.2" fill="white"/>
            <rect x="0.399994" width="33.2" height="33.2" rx="5.2" fill="url(#paint0_linear_857_341)"/>
            <rect x="0.399994" width="33.2" height="33.2" rx="5.2" fill="url(#paint1_linear_857_341)"/>
            <rect x="0.599994" y="0.2" width="32.8" height="32.8" rx="5" stroke="url(#paint2_linear_857_341)" strokeWidth="0.4"/>
            <path d="M15.5704 27.7476C14.2111 28.0352 12.4927 26.7086 13.6512 25.9416C14.7367 25.2229 17.0353 25.3271 17.9669 24.4358C22.3336 20.3607 11.1129 24.164 19.9798 17.7588C20.5901 17.3179 21.2167 16.8794 21.7036 16.3051C24.8439 12.6011 14.6722 18.1371 19.4482 12.6175C27.4931 -0.0888319 14.6636 10.2252 13.0905 18.0306C10.3416 42.3623 5.65556 12.6862 18.9836 5.74535C21.3578 4.62523 24.2636 3.98524 24.0283 7.8813C23.783 10.9419 21.8636 11.3452 23.7514 13.881C25.0636 16.1452 21.8185 18.8365 20.5178 20.7054C23.3704 24.263 19.306 26.957 15.5704 27.7476Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_i_857_341" x="0.399994" y="-3.6" width="33.2" height="36.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-3.6"/>
            <feGaussianBlur stdDeviation="4.14"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.278576 0 0 0 0 0.591667 0 0 0 0 0.56213 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_857_341"/>
            </filter>
            <linearGradient id="paint0_linear_857_341" x1="32.6" y1="0.600002" x2="1.6" y2="34.2" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.81"/>
            <stop offset="1" stopColor="white"/>
            </linearGradient>
            <linearGradient id="paint1_linear_857_341" x1="32.6" y1="0.600002" x2="1.6" y2="34.2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3FDCCD" stopOpacity="0.81"/>
            <stop offset="1" stopColor="#09544D"/>
            </linearGradient>
            <linearGradient id="paint2_linear_857_341" x1="17" y1="0" x2="17" y2="33.2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#33F7E4"/>
            <stop offset="1" stopColor="#051D1B" stopOpacity="0"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[16px] font-bold sm:text-black md:text-white whitespace-pre"
        >
            Wingman
        </motion.span>
      </Link>
    );
  };

  export const LogoIcon = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <div className="flex gap-[8px] items-center " >
          <svg width="28.4" height="28.4" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_857_341)">
            <rect x="0.399994" width="33.2" height="33.2" rx="5.2" fill="white"/>
            <rect x="0.399994" width="33.2" height="33.2" rx="5.2" fill="url(#paint0_linear_857_341)"/>
            <rect x="0.399994" width="33.2" height="33.2" rx="5.2" fill="url(#paint1_linear_857_341)"/>
            <rect x="0.599994" y="0.2" width="32.8" height="32.8" rx="5" stroke="url(#paint2_linear_857_341)" strokeWidth="0.4"/>
            <path d="M15.5704 27.7476C14.2111 28.0352 12.4927 26.7086 13.6512 25.9416C14.7367 25.2229 17.0353 25.3271 17.9669 24.4358C22.3336 20.3607 11.1129 24.164 19.9798 17.7588C20.5901 17.3179 21.2167 16.8794 21.7036 16.3051C24.8439 12.6011 14.6722 18.1371 19.4482 12.6175C27.4931 -0.0888319 14.6636 10.2252 13.0905 18.0306C10.3416 42.3623 5.65556 12.6862 18.9836 5.74535C21.3578 4.62523 24.2636 3.98524 24.0283 7.8813C23.783 10.9419 21.8636 11.3452 23.7514 13.881C25.0636 16.1452 21.8185 18.8365 20.5178 20.7054C23.3704 24.263 19.306 26.957 15.5704 27.7476Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_i_857_341" x="0.399994" y="-3.6" width="33.2" height="36.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-3.6"/>
            <feGaussianBlur stdDeviation="4.14"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.278576 0 0 0 0 0.591667 0 0 0 0 0.56213 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_857_341"/>
            </filter>
            <linearGradient id="paint0_linear_857_341" x1="32.6" y1="0.600002" x2="1.6" y2="34.2" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.81"/>
            <stop offset="1" stopColor="white"/>
            </linearGradient>
            <linearGradient id="paint1_linear_857_341" x1="32.6" y1="0.600002" x2="1.6" y2="34.2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3FDCCD" stopOpacity="0.81"/>
            <stop offset="1" stopColor="#09544D"/>
            </linearGradient>
            <linearGradient id="paint2_linear_857_341" x1="17" y1="0" x2="17" y2="33.2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#33F7E4"/>
            <stop offset="1" stopColor="#051D1B" stopOpacity="0"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
      </Link>
    );
  };