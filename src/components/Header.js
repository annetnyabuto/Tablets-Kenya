import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'> {/*py means padding from top and bottom ps means padding from left and right*/}
        <div className='container-xxl'> 
            <div className='row'> 
                <div className='col-6'> 
                    <p className='text-white mb-0'> 
                        Free Shipping over $100 & Free Returns</p>
                </div>
                <div className='col-6'>
                    {/* text-end means text align right */}
                    <p className='text-end'> 
                        Hotline: <a href='tel: +1234567890'>+254712345678</a></p>
                </div>
            </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
            <div className='row align items center'>
                <div className='col-2'>
                      <h3> 
                        <Link to='/' className='text-white'>Tablets Kenya</Link>
                      </h3>
                </div>
                <div className='col-5'>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="basic-addon2" />
                        <span className="input-group-text" id="basic-addon2"><BsSearch /></span>
                    </div>
                </div>
            </div>
        </div>
      </header>

    </>

  )
}

export default Header