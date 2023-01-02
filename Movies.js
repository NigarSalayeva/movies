import { useLocation } from 'react-router';

function Movies(props) {
    const location= useLocation();
    console.log(props,"props")
    console.log(location,"location")
    const item = location.state?.item
  return(
    <div>
        <img src={item.Poster_Link} alt='help'/>
        <p>{item.Series_Title}</p>
        <p>({item.Released_Year})</p>
    </div>
  )
  }  
  
  export default Movies;