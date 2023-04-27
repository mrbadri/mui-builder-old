import React from 'react'

const HyperLink = (props: any) => {
  return (
    <>
      <a href={props.href}>{props.children}</a>
    </>
  )
}

export default HyperLink
