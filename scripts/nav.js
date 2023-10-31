function getNavTemplate() {
    return `
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
                        <a class="nav-link" href="#about">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  href="cart.html">Cart</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact us</a>
                    </li>
                </ul>
            </div>
        </nav>

`
}
