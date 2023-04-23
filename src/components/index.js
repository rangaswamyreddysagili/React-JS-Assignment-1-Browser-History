import {Component} from 'react'
import './index.css'

class SearchItems extends Component {
  render() {
    const {searchItem, onDelete} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = searchItem

    const onDeleteHistory = () => {
      onDelete(id)
    }

    return (
      <li className="list-content">
        <div className="details-content">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="logo-style" />
          <p className="content-gap">{title}</p>
          <p className="content-gap">{domainUrl}</p>
        </div>
        <div>
          <button type="button" data-testid="delete" onClick={onDeleteHistory}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default SearchItems
