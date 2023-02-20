/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

// import React from 'react'
// import { RecoilRoot } from 'recoil'

// export const wrapRootElement = ({ element }) => {
//   return <RecoilRoot>{element}</RecoilRoot>
// }
