import "../styles/bootstrap.min.css";
import "../styles/home.css";
import "../styles/index.css";
import "../styles/style.css";
import "../styles/carousel.min.css";
import PropTypes from "prop-types";
// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
