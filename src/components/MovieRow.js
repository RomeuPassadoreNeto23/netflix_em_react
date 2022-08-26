import React, { useEffect, useState } from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './MovieRow.css';

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400);
    const handlLeftArrow = () => {
        let  x = scrollX + 150;
        

      
        setScrollX(x)


    }
    const handlRightArrow = () => {

    }
    console.log(items)
    return (
        <div className="MovieRow" >
            <h2>{title}</h2>
            <div className="MovieRow--left" onClick={handlLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="MovieRow--right" onClick={handlRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                     marginLeft: scrollX,
                     width: items.results.length * 150
                   }}>
                    {items.results?.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--Item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
}

