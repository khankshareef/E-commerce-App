import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Timer.css';

function Timer() {
    const [time, settime] = useState(new Date().toLocaleTimeString());
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            settime(new Date().toLocaleTimeString());
        }, 1000);

        // Fetch the stored email from localStorage
        const email = localStorage.getItem('userEmail');
        if (email) {
            setUserEmail(email);
        }

        return () => clearInterval(timer);
    }, []);

    // Check if the logged-in user is the admin
    const isAdmin = userEmail === 'khankshareef@gmail.com';

  return (
    <div className='Timer'>
        <div className='content'>
            <div className='summers'>
                <span><h2>Get -50% from </h2></span>
                <span><h2 className='summer'>Summer Collection</h2></span>
            </div>
            <div className='timer'>
                <span className='time'><h1 className='time'>404: {time}</h1></span>
            </div>

            <button style={{ bottom: '0px', backgroundColor: 'black', color: 'white', width: '150px', height: '50px' }}>
                Shop Now <ArrowForwardTwoToneIcon className='arrow'/>
            </button>

            {/* Only show the "Add Product Here" button if the user is an admin */}
            {isAdmin && (
                <Link to='/addingdata'>
                    <button className='add-product' style={{ marginLeft: '20px', backgroundColor: 'black', color: 'white', width: '150px', height: '50px' }}>
                        Add Product Here
                    </button>
                </Link>
            )}
        </div>
    </div>
  );
}

export default Timer;
