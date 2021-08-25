import getData from "../utils/getData";

const Home = async() => {
    const characters = await getData();
    const view = `
        <div class="Characters">
        
            ${characters.results.map(character => `
                <article class="Characters-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}" >
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}

        </div>
    `;
    // la funcion join elimina las comas que separan los elementos del arreglo generado
    return view;
}

export default Home;