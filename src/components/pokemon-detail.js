import { LitElement, html, css } from 'lit-element';
import './evolution-form.js';  // Asegúrate de importar el componente de formulario

class PokemonDetail extends LitElement {
  static get properties() {
    return {
      pokemon: { type: Object },
      selectedEvolution: { type: Object }
    };
  }

  constructor() {
    super();
    this.pokemon = null;
    this.selectedEvolution = null;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('pokemon-selected', this._onPokemonSelected.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('pokemon-selected', this._onPokemonSelected.bind(this));
    super.disconnectedCallback();
  }

  _onPokemonSelected(event) {
    this.pokemon = event.detail.pokemon;
  }

  _selectEvolution(evolution) {
    this.selectedEvolution = evolution;
  }

  _goBack() {
    const event = new CustomEvent('show-list', {
      detail: { show: true },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.pokemon = null;
    this.selectedEvolution = null;
  }

  static get styles() {
    return css`
      .detail-container {
        display: flex;
        gap: 20px;
        width: 100%;
      }

      .pokemon-detail {
        flex: 1;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f9f9f9;
      }

      .evolution-form-container {
        flex: 1;
      }

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        display: block;
        margin: 10px 0;
      }

      button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
      }
    `;
  }

  render() {
    return html`
      ${this.pokemon ? html`
        <div class="detail-container">
          <div class="pokemon-detail">
            <button @click="${this._goBack}">Back to List</button>
            <h2>${this.pokemon.name}</h2>
            <img src="${this.pokemon.image}" alt="${this.pokemon.name}">
            <p>Type: ${this.pokemon.type}</p>
            <h3>Evolutions:</h3>
            <ul>
              ${this.pokemon.evolutions.map(evolution => html`
                <li @click="${() => this._selectEvolution(evolution)}">
                  <img src="${evolution.image}" alt="${evolution.name}">
                  <h4>${evolution.name}</h4>
                  <p>Type: ${evolution.type}</p>
                </li>
              `)}
            </ul>
          </div>
          <div class="evolution-form-container">
            ${this.selectedEvolution ? html`
              <evolution-form .evolution="${this.selectedEvolution}"></evolution-form>
            ` : html`<p>Select an evolution to edit.</p>`}
          </div>
        </div>
      ` : html`<div></div>`}
    `;
  }
}

customElements.define('pokemon-detail', PokemonDetail);
