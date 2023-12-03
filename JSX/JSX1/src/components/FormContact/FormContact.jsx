import React from "react";
import AcountLayout from "../../Layout/AcountLayout";
function FormRegister(){
    return (
      <AcountLayout>
        <section className="mt-4">
          <form className='row'>
              <div className='col-md-4'>
                  <h3 className='display-6 fw-bolder mb-4'>Let us know about your
                    query.
                    </h3>
                    <p>
                    Fill out the form provided and we'll be in-touch within 48
                    hours. Also check out our <a href='#'>Contact Us </a>  page for more
                    options.
                    </p>
                 
              </div>
              <div className='col-md-8'>
                <div className='row mb-3'>
                  <div className='col-md-6'>
                      <input type="text" className='form-control' placeholder='First Name*' />
                  </div>
                  <div className='col-md-6'>
                  <input type="text" className='form-control' placeholder='Last Name*' />
                  </div>
                </div>
                
                <div className='row mb-3'>
                  <div className='col-md-6'>
                      <input type="text" className='form-control' placeholder='Email*' />
                  </div>
                  <div className='col-md-6'>
                  <input type="text" className='form-control' placeholder='Telephone Number*' />
                  </div>
                </div>

                <div className='row mb-3'>
                  <div className='col-md-12'>
                      <input type="text" className='form-control' placeholder='Company Name' />
                  </div>
                </div>

                <div className='row mb-3'>
                  <div className='col-md-12'>
                    <textarea className='form-control' cols="30" rows="10"></textarea>
                  </div>
                </div>
              </div>
          </form>
        </section>
      </AcountLayout>
        
    )
}

export default FormRegister