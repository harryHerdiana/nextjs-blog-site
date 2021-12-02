import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../helpers/post-utils";
import Head from "next/head";
import { Fragment } from "react";
function DetailPostPage(props) {
  return (
    <Fragment>
        <Head>
        <title>{props.post.title}</title>
        <meta name="" content={props.post.excerpt}/>
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}
export default DetailPostPage;

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 300,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
