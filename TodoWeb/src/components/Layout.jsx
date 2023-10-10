import PropTypes from "prop-types";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faList, faGear } from "@fortawesome/free-solid-svg-icons";

const Title = {
  "Home": "Home",
  "todo": "Todo",
  "setting": "Setting",
};

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen m-0">
      <div className="sticky top-0 z-999 bg-blue-600 text-white p-5">
        <h1 className="text-2xl font-bold">{Title[location.pathname.slice(1)]}</h1>
      </div>
      <div className="flex-grow bg-gray-200 p-3">{children}</div>
      <div className="bg-blue-600">
        {/* <!-- Bottom Tab Menu --> */}
        <div className="flex justify-around items-center h-20">
            <Link className="flex flex-col m-3 pt-2 text-white" to={"/"}>
            <FontAwesomeIcon icon={faHouse} color="white" />
              <div>Home</div>
            </Link>
            <Link className="flex flex-col m-3 pt-2 text-white" to={"/todo"}>
            <FontAwesomeIcon icon={faList} color="white" />
              <div>Todo</div>
            </Link>
            <Link className="flex flex-col m-3 pt-2 text-white" to={"/setting"}>
              <FontAwesomeIcon icon={faGear} color="white" />
              <div>setting</div>
            </Link>
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
