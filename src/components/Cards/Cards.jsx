import React from 'react';
import './Cards.css'

const Cards = ({ user }) => {
    
    const { name, age, img, lastname } = user

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
                    <img src={img ? img : "https://secure.gravatar.com/avatar/10432cb6335abedfea55593fe17c7e33?s=96&d=mm&r=g%22"} alt="Avatar" />
                    <p>{name} {lastname ? lastname : "Apellido"}</p>
                    <p>{age}</p>
                    <p>Le gusta maquetar? {user.likesCSS ? "Si" : "No"}</p>
                </div>
                 :
                <p>No hay usuario</p>
            }
        </>
    )
}

export { Cards }