/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../styles/layout.sass";
import "../styles/products.sass";
import "../styles/product.sass";
import "../styles/theme.css";
import Helmet from 'react-helmet'
import Footer from "./Footer"

const Layout = ({ children, bodyAttributes, aside }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Helmet
        bodyAttributes={bodyAttributes}
      >
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Montserrat:400,500,700|Varela+Round"/>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main class="main" id="main">
          <div class="fade-in wrapper">
          {children}
          </div>
        </main>
        {aside}
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout