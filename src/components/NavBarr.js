import React from 'react'

function NavBarr() {
  return (
    <div>
        <nav>
        <img id="website-icon" src="/assets/markets.tn-icon.png" alt="fix this error!"/>
        <ul>
          <li><a href="" target="_blank">Blog</a></li>
          <li><a href="" target="_blank">Deals</a></li>
          <li><a href="" target="_blank">Clearances</a></li>
        </ul>
        <ul id="search-bar">
          <input type="text" placeholder="Looking for something ?"/>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>
          </button>
        </ul>
      </nav>
    </div>
  )
}

export default NavBarr