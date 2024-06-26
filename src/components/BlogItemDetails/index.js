// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      content: data.content,
      author: data.author,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
    }

    this.setState({blogDetails: updatedData, isLoading: false})
  }

  renderBlogItem = () => {
    const {blogDetails} = this.state
    const {title, author, avatarUrl, imageUrl, content} = blogDetails
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItem()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
