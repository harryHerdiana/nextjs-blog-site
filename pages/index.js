import { Fragment } from "react";
import FeaturedPost from "../components/home-page/featured-post";
import Hero from "../components/home-page/hero";
import { getAllPosts, getFeaturedPosts } from "../helpers/post-utils";


function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}
export default HomePage;

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts()
  const allPosts = getAllPosts()
  console.log(allPosts);
  return {
    props:{
      posts:featuredPosts,
      allPosts:allPosts
    }
  }
}