import React from 'react'

export default function ErrorMessage({ query }) {
  if (!query) return null;
  return (
    <div>
      <h3>{`No country found with the name ${query}`}  </h3>
    </div>
  )
}
