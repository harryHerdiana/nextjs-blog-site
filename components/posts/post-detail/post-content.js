import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from 'react-markdown'

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  date: "17-08-1999",
  content: "# This is a first post, please continue working",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
export default PostContent;
