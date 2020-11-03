import React from 'react'
import img from './assets/cohete.svg'
export const Home = ({ cohete }) => {

    return (
        <div className="home">
            <div class="scales" id="card">
                <img
                    id="cohete"
                    className={cohete}
                    height="40%"
                    src={img}
                    alt="cohete"

                />
            </div>
        </div>
    )
}



