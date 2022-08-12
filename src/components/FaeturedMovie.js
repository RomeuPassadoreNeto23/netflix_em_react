import react from 'react';
import './FaeturedMovie.css';
export default ({ item }) => {
    console.log(item);

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
            <div className="featured--vetical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">2999</div>
                        <div className="featured--seasons">{item.number_of_seasons} tenporada{item.number_of_seasons !== 1 ?'s':''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--"></div>

                </div>

            </div>
        </section>
    );

}
