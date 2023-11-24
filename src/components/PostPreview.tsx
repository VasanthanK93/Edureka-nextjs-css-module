import { Post } from "../interfaces/post";
import axios from 'axios';
import styles from './styles/PostPreview.module.css';
import Link from "next/link";

async function getPost() : Promise<Post[]>{
  const response = await axios.get('http://localhost:3600/posts');
  if (!response) {
      throw new Error("Unable to fetch data");
  }

  return response.data;
}

const PostPreview= async () => {
  const postData =  await getPost()
    return (
      <div>
      {postData.map((post) => (
        <div className={styles.postPreview}>
        <Link href={`posts/${post.slug}`}className={styles.title}>{post.title}
        </Link>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </div>
      ))}
    </div>
    )
}

export default PostPreview;