const API_KEY = 'f55062a0787a756f794f9df58642d67a';
const API_DATABASE = 'https://api.themoviedb.org/3';

/*
-originais da netflix
-recomendado(trending)
-em alta(top rated)
-ação
-comédia
-terror
-romance
-documentários

*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_DATABASE}${endpoint}`);
    const json = await req.json();
    return json;

}

export default {
    getHomeList: async() => {
        return [
            {
               slug:'originals',
               title:'originais do Netflix',
               items: basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
        {
            slug:'trending',
            title:'Recomendados para voçê',
            items: basicFetch(`/trending/all/week?&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'toprated',
            title:'Em Alta',
            items: basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'action',
            title:'Acão',
            items: basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'comedy',
            title:'Comédia',
            items: basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'horror',
            title:'Terror',
            items: basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'romance',
            title:'Romance',
            items: basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'documentary',
            title:'Documentários',
            items: basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        },

    ];
    }
}