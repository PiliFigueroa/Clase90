import React from 'react';
import './Cards.css'

const Cards = ({ user }) => {
    
    // const { name, age } = user

    // return(
    //     <div className='container'>
    //         <p>{name}</p>
    //         <p>{age}</p>
    //     </div>
    // )
    return(
        <>
            {user ?               
                <div className='container'>
                    <p>{user?.name}</p>
                    <p>{user?.age}</p>
                    <p>Le gusta maquetar? {user.likesCSS ? "Si" : "No"}</p>
                </div>
                 :
                <p>No hay usuario</p>
            }
        </>
    )
}

export { Cards }