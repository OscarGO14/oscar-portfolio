import React from 'react'

export const Home = ({ fly, cohete }) => {

    return (
        <div onClick={fly} className="home">
            <div class="scales" id="card">
                <img
                    id="cohete"
                    className={cohete}
                    height="50%"
                    src="https://www.flaticon.es/svg/static/icons/svg/610/610290.svg"
                    alt="cohete"
                />
            </div>
        </div>
    )
}



