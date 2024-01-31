import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Search from "../../components/search/Search";
import { useDispatch } from "react-redux";
import * as Action from "../../redux/action/product-action";


function Header(props) {
  const dispatch = useDispatch();

  const searchItem = (term) => {
    dispatch(Action.productSearch(term));
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>SHOP</h1>
        <Search searchItems={searchItem} />

        <HeaderCartButton onClick={props.onShowCart} />
        {/* <HeaderCartButton /> */}
      </header>
    </Fragment>
  );
}

export default Header;
