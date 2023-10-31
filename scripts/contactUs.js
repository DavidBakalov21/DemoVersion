

const contact = `
<style>
    .Card {
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

    .Hov:hover {
        color: yellow;
    }
</style>
<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
        <a class="navbar-brand" href="#">
            <img src="img/logo.png" alt="Icon" width="80">
            Fast Food delivery
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about" >About us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="cart.html">Cart</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#contact" style="color: yellow; margin-bottom:4%"
                        >Contact us</a>
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
<script type="module" src="scripts/router.js"></script>

`;

export default contact;