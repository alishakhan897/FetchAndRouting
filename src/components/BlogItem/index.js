// Write your JS code here
import {Component} from 'react'
import './index.css'

class BlogItem extends Component {
  state = {ComponentList: [], Loader: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({ComponentList: updatedData, Loader: false})
  }

  render() {
    const {ComponentList} = this.state
    const {imageUrl, topic, title} = ComponentList

    return (
      <div className="Blog-item-container">
        <div className="img-container">
          <img src={imageUrl} />
        </div>
        <div className="small-container">
          <p>{topic}</p>
          <p>{title}</p>
        </div>
      </div>
    )
  }
}
export default BlogItem
