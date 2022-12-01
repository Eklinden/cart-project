import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.scss';

type animationType = {
  animation: string,
  setAnimation: any
}
const Header = ({animation, setAnimation}: animationType) => {
  const [aniSelected, setAniSelected] = useState<string>("")
  const [chartSelected, setChartSelected] = useState<string>("")

  function selectAni() {
    setAniSelected("selected")
    setChartSelected("")
  }
  function selectCharts() {
    setAniSelected("")
    setChartSelected("selected")
  }
  return (
    <header className="header">
      <section className='logo'>
        <p>NobelCharter</p>
      </section>

      <section className="menu-wrapper">
        <div className="menu-category">
          <p onClick={selectAni} className={aniSelected}>Animations</p>
          <nav className={aniSelected + " menu"}>
            <li className={animation === "fade-in" ? "activated": ""} onClick={(e)=> setAnimation("fade-in")}>Fade-In</li>
            <li className={animation === "slide-in" ? "activated": ""} onClick={(e)=> setAnimation("slide-in")}>Slide-In</li>
            <li className={animation === "rolldown" ? "activated": ""} onClick={(e)=> setAnimation("rolldown")}>Roll Down</li>
          </nav>
          <p onClick={selectCharts} className={chartSelected}>Charts</p>
          <nav className={chartSelected + " menu"}>
            <Link to="/">Home</Link>
            <Link to="/price" >Awardmoney per Year</Link>
            <Link to="/categoryNumber" >Awards per Category, select year</Link>
            <Link to="/categoryTotal" >Total awards per Category</Link>
            <Link to="/menWomen" >Men/Women awarded</Link>
            <Link to="/country" >Awardwinner per Country</Link>
            <Link to="/topTen" >Top 10 Nobelprice winners</Link>
          </nav>
        </div>
        <div className="select-background"></div>
      </section>
    </header>
  )
}

export default Header