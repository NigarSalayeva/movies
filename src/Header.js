import './Header.css';
function Header() {
    return (
    <div id='header'>
      <nav class="sticky">
  {/* <input type="checkbox" id="check"> */}
  {/* /<label for="check" class="checkbtn">
    <i class="fas fa-bars"></i>
  </label>  */}
  <label class="logo">Home Page</label>
  <ul class="a">
    <li><a class="n" href="App.js" target="_blank">Movies page</a></li>
    <li><a class="n" href="https://github.com/NigarSalayeva" target="_blank">Git-Hub Account</a></li>
    <li><a class="n" href="https://nigarsalayeva.github.io/nsalayeva.github.io/" target="_blank">Git-Hub Page</a></li>

  </ul>
</nav>
    </div>
    );
  }
  
  export default Header;