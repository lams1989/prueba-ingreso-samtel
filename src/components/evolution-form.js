import { LitElement, html, css } from 'lit-element';

class EvolutionForm extends LitElement {
    static get properties() {
        return {
            evolution: { type: Object },
            showModal: { type: Boolean }
        };
    }

    constructor() {
        super();
        this.evolution = null;
        this.showModal = false;
    }

    static get styles() {
        return css`
          .evolution-form {
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            max-width: 600px;
            background-color: #f9f9f9;
          }

          h3 {
            color: #333;
          }

          label {
            display: block;
            margin: 10px 0;
            color: #555;
          }

          input[type="text"] {
            width: calc(100% - 22px);
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 4px;
          }

          input[type="checkbox"] {
            margin-right: 5px;
          }

          .modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.4);
          }

          .modal-content {
            background-color: #fefefe;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 500px;
            border-radius: 8px;
            text-align: center;
          }

          .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
          }

          .close:hover,
          .close:focus {
            color: black;
            text-decoration: none;
          }
        `;
    }

    _handleInputChange(e) {
        const { name, value } = e.target;
        this.evolution = { ...this.evolution, [name]: value };
    }

    _handleCheckboxChange(e) {
        this.showModal = e.target.checked;
    }

    _closeModal() {
        this.showModal = false;
    }

    render() {
        return html`
      ${this.evolution ? html`
        <div class="evolution-form">
          <h3>Edit Evolution: ${this.evolution.name}</h3>
          <form>
            <label>
              Name:
              <input type="text" name="name" .value="${this.evolution.name}" @input="${this._handleInputChange}">
            </label>
            <label>
              Type:
              <input type="text" name="type" .value="${this.evolution.type}" @input="${this._handleInputChange}">
            </label>
            <label>
              Image URL:
              <input type="text" name="image" .value="${this.evolution.image}" @input="${this._handleInputChange}">
            </label>
            <label>
              <input type="checkbox" @change="${this._handleCheckboxChange}">
              Is this Pokémon repeated?
            </label>
          </form>
        </div>
      ` : html`<p>Select an evolution to edit.</p>`}

      ${this.showModal ? html`
        <div class="modal">
          <div class="modal-content">
            <span class="close" @click="${this._closeModal}">&times;</span>
            <p>You can change the Pokémon at the nearest point.</p>
          </div>
        </div>
      ` : ''}
    `;
    }
}

customElements.define('evolution-form', EvolutionForm);
