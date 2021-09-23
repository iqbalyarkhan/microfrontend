import React, { useState } from 'react';

const style = {
    width: '150px',
    height: '150px',
    backgroundColor: 'blue',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
    boxShadow: '10px 1px 5px -7px rgba(0,0,0,0.61)',
    textAlign: 'center',
};

const CalendarCard = ({ dayOfDecember }) => {
    const [isClicked, setIsClicked] = useState(false);
    var date1 = new Date();
    var date2 = new Date("12/25/2021");
    const daysUntilChristmas = Math.round((date2.getTime() - date1.getTime())/ (1000 * 3600 * 24));
    return (
        <div onClick={() => setIsClicked(!isClicked)} style={style}>
            {isClicked ? (
                <p>{daysUntilChristmas} days until Christmas 🎅</p>
            ) : (
                <p>{dayOfDecember}</p>
            )}
        </div>
    );
};
export default CalendarCard;