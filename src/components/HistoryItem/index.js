import './index.css'

const HistoryItem = props => {
  const {historyItems, onDeleteSearch} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItems

  const deleteItem = () => {
    onDeleteSearch(id)
  }

  return (
    <li className="item-container">
      <p className="time">{timeAccessed}</p>
      <div className="social-icon-container">
        <div className="social-icon">
          <img src={logoUrl} className="logo-url" alt="domain logo" />
          <div className="domain-container">
            <p className="logo-title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          className="button"
          type="button"
          data-testid="delete"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
