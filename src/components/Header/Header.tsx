import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <section className='logo'>
        <p>NobelChart</p>
      </section>
      <h2>Animations</h2>
      <div>
        <p>Fade-In</p>
        <p>Slide-In</p>
        <p>Roll Down</p>
      </div>
      <nav>
        <li>Home</li>
        <li>Awardmoney per Year</li>
        <li>Number of awards per kategori, select year</li>
        <li>Number of total awards per Kategory</li>
        <li>Men/Women awards</li>
        <li>Awardwinner per Country</li>
        <li>Top 10 Nobelprice winners</li>
      </nav>
    </header>
  )
}

export default Header