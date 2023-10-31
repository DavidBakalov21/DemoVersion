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

`;

export default contact;

