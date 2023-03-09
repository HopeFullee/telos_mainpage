import React from 'react'
import aboutSoft from 'assets/images/about_soft.png'
import aboutBranding from 'assets/images/about_branding.png'

const AboutBranch = () => {
  return (
    <section className="w-full">
      <article className="relative bg-[url('assets/images/about_branch.png')] bg-center bg-cover bg-no-repeat w-full h-[40vh] sm:h-[50vh] md:h-[80vh] xl:h-[110vh]">
        <p className="absolute font-semibold text-white w-90 sm:w-140 md:w-180 xl:w-200 text-15 sm:text-22 md:text-30 xl:text-36 top-[10%] left-[5%] md:left-[8%]">
          최고의
          <br /> 서비스를 위한 탄탄한 조직력
        </p>
      </article>
      <article className="flex flex-col w-full sm:flex-row">
        <img className="w-full sm:w-[50%]" src={aboutSoft} />
        <img className="w-full sm:w-[50%]" src={aboutBranding} />
      </article>
    </section>
  )
}

export default AboutBranch
