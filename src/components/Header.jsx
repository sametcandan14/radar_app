import { useSelector } from "react-redux";
import planeLogo from "../assets/plane-logo.png";
const Header = () => {
  const store = useSelector((store) => store);
  return (
    <header>
      <div>
        <img src={planeLogo} alt="" />

        <h2>Flight Radar</h2>
      </div>
      <h4>
        {store.isLoading
          ? "Waiting For Flight Information"
          : `${store.flights.length} Flights Found`}
      </h4>
    </header>
  );
};

export default Header;
