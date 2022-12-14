import React from "react"
import { Link } from "gatsby"


const PostDetails = ({ post }) => {

  const title = post?.title || post?.slug
  const categories = post?.categories || []
  const image = post?.featuredImage?.node?.mediaItemUrl
  const date = post?.date

  const styleImg = [
    {
      width: "100%",
      height: "220px",
    },
  ]

  return (
    <div className="shape-col-6 shape-col-12-sm post-item-list">
      <article className="post-list-item">
        <Link to={`blog/${post?.slug}`} itemProp="url">
          <div
            className="img-container"
            style={{
              ...styleImg[0],
            }}
          >
            <img
            src={image}
            alt={title}
          />
          </div>
          <h3
            style={{
              marginLeft: styleImg[0].marginLeft,
            }}
          >
            <span itemProp="headline">{title}</span>
          </h3>
        </Link>
        <div
          className="info"
          style={{
            width: styleImg[0].width,
            marginLeft: styleImg[0].marginLeft,
          }}
        >
          <div className="tags">
            {[categories[0], categories[1]].map((tag, key) => {
              return <>{tag ? <span key={key}>{tag}</span> : <></>}</>
            })}
          </div>
          <div className="date">{date}</div>
        </div>
      </article>
    </div>
  )
}

export default PostDetails
