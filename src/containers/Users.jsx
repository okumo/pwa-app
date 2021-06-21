import React, { useEffect, useState } from 'react';
import {Table, Modal, Button} from 'react-bootstrap'

export const Users = ()=>{
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users"
        fetch(url).then((response)=>{
            response.json().then((result)=>{
                setData(result)
                localStorage.setItem('users', JSON.stringify(result))
            })
        }).catch(err=>{
            setModal(true)
            let collection= localStorage.getItem('users')
            setData(JSON.parse(collection))
        })
    }, [])
    return(
        <div>
            {
                modal===true && <Modal show={modal}>
                <Modal.Header closeButton>
                  <Modal.Title>Offline Mode</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                  <Button variant="secondary" onClick={()=>setModal(!modal)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            }
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Username</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
      {data.map((element, index)=>{
          return(
            <tr key={index}>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.username}</td>
            <td>{element.email}</td>
          </tr>
          )
      })}
    
  </tbody>
</Table>
        </div>
    )
}