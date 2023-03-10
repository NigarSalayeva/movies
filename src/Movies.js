import { useLocation } from 'react-router';

function Movies(props) {
    const location= useLocation();
    console.log(props,"props")
    console.log(location,"location")
    const item = location.state?.item
  return(
    <div class="lock2">
        <img  src={item.Poster_Link} alt='help'/>
        <p class="ser">{item.Series_Title+' ('+item.Released_Year+')'}</p>
              <p class="ser">IMDb Rating: ⭐ {item.IMDB_Rating} </p>
              <p class="ser">Genre: {item.Genre}</p>
              <p class="dir2">Overview:</p><p class="dir"> {item.Overview}</p>
              <p class="desc"><b>Runtime: 🕑 </b> {item.Runtime}</p>
              <p class="desc"><b>Certificate:</b> {item.Certificate}</p>
              <p class="desc"><b>Gross:</b> {item.Gross}</p>
              <p class="desc"><b>Meta score:</b> {item.Meta_score}</p>
              <p class="desc"><b>Number of Votes:</b> {item.No_of_Votes}</p>
              <p class="desc"><b>Director:</b> {item.Director}</p>
              <p class="desc"><b>Stars: </b>{item.Star1+', '+item.Star2+', '+item.Star3+', '+item.Star4}</p>
    </div>
  )
  }  
  
  export default Movies;