const exports = require("webpack");

const Home = () => {
    const view = `
        <div class="Characters">
            <article class="Characters-item">
                <a href="#/1/">
                    <img src="image" alta="name" >
                    <h2>Name</h2>
                </a>
            </article>
        </div>
    `;

    return view;
}

export default Home;