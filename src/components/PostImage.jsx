import { imgsArr } from "../services/postsData";

export default function PostImage({id, title, className}) {
  return (
    <img src={`https://placeimg.com/640/480/${imgsArr[id % 18]}`} className={className} alt={`Image of ${title}`}/>
  )
}