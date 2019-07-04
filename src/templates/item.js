import React from 'react';
import { graphql } from 'gatsby';

import Container from '.';

import Item from '../fragments/Item';
import ItemSidebar from '../fragments/Item/Sidebar';

const seo = '';

const IndexPage = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const { date, title } = frontmatter;
  console.log(frontmatter, html);
  return (
    <Container seo={seo}>
      <ItemSidebar date={date} title={title} />
      <Item html={html} />
    </Container>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default IndexPage;