import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDataItem} = props
  const {author, avatarUrl, imageUrl, id, topic, title} = blogDataItem

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="list-item-container">
        <img src={imageUrl} className="item-image" alt={`item ${id}`} />
        <div className="blog-info-container">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="logo-name-container">
            <img
              src={avatarUrl}
              alt={`avatar ${id}`}
              className="avatar-image"
            />
            <p className="avatar-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
