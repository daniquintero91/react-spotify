const clientId = '51d4edac8f97451d9924b70a3ac671ed';
const clientSecret = '21b5e85a5e824f21a4ea6509864ffec3';

// private methods
const getSpotifyToken = async () => {

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });


    if (result.ok) {
        const data = await result.json();
        return {success: 'true', data: data.access_token}        
        
      } else {
       return {success:'false',error:'error'}
      }
}

const getGenres = async (token) => {

    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    if (result.ok) {
        const data = await result.json();
        console.log('desde la api, gen es '+typeof data.categories.items)
        return {success: 'true', data: data.categories.items}        
        
      } else {
       return {success:'false',error:'error'}
      }
}

const getPlaylistByGenre = async (token, genreId) => {

    const limit = 10;
    
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    if (result.ok) {
        const data = await result.json();        
        return {success: 'true', data: data.playlists.items}        
        
      } else {
       return {success:'false',error:'error'}
      }
}

export {
    getSpotifyToken,
    getGenres,
    getPlaylistByGenre
}