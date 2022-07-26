import { ThreeCircles } from 'react-loader-spinner';
const Loader = () => {
  return (
    <ThreeCircles
      color="orange"
      height={110}
      width={110}
      ariaLabel="three-circles-rotating"
    />
  );
};

export default Loader;
