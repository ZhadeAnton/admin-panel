import React from 'react'

import './styles.scss'

export default function CheckboxPrimary() {
  return (
    <div>
      <input
        type="checkbox"
        checked={true}
        className="checkbox-custom"
      />

      <label className="checkbox-custom-label">
        Checbox
      </label>
    </div>
  )
}
