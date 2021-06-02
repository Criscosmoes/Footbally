import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGames } from "../../store/actions";

const NavBar = ({ fetchGames }) => {
  useEffect(() => {
    fetchGames();
  });

  return <div>Hey</div>;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { fetchGames })(NavBar);
