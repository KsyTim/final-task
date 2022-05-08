import React from "react";

export const Button = ({className, content, disabled=false, data=''}) => {
  return (
    <button className={`btn-${className}`} disabled={disabled} data-page={data && `#${data}`}>{content}</button>
  )
}