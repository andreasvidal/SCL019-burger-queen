import logo from "../resources/logo.png"


export const Home =()=>{
  <main>
  <div className="container-img"> <img className="img-logo" alt="logo priencipal">{logo}</img>  </div>
    <div className="container">
      <h1 className="title-home">SPACEGRILL</h1>
      <p>Burger</p>
    </div>
    <div className="container-links">
    <link rel="stylesheet" href="./kitchen/kitchen.js" />
      <link rel="stylesheet" href="./waitress/waitress.js" />
    </div>
  </main>
}

