import React, {useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [modeldata, setModeldata] = useState([]);
 const fetchData = async () => {
   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
   console.log(response.data);
   setUsers(response.data);
  }
  useEffect(() => {
    fetchData();
  }, [])



  const handleClick = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resposne => resposne.json())
    .then(res => setModeldata(res))
  }


  return (
    <>
      <div className='container'>
        {users && users.map((e, index) => {
          return <>
            <div className="container text-center m-3 border border-primary rounded" key={index}>
              <div className="row align-items-start p-5">
                <div className="col fw-bold">
                  Hello Travels
                </div>
                <div className="col">
                  <div className='fw-bold'>Contact</div>
                  <div>{e.name}</div>
                </div>
                <div className="col">
                  <div className="fw-bold">City</div>
                  <div>{e.address.city}</div>
                </div>
                <div className="col">
                  <div className="fw-bold">Zipcode</div>
                  <div>{e.address.zipcode}</div>
                </div>
                <div className="col">
                  <button type='button' className='btn btn-danger' onClick={(user) => handleClick(e.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>
                </div>
              </div>
            </div>
            {/* Model */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="container text-center">
                      <div className="row align-items-start p-5">
                        <div className="col">
                          Hello Travels
                        </div>
                        <div className="col">
                          <div className='fw-bold'>Contact</div>
                          <div>{modeldata.name}</div>
                        </div>
                        <div className="col">
                          <div className="fw-bold">Email</div>
                          <div>{modeldata.email}</div>
                        </div>
                        <div className="col">
                          <div className="fw-bold">Website</div>
                          <div>{modeldata.website}</div>
                        </div>
                        <div className="col">
                          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Hide Details</button>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className='fw-bold'>
                        Website: {modeldata.website}
                      </div>
                      <div className='fw-bold'>
                        <span>Phone Number: {modeldata.phone}</span>
                        <span className='mx-5'>User Name: {modeldata.username}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        })}
      </div>
    </>
  );
}

export default App;
