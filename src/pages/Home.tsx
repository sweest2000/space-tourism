import Button from '../components/ui/button/Button';
import Navigation from '../components/ui/navigation/Navigation';

const Home = () => {
  return (
    <div className="page-wrapper home-page">
      <Navigation />
      <div className="mt-auto flex items-end justify-between gap-5 px-20">
        <div className="w-96">
          <h2 className="title-5">SO, YOU WANT TO TRAVEL TO</h2>
          <h2 className="title-1">SPACE</h2>
          <p className="plain-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Button></Button>
      </div>
    </div>
  );
};

export default Home;
