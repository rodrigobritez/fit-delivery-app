import React from 'react';
import './style.scss'


export const Button = ({content, width, height, bgColor}) => {

    return (
      <>
        <button className="button" style={{width: width, height: height, backgroundColor: bgColor}}>{content}</button>
      </>
    )
}