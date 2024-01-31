import { Form, Link } from "react-router-dom";
import classes from "../../pages/product/home.module.css";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as CategeAction from "../../redux/action/category-action";
import Header from "../layout/Header";
import Cart from "../cart/Cart";

function MainNavigation() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);

  const { token } = useSelector((state) => state.auth);

  const getAllCategoriess = async () => {
    await dispatch(CategeAction.getAllCategories());
  };

  useEffect(() => {
    getAllCategoriess();
  }, []);

  return (
    <>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <div className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <Link
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/"
                end
              >
                All Products
              </Link>
            </li>
            {/* {categories.map((item) => (
              <li key={item}>
                <Link
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  to={`/product/${item}`}
                >
                  {item}
                </Link>
              </li>
            ))} */}
            <li>
              <Link
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/electronics"
              >
                electronics
              </Link>
            </li>
            <li>
              <Link
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/jewelery"
              >
                jewelery
              </Link>
            </li>
            <li>
              <Link
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/menclothing"
              >
                men's clothing
              </Link>
            </li>
            <li>
              <Link
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/womenclothing"
              >
                women's clothing
              </Link>
            </li>
            <li>
              {
                <Link
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  to="/auth"
                ></Link>
              }
            </li>
            {/* <li>
            {
              <Link
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/auth"
              >
                
              </Link>
            }
          </li>
          <li>
            {
              <Link
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/auth"
              >
               
              </Link>
            }
          </li> */}
            {!token && (
              <li>
                <Link
                  to="/auth"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Authentication
                </Link>
              </li>
            )}
            {token && (
              <li>
                <Form action="/logOut" method="post">
                  <button>LogOut</button>
                </Form>
                {/* <Form action="logout" method="post">
                <button>Logout</button>
              </Form> */}
              </li>
            )}
          </ul>
          {/* <ul className={classes.list}>
          <Link
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            to="/"
          >
            Home
          </Link>
          <Link
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/category"
          >
            Category
          </Link>
        </ul> */}
        </nav>
      </div>
      <div
        style={{
          width:"100%", height:"1px", background:"#eee",marginBottom:"15px"
        }}
      />
    </>
  );
}

export default MainNavigation;
