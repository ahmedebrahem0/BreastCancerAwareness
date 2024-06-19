import React from 'react'

export default function DashBord() {
    return (
        <>
    <div className="container my-5">
    <div className="div d-flex align-items-center justify-content-between">
        <h3 className='my-5'>#All patients :</h3>
        <a href='/' className="btn btn-outline-primary color-white m-3">Add New User</a>
    </div>
    <div>
 <table className="table table-striped">
        <thead className='thead'>
        <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Phone</th>
        </tr>
        </thead>
        <tbody className='tbody'>
        <tr>
            <td>#id</td>
            <td>#Name</td>
            <td>#Email</td>
            <td>#Password</td>
            <td>#Phone</td>
            
            <td>
            <a className="btn btn-success" href="/">Update</a></td>
            <td>
            <a className="btn btn-danger " href="/">Delete</a>
            </td>                        
           
        </tr>
        </tbody>
    </table>
    </div>            

    <a href="/" className="btn btn-outline-warning color-white m-3 ms-auto">logout</a>
    </div>

        </>
    )
}
