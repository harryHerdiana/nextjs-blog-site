import { Fragment } from "react";
import FeaturedPost from "../components/home-page/featured-post";
import Hero from "../components/home-page/hero";
import { getAllPosts, getFeaturedPosts } from "../helpers/post-utils";
import Head from 'next/head'

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Harry's Next Blog</title>
        <meta name="description" content="I share my knowledge about programming and anything"/>
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}
export default HomePage;

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts()
  const allPosts = getAllPosts()
  return {
    props:{
      posts:featuredPosts,
      allPosts:allPosts
    }
  }
}