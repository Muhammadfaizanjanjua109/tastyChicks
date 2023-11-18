import Footer from '@/Components/Footer'
import React from 'react'

function page() {
    return (
        <div>
            <div className='bg-headings'>
                <h1 className='fw-bold text-center p-4'>Contact us</h1>

            </div>

            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">First Name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Mobile No</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Date of Birth</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                        </div>


                    </div>


                 
                    <div className='col-lg-6'>


                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">I Agree to Term and Condition</label>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-end '><button className='btn btn-primary'>Submit</button></div>

            </div>

            <div className='container-fluid footerbg m-0 mt-5'>
          <Footer />

        </div>
        </div>
    )
}

export default page
