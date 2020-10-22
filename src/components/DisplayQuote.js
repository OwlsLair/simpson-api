import React from 'react';

const DisplayQuote = ({quote}) =>
    <div className="quoteCard">
        <img src={quote[0].image} alt={quote[0].character} />
        <h3 className="character">{quote[0].character}</h3>
        <p><i>"{quote[0].quote}"</i></p>
    </div>

export default DisplayQuote;