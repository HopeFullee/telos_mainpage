import React from 'react'
import { DetailButton } from 'components/shared/Icons'
import { Link } from 'gatsby'

type MainNewsProps = {
  mainNewsList: MainNewsItemType[]
}

const MainNews = ({ mainNewsList }: MainNewsProps) => {
  return (
    <section className="px-10 mx-auto mt-120 sm:mt-200 lg:mt-250 max-w-1450 sm:px-40 lg:px-50">
      <h4 className="font-bold text-center font-open-sans text-36 sm:text-46 lg:text-52">
        Telos News
      </h4>
      <ul className="mt-20 border-t-2 all:truncate sm:mt-30 border-c-black-300 under:border-b-1 under:border-c-gray-300 under:flex under:justify-between under:px-10 under:py-30 under:sm:px-30 under:lg:px-50 under:sm:py-35 under:lg:py-45 under:items-center">
        {mainNewsList.map(
          ({
            node: {
              fields: { slug },
              frontmatter: { title, date },
            },
          }) => {
            return (
              <Link key={title} to={slug}>
                <li className="flex items-center justify-between w-full">
                  <div className="max-w-[90%]">
                    <p className="text-16 sm:text-18 lg:text-22 text-c-gray-400">
                      {date}
                    </p>
                    <p className="font-medium text-18 sm:text-22 lg:text-28 text-c-black-300">
                      {title}
                    </p>
                  </div>
                  <DetailButton className="w-15 h-15 sm:h-20 sm:w-20 lg:h-25 lg:w-25" />
                </li>
              </Link>
            )
          },
        )}
      </ul>
    </section>
  )
}

export default MainNews
