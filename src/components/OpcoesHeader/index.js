import "./style.css";

const opcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function Header() {
  return (
    <ul className="opcoes">
      {opcoes.map((opcao) => (
        <li className="opcao">
          <p>{opcao}</p>
        </li>
      ))}
    </ul>
  );
}

export default Header;
