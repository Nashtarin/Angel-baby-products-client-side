import React, { useEffect, useState } from 'react';
import SingleUser from './SingleUser';

const ManageAllOrders = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch('https://secure-garden-78114.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const handleDelete = id => {
        const url = `https://secure-garden-78114.herokuapp.com/users/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Are you sure you want to delete?')
                    const remaining = users.filter(users => users._id !== id)
                    setUsers(remaining)

                }

            })

    }
    const handleUpdate = id => {
        const url = `https://secure-garden-78114.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    window.location.reload()



                }
            })

    }
    return (
        <div>
            <h1 className="text-primary">All Orders</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5">

                {console.log(users)}
                {users?.map(user => <SingleUser
                    key={user._id}
                    user={user}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}>
                </SingleUser>)}

            </div>

        </div>
    );
};

export default ManageAllOrders;