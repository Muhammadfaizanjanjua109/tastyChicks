'use client'
import Footer from '@/Components/Footer';
import { useState ,useEffect } from 'react';
import { Gallery } from 'react-grid-gallery'
import { toast } from 'react-toastify';
import Loaderimage from '../../assets//Images/XOsX.gif'
import Lightbox from "yet-another-react-lightbox";
import Image from 'next/image';
function Faizan(){
  const uri = process.env.REACT_LOCAL;
  const [ images,setImage]=useState([])
    const ImageList= [
        {
        
          width: 320,
          height: 174,
        
        },
        {
       
          width: 320,
          height: 212,
        
        },
        {
          width: 320,
          height: 212,
        },
        {
          width: 320,
          height: 213,
        },
        {
          width: 320,
          height: 183,
        },
        {
          width: 240,
          height: 320,
        },
        {
          width: 320,
          height: 190,
        },
        {
          width: 320,
          height: 148,
        },
        {
          width: 320,
          height: 213,
        },
        {
          width: 248,
          height: 320,
        },
        {
          width: 320,
          height: 113,
        },
        {
          width: 313,
          height: 320,
        },
        {
          width: 320,
          height: 213,
        },
        {
          width: 320,
          height: 194,
        },
        {
          width: 320,
          height: 213,
        },
        {
          width: 271,
          height: 320,
        },
        {
          width: 320,
          height: 213,
        },
        {
          width: 320,
          height: 213,
        },
        {
          width: 320,
          height: 213,
        },
        {
          width: 320,
          height: 213,
        },
        {
          width: 320,
          height: 179,
        },
        {
          width: 320,
          height: 215,
        },
        {
          width: 257,
          height: 320,
        },
        {
          width: 226,
          height: 320,
        },
      ];
      const slides = images.map(({ original, width, height }) => ({
        src: original,
        width,
        height,
    }));
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
        files: null,
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        files: '',
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
        const files = e.target.files[0];
        setFormData({
            ...formData,
            files:files
        });



    };
    const handleSubmit =async () => {
        // Check for required fields
        if (!formData.name || !formData.email || formData.files==null) {
            toast.error('All fields are required');
            return;
        }
        const formDataToSend = new FormData();

        // Append individual fields to FormData
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('files', formData.files);
    
        // Do something with the form data (e.g., log it)
        
        try {
          const response = await fetch('/api/faizan', {
            method: 'POST',
            body: formDataToSend,
          });
    
          if (response.ok) {
            console.log('Data submitted successfully');
            // Optionally reset form fields after successful submission
            setFormData({
              name: '',
              email: '',
              description: '',
              files: null,
            });
            const openModalButton = document.getElementById('close');
            openModalButton.click();
          } else {
            console.error('Failed to submit data');
          }
        } catch (error) {
          console.error('Error occurred while submitting data:', error);
        }
    };
    const [index, setIndex] = useState(-1);
    const [loading, setloading] = useState(false);
useEffect(()=>{
  getAllMemories()
},[])

const getAllMemories = async()=>{
  setloading(true)
  try {

    const response =  fetch('/api/faizan')
.then(data => {
  
let a= data.json().then((res)=>{

 let letba=res?.data.map((index ,il)=>( {
      src: `/uploads/${index.fileName}`,
      original: `/uploads/${index.fileName}`,
      width: il>=ImageList.length ? ImageList[il].width : 240,
      height:il>=ImageList.length ? ImageList[il].height : 320,
      tags: [
        { value: index?.name, title: index?.name },
      ],
      caption: index?.description,
    })
  )
 setImage(letba)
 setloading(false)
}) ;
})
   

    if (response) {
    console.log(response ,'response')
      // Optionally reset form fields after successful submission
    
    } else {
      console.error('Failed to submit data');
      setloading(false)
    }
  } catch (error) {
    console.error('Error occurred while submitting data:', error);
    setloading(false)
  }
}
    const handleClick = (index, item) => setIndex(index);
return(
    <>

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
    {formData.files ? (
        <div>
          <p className='text-success small'>Picture Uploaded successfully</p>
            <button className='btn btn-danger' onClick={() => setFormData({ ...formData, files: null })}>Remove</button>
        </div>
    ) : (
        <div>
            <input type="file" className="form-control" onChange={handleFileChange} />
            {errors.files && <div className="invalid-feedback">{errors.files}</div>}
        </div>
    )}
</div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id='close' data-bs-dismiss="modal">Close</button>
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

{loading ?  <div className='w-100 d-flex justify-content-center align-items-center container-fluid'>
        
        <Image src={Loaderimage}   alt='loading...'/>
      </div> :      <div className=''>

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
</div>}
       
</div>

<div className='container-fluid footerbg m-0 mt-5'>
          <Footer />

        </div>
</>
)
}
export default Faizan