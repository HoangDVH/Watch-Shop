import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./NavBar.css";
import "tippy.js/dist/tippy.css";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { UserAuth } from "../../context/AuthContext";

export const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  //Create login
  const { userLoggedIn, logoutUser,user } = UserAuth(); // Use the userLoggedIn and logoutUser from AuthContext

  //Create search
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    // Fetch search results using the searchQuery and update the state
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://sdtmlm-8080.csb.app/watches?q=${searchQuery}`
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="header-top-left">
            <a href="/lien-he" className="header-contact">
              <IoLocationSharp className="navbar-icon" />
              <span>Liên hệ</span>
            </a>
            <a href="tel:0382247888" className="header-hotline">
              <BsFillTelephoneFill className="navbar-icon" />
              <span>0337095980</span>
            </a>
          </div>
          <div className="search-box">
            <form className="search-form">
              <input
                type="text"
                name="search"
                className="txt-search"
                autoComplete="off"
                placeholder="Tìm kiếm sản phẩm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="btn-search">
                <AiOutlineSearch className="search-icon" />
              </button>
              <div className={`search-results ${searchQuery ? "visible" : ""}`}>
                {searchResults.map((result) => (
                  <Link
                    to={{ pathname: `/${result.categories}/${result.title}` }}
                    className="link-style"
                  >
                    <div className="search-result" key={result.id}>
                      <div className="search-result-img">
                        <img src={result.image} alt={result.title} />
                      </div>
                      <div className="search-result-content">
                        <h3 className="search-result-title">{result.title}</h3>
                        {
                          <div className="search-result-price">
                            {result.current_price.toLocaleString()}đ
                          </div>
                        }
                        {/* You can similarly handle other properties like current_price */}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </form>
            <div className="suggest-box"></div>
          </div>
          <div className="header-top-right">
            <Link
              to={{
                pathname: "/gio-hang",
              }}
              className="link-style"
            >
              <div className="cart-mini-box">
                <a href="#" className="cart-mini">
                  <AiOutlineShoppingCart className="navbar-icon-search" />
                  <span>Giỏ hàng</span>
                  <span className="count">{totalQuantity}</span>
                </a>
              </div>
            </Link>

            <div
              className="hamburger-menu"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <GiHamburgerMenu />
            </div>
          </div>
          <div className="header-login">
            {userLoggedIn ? (
              <div className="logged-user">
                <div className="logged-avatar">
                  <img 
                    src={user?.photoURL || "https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p74x74&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=MQXJ_lqnI0gAX848L9M&_nc_ht=scontent.fsgn5-14.fna&edm=AJqh0Q8EAAAA&oh=00_AfB_wCsZzpsvBNVxUNA0jTLH4OfIMZfpG-nl5oxwMQ4wuQ&oe=6512F0F8"}
                    alt="dsa"
                  ></img>
                  <div className="account-name">{user?.displayName}</div>
                </div>

                <div className="logged-popup">
                  <div className="my-account">Tài khoản của tôi</div>
                  <div className="logout-nav" onClick={logoutUser}>
                    Logout
                  </div>
                </div>
              </div>
            ) : (
              // If user is not logged in, show Login button
              <Link to="/login" className="link-style">
                <div className="login-nav">
                  <FiLogIn className="log-icon" />
                  Login
                </div>
              </Link>
            )}

            {/* ... rest of your component code ... */}
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container-logo">
          <div className="logo">
            <a href="/">
              <img
                src="https://thanhhungwatch.vn/uploads/pc_thanhhungwatch.vn_-_1.png"
                alt="dsa"
              ></img>
            </a>
          </div>

          <div className={isNavExpanded ? "main-menu expanded" : "main-menu"}>
            <ul>
              <li className="menu-item ">
                <Link to={"/"}>Trang chủ</Link>
              </li>
              <li className="menu-item menu-disable li-parent">
                <a href="">
                  THƯƠNG HIỆU
                </a>

                <ul className="sub-menu">
                  <li>
                    <Link to={"/lobinni"}>Đồng hồ LOBINNI</Link>
                  </li>
                  <li>
                    <Link to={"/kassaw"}>Đồng hồ KASSAW</Link>
                  </li>
                  <li>
                    <Link to={"/teintop"}>Đồng hồ TEINTOP</Link>
                  </li>
                  <li>
                    <Link to={"/border"}>Đồng hồ BORDER</Link>
                  </li>
                  <li>
                    <Link to={"/lixing"}>Đồng hồ LIXING</Link>
                  </li>
                  <li>
                    <Link to={"/lisheng"}>Đồng hồ LISHENG</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item ">
                <Link to={"/đồng hồ nam"}>Đồng hồ nam</Link>
              </li>
              <li className="menu-item ">
                <Link to={"/đồng hồ nữ"}>Đồng hồ nữ</Link>
              </li>
              <li className="menu-item ">
                <Link to={"/đồng hồ đôi"}>Đồng hồ đôi</Link>
              </li>
              <li className="menu-item ">
                <Link to={"/đồng hồ trang trí"}>Đồng hồ trang trí</Link>
              </li>
              <li className="menu-item ">
                <Link to={"/tin tức và sự kiện"}>Tin tức - Sự kiện</Link>
              </li>
              <li className="menu-item ">
                <Link to={"/phụ kiện đồng hồ"}>Phụ Kiện Đồng Hồ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
