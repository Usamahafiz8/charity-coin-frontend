import { Typography } from '@mui/material'
import React from 'react'

const Heading400 = ({children, styles}) => {
  return (
 <Typography variant='h5' style={{
    fontWeight:400,
    fontSize:'24px',
    color:'#000000',
    ...styles
 }}>
{children}
 </Typography>
  )
}

export default Heading400
