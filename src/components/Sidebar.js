import React from 'react'

const Sidebar = ({companies,onSelect}) => {
  return (
      <ul className="list-group">
        {companies.map((company,id) => (
            <li 
                key={id}
                className="list-group-item list-group-item-action"
                onClick={() => onSelect(company)}
                style={{ cursor: 'pointer' }}
            >
                {company}
            </li>
        ))}
      </ul>
  )
}

export default Sidebar
