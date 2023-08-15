import { SendOutlined } from '@mui/icons-material'
import { Input } from '@mui/joy'
import React from 'react'

const CommentInput = ({placeholder, endDecorator, size, onChange, value}) => {
  return (
      <Input
          required
          value={value}
          size={size}
          variant='plain'
          placeholder={placeholder}
          color="success"
          endDecorator={endDecorator}
          onChange={onChange}
          sx={{
                color:'gray',
              '&::before': {
                  border: '1.5px solid var(--Input-focusedHighlight)',
                  transform: 'scaleX(0)',
                  left: '2.5px',
                  right: '2.5px',
                  bottom: 0,
                  top: 'unset',
                  transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                  borderRadius: 0,
                  borderBottomLeftRadius: '64px 20px',
                  borderBottomRightRadius: '64px 20px',
              },
              '&:focus-within::before': {
                  transform: 'scaleX(1)',
              },
          }}
      />
  )
}

export default CommentInput