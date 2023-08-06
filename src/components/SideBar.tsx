'use client'

import { FC, useEffect, useState } from 'react'
import SideBtn from '@/components/SideBtn'
import {
  AiFillLinkedin,
  AiFillGithub,
  // AiOutlineHeart,
  // AiFillHeart,
  // AiOutlineEye,
} from 'react-icons/ai'
import { SiLinktree } from 'react-icons/si'
import { BiLogoGmail } from 'react-icons/bi'
// import { likes, toLike, visits } from '@/lib/stats'
import ThemeBtn from './ThemeBtn'

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  // const [liked, setLiked] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  // const handleLike = () => {
  //   toLike(liked ? '-' : '+')
  //   setLiked(!liked)
  // }
  // const visit = visits()

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 160)
    }
    window.addEventListener('scroll', handleScroll)
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <div className="w-8">
      <div className={`${isFixed && 'fixed top-10'} flex flex-col gap-2`}>
        <SideBtn
          icon1={AiFillLinkedin}
          icon2={AiFillLinkedin}
          iconBool={false}
          link="https://www.linkedin.com/in/augusto-sasso/"
          label="LinkedIn"
          onClick={() => {}}
        />
        <SideBtn
          icon1={AiFillGithub}
          icon2={AiFillGithub}
          iconBool={false}
          link="https://github.com/Patag1"
          label="GitHub"
          onClick={() => {}}
        />
        <SideBtn
          icon1={BiLogoGmail}
          icon2={BiLogoGmail}
          iconBool={false}
          link="mailto:augustosasso97@gmail.com"
          label="Gmail"
          onClick={() => {}}
        />
        <SideBtn
          icon1={SiLinktree}
          icon2={SiLinktree}
          iconBool={false}
          link="https://linktr.ee/agusasso"
          label="Linktree"
          onClick={() => {}}
        />
        {/* <div></div>
        <SideBtn
          icon1={AiOutlineHeart}
          icon2={AiFillHeart}
          iconBool={liked}
          clickable
          label={likes()}
          onClick={handleLike}
        />
        <SideBtn
          icon1={AiOutlineEye}
          icon2={AiOutlineEye}
          label={visit}
          onClick={() => {}}
        /> */}
        <div></div>
        <ThemeBtn />
      </div>
    </div>
  )
}

export default SideBar
