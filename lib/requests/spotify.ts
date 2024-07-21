import axios from 'axios';


export async function getSpotifyNowPlaying() {
  return axios.get<SpotifyData>('/api/spotify').then((res) => res.data);
}