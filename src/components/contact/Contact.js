import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-main d-flex bg-dark justify-content-center'>
      <div className="contact-block container-fluid container-lg h-100 p-0 py-lg-5 m-0 d-flex">
        <div className="contact-left h-md-50 w-lg-50 p-5 border border-2 border-light">
         
          <form action="#" className="w-100 h-100 text-light text-start d-flex flex-column justify-content-center dummy">
          <h1 className="display-5 hello">Get In Touch</h1>
               <p className="h6 lead para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptatibus maxime perspiciatis exercitationem non alias, harum eos illum animi, quia perferendis corporis debitis, enim dignissimos!</p>
               <div className="line1 d-flex flex-row my-sm-2 my-md-3">
                  <input type="text" className="form-control me-3" id-="name" placeholder="Full Name"/>  
                  <input type="email" className="form-control" id="email" placeholder="Email" />
               </div>

               <div className="line2 d-flex my-sm-2 my-md-3">
                 <input type="text" className="form-control me-3" id="Phone" placeholder="Phone" />
                 <input type="date" className="form-control" id="date" placeholder="Date" />
               </div>

               <div className="line3 my-sm-2 my-md-3">
                 <textarea name="text area" id="textarea" cols="5" rows="1" className="form-control"></textarea>
               </div>

               <button className="btn btn-primary col-12 py-1 py-md-3">Submit</button>
          </form>



        </div>

        <div className="contact-right h-md-50 w-lg-50 p-5 d-flex flex-column justify-content-center border border-2 border-light text-light">
          <h1 className="display-5 hello text-start mb-4">Office Address</h1>
          <p className="h6 lead text-start para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores esse laboriosam officiis unde nesciunt! Voluptatum illo soluta odit accusamus eligendi tempore omnis, et quod, suscipit unde quae asperiores eaque minus.</p>

          <div className="icon-set mt-5 fs-5 text-light">
            <div className="icon1 d-flex">
            <i class="bi bi-geo-alt-fill me-3"></i>
            <p>101 Queen Street, Auckland, NZ</p>
            </div>
            <div className="icon1 d-flex">
            <i class="bi bi-telephone-fill me-3"></i>
            <p>+64 4 5247845 0</p>
            </div>
            <div className="icon1 d-flex">
            <i class="bi bi-envelope-fill me-3"></i>
            <p>hunter@wwe.com</p>
            </div>
            <div className="icon1 d-flex">
            <i class="bi bi-phone-fill me-3"></i>
            <p>+64 1234567890</p>
            </div>
          
          </div>

        </div>

      </div>
       
      
    </div>
  )
}

export default Contact
