import { useLocation } from 'react-router';

function Movies(props) {
    const location= useLocation();
    console.log(props,"props")
    console.log(location,"location")
    const item = location.state?.item
  return(
    <div>
        <img src={item.Poster_Link} alt='help'/>
        <p class="ser">{item.Series_Title+' ('+item.Released_Year+')'}</p>
              <p class="ser">IMDb Rating: {item.IMDB_Rating}</p>
              <p class="dir">Overview: {item.Overview}</p>
              <p class="dir">Genre: {item.Genre}</p>
              <p class="dir">Runtime: {item.Runtime}</p>
              <p class="dir">Director: {item.Director}</p>
              <p class="desc">{item.Star1+', '+item.Star2+', '+item.Star3}</p>
    </div>
  )
  }  
  
  export default Movies;