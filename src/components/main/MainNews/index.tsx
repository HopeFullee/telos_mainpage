import React from 'react'
import { AddButton } from 'components/shared/Icons'
import { Link } from 'gatsby'

type MainNewsProps = {
  mainNewsList: MainNewsItemType[]
}

const MainNews = ({ mainNewsList }: MainNewsProps) => {
  return (
    <section className="mx-auto px-30 mt-100 sm:mt-150 lg:mt-200 max-w-1450 sm:px-40 lg:px-50">
      <h4 className="font-bold text-center font-open-sans text-36 sm:text-46 lg:text-52">
        Telos News
      </h4>
      <ul className="mt-20 border-t-2 all:truncate sm:mt-45 border-c-black-300 under:border-b-1 under:border-c-gray-300 under:flex under:justify-between under:px-10 under:py-20 under:sm:px-30 under:lg:px-50 under:sm:py-25 under:lg:py-35 under:items-center">
        {mainNewsList.map(
          ({
            node: {
              fields: { slug },
              frontmatter: { title, date },
            },
          }) => {
            return (
              <Link key={title} to={slug}>
                <li className="flex justify-between w-full">
                  <div>
                    <p className="text-16 sm:text-18 lg:text-22 text-c-gray-400">
                      {date}
                    </p>
                    <p className="font-medium text-18 sm:text-22 lg:text-28 text-c-black-300">
                      {title}
                    </p>
                  </div>
                  <AddButton className="h-50 w-50 sm:h-65 sm:w-65 lg:h-75 lg:w-75" />
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
