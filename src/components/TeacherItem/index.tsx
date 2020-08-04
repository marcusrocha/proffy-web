import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/7602831?s=460&u=f5da5ea668ed08eb29cb566c4f6a0204a231e2d8&v=4" alt="Marcus Rocha"/>
        <div>
          <strong>Marcus Rocha</strong>
          <span>Software engineer</span>
        </div>
      </header>

      <p>
        Desenvolvedor de sistemas vivendo em Portugal.
        <br /><br />
        Entusiasta de tecnoligia, usa seu tempo livre para estar continuamente aprendendo coisas novas independente de stack.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 150,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;