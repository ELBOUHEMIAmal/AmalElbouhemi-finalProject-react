import React from 'react';
import { Link } from "react-router";


const Sale = () => {
    return (
        <div className='py-[60px]'>
            <div className="flex items-center space-x-2 text-sm opacity-80 pl-3">
                <Link to={{ pathname: '/' }}>
              <span>Home</span>
                </Link>
              <span>/</span>
              <Link to={{ pathname:'/sale'}}>
              <span> Sale </span>
              </Link>
            </div>
           <div className='pl-[60px] py-5 text-4xl'> SEARCH</div>
        </div>
    );
};

export default Sale;