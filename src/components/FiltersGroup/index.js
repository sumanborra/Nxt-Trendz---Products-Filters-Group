import {CgSearch} from 'react-icons/cg'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    changeSerachInput,
    changeCategory,
    changeRating,
    clearing,
  } = props

  const changeInputElement = event => {
    if (event.key === 'Enter') {
      changeSerachInput(event.target.value)
    }
  }

  const clickedButtonCategory = event => {
    changeCategory(event.currentTarget.id)
  }
  const clickedButtonRating = event => {
    changeRating(event.currentTarget.id)
  }
  const clearFilters = () => {
    clearing()
  }

  return (
    <div className="filters-group-container">
      <div className="container-serach">
        <input
          type="search"
          placeholder="search"
          className="input-search-element"
          onKeyDown={changeInputElement}
        />
        <CgSearch className="icon-search" />
      </div>
      <h1 className="category-heading">Category</h1>
      <ul className="categoryOptions-container">
        {categoryOptions.map(each => (
          <li className="list-item" key={each.categoryId}>
            <button
              type="button"
              className="buttn-category-items"
              onClick={clickedButtonCategory}
              id={each.categoryId}
            >
              <p className="text-para">{each.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1 className="category-heading rating-style">Rating</h1>
      <ul className="categoryOptions-container">
        {ratingsList.map(each => (
          <li className="list-item" key={each.ratingId}>
            <button
              type="button"
              className="buttn-category-items"
              onClick={clickedButtonRating}
              id={each.ratingId}
            >
              <img
                src={each.imageUrl}
                alt={`rating ${each.ratingId}`}
                className="rating-icon"
              />{' '}
              && up
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="buttn-clear-filter"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
