import './Submenu.css';

export default function Submenu({ submenu, setVideo }) {
  const submenuData = {
    projectStudios: [
      ['Искусство', '1'],
      ['Спорт', '2'],
      ['Экотерапия', '3'],
      ['Наука', '4'],
      ['Инновационные технологии', '5'],
    ],
    medicine: [
      ['Электролечение', '6'],
      ['Водолечение', '7'],
      ['Массаж', '8'],
      ['Теплолечение', '9'],
      ['Инновации', '10'],
    ],
    school: [
      ['Открытые уроки', '11'],
      ['Методы обучения', '12'],
    ],
    food: [
      ['Меню', '13'],
      ['Продукты', '14'],
    ],
    living: [
      ['Корпуса', '15'],
      ['Спальни', '16'],
      ['Душевые', '17'],
    ],
  };

  return (
    <nav className="submenu">
      <ul className="submenu__elements">
        {submenu &&
          submenuData[submenu].map((element, i) => (
            <li
              key={i}
              className="submenu__element"
              onClick={() => setVideo(element[1])}
            >
              {element[0]}
            </li>
          ))}
      </ul>
    </nav>
  );
}
