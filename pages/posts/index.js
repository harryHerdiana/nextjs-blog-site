import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/post-utils";
import { Fragment } from "react";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all posts"/>
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}
export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();
  console.log(allPosts);
  return {
    props: {
      posts: allPosts,
    },
  };
}
