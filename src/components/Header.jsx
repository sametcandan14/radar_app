import planeLogo from "../assets/plane-logo.png";
const Header = () => {
  return (
    <header>
      <div>
        <img src={planeLogo} alt="" />

        <h2>Flight Radar</h2>
      </div>
      <h4>297 Flights Found</h4>
    </header>
  );
};

export default Header;
