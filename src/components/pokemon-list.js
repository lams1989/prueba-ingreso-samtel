import { LitElement, html, css } from 'lit-element';

class PokemonList extends LitElement {
  static get properties() {
    return {
      pokemons: { type: Array },
      listPokemons: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      .pokemon-list {
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        max-width: 600px;
        margin: 0 auto;
        background-color: #f9f9f9;
      }

      h2 {
        color: #333;
      }

      img {
        width: 100px; /* Ajusta el ancho de la imagen */
        height: 100px; /* Ajusta el alto de la imagen */
        object-fit: cover; /* Asegura que la imagen mantenga su proporción dentro del contenedor */
        display: block;
        margin: 10px 0;
      }

      p {
        color: #555;
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      li {
        display: flex;
        align-items: center;
        margin: 10px 0;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      li:hover {
        background-color: #f1f1f1;
      }
    `;
  }

  constructor() {
    super();
    this.pokemons = [];
    this.listPokemons = true;
  }

  connectedCallback() {
    super.connectedCallback();
    fetch('http://localhost:3002/pokemon')
      .then(response => response.json())
      .then(data => {
        this.pokemons = data;
      });
    window.addEventListener('show-list', this._toggleList.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('show-list', this._toggleList.bind(this));
    super.disconnectedCallback();
  }

  _toggleList(event) {
    this.listPokemons = event.detail.show;
  }

  render() {
    return html`
      ${this.listPokemons ? html`
        <div class="pokemon-list">
          <p>Select a Pokémon to see details.</p>
          <ul>
            ${this.pokemons.map(pokemon => html`
              <li @click="${() => this._showDetails(pokemon)}">
                <img src="${pokemon.image}" alt="${pokemon.name}">
                <div>
                  <h2>${pokemon.name}</h2>
                  <p>${pokemon.type}</p>
                </div>
              </li>
            `)}
          </ul>
        </div>
      ` : html`<div></div>`}
    `;
  }

  _showDetails(pokemon) {
    const event = new CustomEvent('pokemon-selected', {
      detail: { pokemon },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.listPokemons = false;
  }
}

customElements.define('pokemon-list', PokemonList);
