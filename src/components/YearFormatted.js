import React from 'react';
import {format} from "date-fns";

function YearFormatted({ dateString }) {
    const parseDate = (dateToParse) => {
        const year = dateToParse.slice(0, 4);
        const month = dateToParse.slice(4, 6) - 1;
        const day = dateToParse.slice(6, 8);
        return new Date(year, month, day);
    };

    const formattedYear = format(parseDate(dateString), 'MMMM dd, yyyy');
    return (
        <div  className="year card-text mb-3">{formattedYear}</div>
    );

}
export default YearFormatted;