import React from 'react'

import './styles.scss'

export default function PanelFooter() {
  return (
    <footer className='panel-footer'>
      <ul className='panel-footer__list'>
        <li className='panel-footer__list--item'>
          Главная страница
        </li>

        <li className='panel-footer__list--item'>
          Ссылка
        </li>
      </ul>

      <span className='panel-footer__copyright'>
          Copyright © 2020 Simbirsoft
      </span>
    </footer>
  )
}
