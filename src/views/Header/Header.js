import React from 'react'
import networkEnum from '../../networkEnum'
import BNLogo from '../../icons/blocknative-logo-dark.svg'
import avatarPlaceholder from '../../icons/avatar-placeholder.png'
import './Header.css'


const Header = (props) => {
  const { network, address, balance, ens } = props;

  return (
    <header className="user-info-container">
      <a className='bn-logo-link'
        href="https://www.blocknative.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="Blocknative Site">
        <img className="bn-logo-demo" src={BNLogo} alt="Block Native Logo" />
      </a>
      <div className="user-info">
        {ens?.name ? (
          <span>
            <img
              className="user-avatar"
              src={ens.avatar ? ens.avatar : avatarPlaceholder}
              alt="avatar"
            ></img>
            <div
              style={{
                marginLeft: '10px'
              }}
            >
              {ens.name}
            </div>
          </span>
        ) : (
          address && <span className="user-address">{address}</span>
        )}
        {balance != null && (
          <span>
            {Number(balance) > 0 ? balance / 1000000000000000000 : balance}{' '}
            ETH
          </span>
        )}
        {network && (
          <span>{networkEnum?.[Number(network)] || 'local'} Network</span>
        )}
      </div>
    </header>
  )
}

export default Header
