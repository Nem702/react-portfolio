import React from 'react'

const Button = ({ text, className, id}) => {
  return (
    // if className is not provided, it defaults to an empty string, and always includes 'cta-wrapper' class
    <a className={`${className ?? ''} cta-wrapper`}>
        <div className="cta-button group">
            <div className="bg-circle" />
            <p className="text">{text}</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
        </div>
    </a>
  )
}

export default Button