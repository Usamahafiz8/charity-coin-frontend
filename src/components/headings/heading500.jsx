import { Typography } from '@mui/material'
import React from 'react'

const Heading500 = ({children, styles}) => {
  return (
 <Typography variant='h5' style={{
    fontWeight:500,
    fontSize:'1.2em',
    color:'#000000',
    ...styles
 }}>
{children}
 </Typography>
  )
}

export default Heading500
