import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function LinkFooter(props) {
  const {title, listLink} = props
  return (
    <div className="footer__company">
      <h3 className="footer__title">{title}</h3>
      <ul className="footer__list">
        {listLink.map((item) => (
          <li className="footer__li" key={item.id}>
            <Link className="footer__link" to="/">
              {item.link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
LinkFooter.propTypes = {
  title: PropTypes.string.isRequired,
  listLink: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default LinkFooter
