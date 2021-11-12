import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import SingleUser from '../ManageAllOrders/SingleUser';

const MyOrders = () => {
    const [users,setUsers]=useState()
   
    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                
                setUsers(data)})
    }, [])
    const {user,isLoading}=useAuth()
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }
    const handleDelete = id => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount){
                    alert('Are you sure you want to delete?')
                    const remaining=users.filter(users=>users._id!==id)
                    setUsers(remaining)
                    
                }
               
            })

    }
    const handleUpdate = id => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => { console.log(data)
                if (data.modifiedCount>0) {
                    alert('Update Successful');
                    window.location.reload()
                    
                   
                   
                }
            })
      
    }
    return (
        <div>
        <h1 className="text-primary">My Orders</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">
          
         {console.log(users)}
          { users?.map(user => <SingleUser
              key={user._id}
              user={user}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}>
              </SingleUser>)}

      </div>
         
    </div>
    );
};

export default MyOrders;