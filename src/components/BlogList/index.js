// Write your JS code here
import {Component} from 'react'
import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  render() {
    const {ComponentList} = this.props
    return (
      <div className="main-container">
        {ComponentList.map(each => (
          <BlogItem ComponentList={each} />
        ))}
      </div>
    )
  }
}
export default BlogList
