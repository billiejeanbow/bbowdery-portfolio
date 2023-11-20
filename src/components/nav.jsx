import { NavLink } from "react-router-dom";

const nav = () => {
  return (
    <nav>
      <ul>
        {/* <li>
          <NavLink to="/home">Home</NavLink>
        </li> */}
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/projects">projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contacts</NavLink>
        </li>
        <li>
          <NavLink to="/livegame">Watch Highlights</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
