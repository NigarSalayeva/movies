import { useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

function Main() {
  const {Series_Title}=useParams
  const [items, setItems]=useState([])
  useEffect(()=>{
    const getContent= async()=>{
      const res=await fetch(
        "http://localhost:3004/posts?_page=1&_limit=20"
      );
      const data=await res.json();
      setItems(data)
    }

    getContent()
  },[])

  const getFetch= async(CurrentPage)=>{
    const res=await fetch(
      "http://localhost:3004/posts?_page="+ CurrentPage +"&_limit=20"
    );
    const data=await res.json();
    return data
  }

  console.log(items)
  const handlePageChange=async(data)=>{
    let CurrentPage= data.selected + 1

    const ContentFromServer = await getFetch(CurrentPage)
    
    console.log(data.selected)
    
    setItems(ContentFromServer)
  }

  const goToPage=()=>{
    console.log(goToPage)
  }
  return(
    <div id="center" >
      <div id="centered">
    {items.map( (item) => {
      return(
        <Link to={"/"+item.Series_Title} state={{ item: item}}>   
        
        <div className='lock' key={item.id} onClick={()=>goToPage(item.Series_Title)}>
           
            <p class="id">{item.id}</p>
            <img class="nav-icon" src={item.Poster_Link} alt='help'/>
            <div class='block'>
              <p class="ser">{item.Series_Title+' ('+item.Released_Year+')'}</p>
              <p class="dir">{item.Director}</p>
              <p class="desc">{item.Star1+', '+item.Star2+', '+item.Star3}</p>
            </div>
        </div>
        </Link>
        )
      })
    }
      <div id='lock-of'>
      <ReactPaginate 
      previousLabel={'previous'}
      nextLabel={'next'}
      pageCount={10}
      marginPagesDisplayed={2}
      onPageChange={handlePageChange}
      containerClassName={'pagination'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      />
      </div>
      </div>
    </div>
    
  )
  }
  
  export default Main;