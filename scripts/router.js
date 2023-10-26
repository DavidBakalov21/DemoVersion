const contact = `
<style>
.Card{
    width: 50%;
   
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;
    background-color: rgb(220, 53, 69);
    border-radius: 10px;
 }
h2 {
    text-align: center;
    margin-bottom: 30px;
}

h4 {
    margin-top: 20px;
}

a {
    color: black;
    text-decoration: none;
}
.Hov:hover{
    color: yellow;
}
</style>
<header>
<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <a class="navbar-brand" href="#">
        <img src="img/logo.png" alt="Icon" width="80">
        Fast Food delivery
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"   onclick="navItemClick('/about')">About us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="cart.html">Cart</a>
            </li>
          
            <li class="nav-item">
                <a class="nav-link" href="#" style="color: yellow; margin-bottom:4%" onclick="navItemClick('/contact')">Contact us</a>
            </li>
        </ul>
    </div>
</nav>
</header>  


<main style="display: flex; justify-content:center">

<div class="Card">
    <h2>Contact Us</h2>

    <h4>Our Address</h4>
    <p class="Hov">1234 Spaska Street,<br> Kyiv City, Ukarain</p>

    <h4>Phone</h4>
    <p class="Hov">+308954093</p>

    <h4>Email</h4>
    <p><a class="Hov">fastDel@gmail.com</a></p>

    <h4>Social Media</h4>
    <p>
        <a class="Hov">Facebook</a><br>
        <a class="Hov">Twitter</a><br>
        <a class="Hov">Instagram</a><br>
        <a class="Hov">LinkedIn</a>
    </p>
</div>

</main>
<script src="scripts/router.js"></script>

`;

const about = `
<link rel="stylesheet" type="text/css" href="styles/AboutStyle.css"/>
<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
        <a class="navbar-brand" href="#">
            <img src="img/logo.png" alt="Icon" width="80">
            Fast Food delivery
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#" style="color: yellow; "  onclick="navItemClick('/about')">About us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="cart.html">Cart</a>
                </li>
              
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="navItemClick('/contact')">Contact us</a>
                </li>
            </ul>
        </div>
    </nav>
</header>
<main class="main">
    <div class="CardAbout">
        <h1 class="Par">About Fast Delivery</h1>
        <p class="Par">Founded in 2023, Fast delivery quickly became a top food delivery service. We work with big names like McDonald's, KFC, and Domino's to bring you your favorite meals.</p>
    </div>
    
    <div class="CardAbout">
        <h2 class="Par">Our Story</h2>
        <p class="Par">We started small in Kyiv and now deliver across the country. We use technology to make getting your favorite fast food easy. We've served over a million happy customers and are still growing.</p>
    </div>
    
    <div class="CardAbout">
        <h2 class="Par">Why Choose Us</h2>
        <p class="Par">We do more than just deliver. We promise fast and accurate deliveries with a focus on trust and quality. Our tech helps with order tracking and our partnerships give you many food options.</p>
    </div>
    
    <div class="CardAbout">
        <h2 class="Par">Our Goals</h2>
        <p class="Par"><b>Mission:</b> To bring joy with every meal, focusing on fast delivery and great service.</p>
        <p class="Par"><b>Vision:</b> To be everyone's first choice for fast-food delivery because of our top-notch service and wide food selection.</p>
    </div>
    
    <div class="CardAbout">
        <h2 class="Par">Come Along With Us</h2>
        <p class="Par">We're not just delivering food, we're building a community. If you're a customer, restaurant, or want to join our team, come with us on this journey. Let's change fast-food delivery together.</p>
        <button class="btn btn-danger" style="color: yellow; margin-bottom:4%"><a class="LInk" style="color: yellow;" href="#" onclick="navItemClick('/contact')">Join us</a></button>
    </div>



    <div  class="CardAbout">
        <h2>Our team:</h2>
        <div class="RowImages" >

       <div class="teamImage">
        <img src="img/NPC.png"/>
        <p style="text-align: center;">NPC #1</p>
       </div>
       <div class="teamImage midImage" >
        <img src="img/NPC.png"/>
        <p style="text-align: center;">NPC #2</p>
       </div>
       <div class="teamImage">
        <img src="img/NPC.png"/>
        <p style="text-align: center;">NPC #3</p>
       </div>
    </div>



    <div class="RowImages">

        <div class="teamImage">
         <img src="img/NPC.png"/>
         <p style="text-align: center;">NPC #4</p>
        </div>
        <div class="teamImage midImage">
         <img src="img/NPC.png"/>
         <p style="text-align: center;">NPC #5</p>
        </div>
        <div class="teamImage">
         <img src="img/NPC.png"/>
         <p style="text-align: center;">NPC #6</p>
        </div>
     </div>
    </div>

</main>
<script src="scripts/router.js"></script>
`;

const routes = {
  "/about": about,
  "/contact": contact,
};
window.addEventListener("popstate", (event) => {
  console.log(window.location);
  root.innerHTML = routes[window.location.pathname];
});

let root = document.getElementById("root");

function navItemClick(route) {
  window.history.pushState({}, route, window.location.origin + route);
}
