'use client';
import { useRouter } from "next/navigation"
import './page.css'
export default function homePage(){
    const router = useRouter();
    return(
        <>
       <header>
        <h2>Project</h2>
       <a href="./">Home</a>
       <a href="./product">Product</a>
       <a href="./card">Cart</a>
       <a href="./profile">Profile</a>
<button className="custom-btn btn-1" onClick={() => router.push('./login')}>Sign up</button>
    </header>
    <section>
      <h1>Create user interfaces <br />from components</h1><br />
      <p className="p1">React lets you build user interfaces out of individual pieces called components. <br />Create your own React components like Thumbnail, LikeButton, and Video. <br /> Then combine them into entire screens, pages, and apps.</p>
     <div className="inputbox">
      <input type="text" required="required"/>
      <span>Search</span>
      <i></i>
     </div>
      <img className="section-foto" src="https://antool-landing.vercel.app/images/about-section-image.png" alt="" />
    </section>
    <div className="card-desert">
    <div className="card-3">
                    <img className="card-photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                    <p className="p0">React JS<br />
                    </p>
                    <p className="p-size">1шт</p>
                    <div className="card-2">
                    <p className="p6">
                    <strong>Цена:</strong>
                  </p>
                  <a href="/card">
                  <img className="card-foto" src="/icon4.svg" alt="" />
                  </a>
                    </div>
                </div>
                <div className="card-3">
                    <img className="card-photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="" />
                    <p className="p0">Javascript<br />
                    </p>
                    <p className="p-size">1шт</p>
                    <div className="card-2">
                    <p className="p6">
                    <strong>Цена:</strong>
                  </p>
                  <a href="/card">
                  <img className="card-foto" src="/icon4.svg" alt="" />
                  </a>
                    </div>
                </div>
                <div className="card-3">
                    <img className="card-photo" src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" />
                    <p className="p0">Next JS<br />
                    </p>
                    <p className="p-size">1шт</p>
                    <div className="card-2">
                    <p className="p6">
                    <strong>Цена:</strong>
                  </p>
                  <a href="/card">
                  <img className="card-foto" src="/icon4.svg" alt="" />
                  </a>
                    </div>
                </div>
                <div className="card-3">
                    <img className="card-photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="" />
                    <p className="p0">Next JS<br />
                    </p>
                    <p className="p-size">1шт</p>
                    <div className="card-2">
                    <p className="p6">
                    <strong>Цена:</strong>
                  </p>
                  <a href="/card">
                  <img className="card-foto" src="/icon4.svg" alt="" />
                  </a>
                    </div>
                </div>  
    </div>
    <div className="card-desert-2">
    <div className="card-3">
                    <img className="card-photo" src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
                    <p className="p0">HTML<br />
                    </p>
                    <p className="p-size">1шт</p>
                    <div className="card-2">
                    <p className="p6">
                    <strong>Цена:</strong>
                  </p>
                  <a href="/card">
                  <img className="card-foto" src="/icon4.svg" alt="" />
                  </a>
                    </div>
                </div>  
                <div className="card-3">
                    <img className="card-photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
                    <p className="p0">CSS<br />
                    </p>
                    <p className="p-size">1шт</p>
                    <div className="card-2">
                    <p className="p6">
                    <strong>Цена:</strong>
                  </p>
                  <a href="/card">
                  <img className="card-foto" src="/icon4.svg" alt="" />
                  </a>
                    </div>
                </div>  
                <div className="card-3">
                    <img className="card-photo" src="https://avatars.githubusercontent.com/u/18133?s=280&v=4" alt="" />
                    <p className="p0">Git<br />
                    </p>
                    <p className="p-size">1шт</p>
                    <div className="card-2">
                    <p className="p6">
                    <strong>Цена:</strong>
                  </p>
                  <a href="/card">
                  <img className="card-foto" src="/icon4.svg" alt="" />
                  </a>
                    </div>
                </div>  
                <div className="card-3">
                    <img className="card-photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="" />
                    <p className="p0">Git<br />
                    </p>
                    <p className="p-size">1шт</p>
                    <div className="card-2">
                    <p className="p6">
                    <strong>Цена:</strong>
                  </p>
                  <a href="/card">
                  <img className="card-foto" src="/icon4.svg" alt="" />
                  </a>
                    </div>
                </div>  
    </div>
        <div className="card-section">
          <h1 className="h1">A Price To Suit Everyone  </h1>
            <h2 className="h2">The products here are of good quality and very affordable. <br /> 80 percent of people choose us and are satisfied. <br /> Leave us a comment for more information.
            </h2>
        <input type="text" name="text" class="search-bar" placeholder="Type something"/>
        </div>
      <footer>
     <div className="container">
     <h3>Contact <br />
     +998
       </h3>
       <h3>Categories <br />
       Development <br />
       Design <br />
       </h3>
     <h3>Email <br />test@gmail.com</h3>
     <h3>Address <br />
     Orlando, FL, USA
      </h3>
     </div>
      </footer>
        </>
    )
}