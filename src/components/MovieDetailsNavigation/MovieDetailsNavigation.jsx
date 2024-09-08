import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../MovieDetailsNavigation/MovieDetailsNavigation.module.css";

export default function MovieDetailsNavigation() {
  function createNavLinkClass(props) {
    return clsx(css.link, props.isActive && css.active);
  }

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Additional information</p>
      <ul className={css.list}>
        <li>
          <NavLink to="cast" className={createNavLinkClass}>
            Cast
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="reviews" className={createNavLinkClass}>
            Reviews
          </NavLink>{" "}
        </li>
      </ul>
    </div>
  );
}
