import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const linkPath = `/post/${slug}`
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image alt={excerpt} src={imagePath} width={450} height={300} layout="responsive"/>
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
