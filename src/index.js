import React from 'react'

export const BuiltWithBrev = () => {
  return (
    <div
      className='brevBadge'
      style={{
        position: 'absolute',
        borderRadius: 8,
        backgroundColor: '#e9eeef',
        margin: 8,
        height: 47,
        maxWidth: 200,
        border: '1px solid #6ca7b2',
        color: '#6ca7b2',
        paddingRight: 5,
        fontFamily: 'BalooMed'
      }}
    >
      <a
        href='https://brev.dev'
        target='_blank'
        rel='noreferrer'
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        <div
          className='brevBadgeContents'
          style={{
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <div
            className='imgWrapper'
            style={{ display: 'inline-block', overflow: 'hidden' }}
          >
            <img
              src='https://ad-aptive-images.s3-us-west-1.amazonaws.com/beststack.gif'
              style={{ height: 40, transform: 'scale(9.5)' }}
              height={40}
            />
          </div>
          <div className='brev-text' style={{ marginTop: '-4px' }}>
            built with brev
          </div>
        </div>
      </a>
    </div>
  )
}
