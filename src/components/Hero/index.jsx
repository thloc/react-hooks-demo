import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
  name: PropTypes.string,
};

Hero.defaultProps = {
  name: ''
}

function Hero(props) {
  const {name} = props;

  console.log('Hero render: ', name);

  return (
    <div>
      Hero name: {name}
    </div>
  );
}

// export default Hero; //-> stage cha thay doi lam render lai Hero.
export default React.memo(Hero); // check virtual DOM vaf real DOM co thay doi ko? (Do thi, animation, ...)