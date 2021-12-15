import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

const AboutPage = ({ data }) => {
  console.log('🚀 ~ file: about.jsx ~ line 17 ~ AboutPage ~ data', data);

  const image = getImage(data.file);
  console.log('🚀 ~ file: about.jsx ~ line 18 ~ AboutPage ~ image', image);
  return (
    <Layout
      title="This is about this site"
      description="A very descriptive site description"
    >
      <GatsbyImage
        image={getImage(data.file)}
        alt="a cocktail set inside an elaborate floral arrangement"
      />
      <h1>Hello from about</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
};

export default AboutPage;
