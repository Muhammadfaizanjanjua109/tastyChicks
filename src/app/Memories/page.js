"use client"
import React, { useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import Lightbox from "yet-another-react-lightbox";
import { images } from './images';
import { Toast } from 'bootstrap';


const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
}));
function Memories() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pictures: [],
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Simple validation
        if (name === 'name') {
            setErrors({
                ...errors,
                name: value.length < 3 ? 'Name must be at least 3 characters long' : '',
            });
        }

        if (name === 'email') {
            setErrors({
                ...errors,
                email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address',
            });
        }
    };

    const handleFileChange = (e) => {
        const { files } = e.target;
        setFormData({
            ...formData,
            pictures: [...formData.pictures, ...files],
        });
    };

    const handleSubmit = () => {
        // Check for required fields
        if (!formData.name || !formData.email || !formData.pictures.length) {
            tost('All fields are required');
            return;
        }

        // Do something with the form data (e.g., log it)
        console.log(formData);
    };
    const [index, setIndex] = useState(-1);

    const handleClick = (index, item) => setIndex(index);

    return (
        <div className=''>


            <div class="modal fade" id="UploadMemory" tabindex="-1" aria-labelledby="UploadMemoryLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="UploadMemoryLabel">Upload Memory</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container mt-2">
                                <div className="mb-3">
                                    <label className="form-label">Name<span className='text-danger'>*</span></label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email<span className='text-danger'>*</span></label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Upload Pictures<span className='text-danger'>*</span></label>
                                    <input type="file" multiple className="form-control" onChange={handleFileChange} />
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-5'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center align-items-center flex-column'>
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <h1 className='fw-bold tommy text-center'>MEMORIES WITH US</h1>
                            <p className='IndieFont text-accent-orange fw-bold  text-center'>Share your memory with us!</p>

                            <p className='tommy'>If you’re interested in bringing the authentic taste of Greece to your local community, consider partnering with Souvlaki GR to start your own successful franchise.</p>
                            <button className='btn btn-primary bg-orange text-center' data-bs-toggle="modal" data-bs-target="#UploadMemory" > Upload Now</button>
                        </div>
                    </div>


                </div>
            </div>



            <div className=''>

                <Gallery
                    images={images}
                    onClick={handleClick}
                    enableImageSelection={false}
                />
                <Lightbox
                    slides={slides}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                />
            </div>
        </div>
    )
}

export default Memories
