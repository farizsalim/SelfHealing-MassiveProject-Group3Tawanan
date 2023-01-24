import { NavLink } from "react-router-dom";
import { ARTIKEL } from "../routes";
import "./Blogcard.css";

const Blogcard = ({imgblog, editor, title, histori}) => {
  return (
    <section>
      <NavLink id="card-link" to={ARTIKEL}>
        <div className="blog-card">
          <img src={imgblog} alt="imgblog" />
          <div className="blogcard-body">
            <p className="text-cardblog">{editor}</p>
            <h4 className="title-cardblog">{title}</h4>
            <p className="text-cardblog">{histori}</p>
          </div>
        </div>
      </NavLink>
    </section>
  )
}

export default Blogcard;