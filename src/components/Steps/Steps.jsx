import React from 'react'

const Steps = (props) => {
  return (
    <div className={props.customCss}>
        <div className="div__steps-step-number">
            <h6 className='h6__steps-step-number' >{props.stepNumber}</h6>
        </div>
        <div className="div__steps-step-title">
            <h6>{props.stepTitle}</h6>
        </div>
        <div className="div__steps-step-description">
            <p className='p__align-left'>{props.stepDescription}</p>
        </div>
        <div className="div__steps-step-more-info">
            <a href={props.stepMoreInfoLink}><span>{props.stepLinkText}</span></a>
        </div>
    </div>
  )
}

export default Steps