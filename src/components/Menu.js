import './Menu.css';
export default function Menu({ setSubmenu }) {
  return (
    <nav className="menu">
      <ul className="menu__elements">
        <li className="menu__element" onClick={() => setSubmenu('living')}>
          Бытовые условия
        </li>
        <li
          className="menu__element"
          onClick={() => setSubmenu('projectStudios')}
        >
          Кружки
        </li>
        <li className="menu__element" onClick={() => setSubmenu('medicine')}>
          Медицина
        </li>
        <li className="menu__element" onClick={() => setSubmenu('school')}>
          Школа
        </li>
        <li className="menu__element" onClick={() => setSubmenu('food')}>
          Питание
        </li>
      </ul>
    </nav>
  );
}
