import React from 'react'
import { Container } from 'react-bootstrap'

export default function CentredContainer({ children }) {
  return (
    <Container className="d-flex align-items-center
     justify-content-center" style={{ minHeight: '100vh'}}>
       <div className="w-100 p-4" style={{ maxWidth: '25em'}}>
         { children }
        </div>
    </Container>
  )
}
