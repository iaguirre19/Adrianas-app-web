import { v4 as uuidv4 } from "uuid";

const NavMenu = ({ items }) => {
  return (
    <>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span className={`nav-menu-${item.name}`}>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
