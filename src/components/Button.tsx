import React from 'react'

type buttonPropTypes = {
    text:string,
    onClick:Function
}

export default function Button(props:buttonPropTypes) {

  const {text,onClick}= props;
  return (
    <button>
        {text}
    </button>
  )
}
