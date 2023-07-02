import Navigation from '../components/ui/navigation/Navigation';

const Destination = () => {
  // const planets = data.planets.smap((item) => item.name);

  return (
    <div className="page-wrapper">
      <Navigation />
      <div>
        <div className="img"></div>
        <div className="desc">
          <div className="toggle-group">
            {/* <ToggleGroup names={planets} /> */}
          </div>
          <div className="info"></div>
          <hr />
          <div className="extra-info"></div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
