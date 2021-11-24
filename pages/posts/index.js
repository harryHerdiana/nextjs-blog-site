import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../helpers/post-utils";
import { Fragment } from "react";
function AllPostsPage(props){
        return <Fragment>
          <AllPosts posts={props.posts}/>
        </Fragment>
    }
export default AllPostsPage


export function getStaticProps(){
  const allPosts = getAllPosts()
  console.log(allPosts);
  return{
    props:{
      posts:allPosts
    }
  }
}