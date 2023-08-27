import React from "react";
import { AiFillHome } from "react-icons/ai";
import "./BreadCrumb.css";
import { useLocation } from "react-router";
import { key } from "localforage";
import { Link } from "react-router-dom";

export const BreadCrumb = () => {
  const { pathname } = useLocation();
  const decodedPathname = decodeURIComponent(pathname);
  const breadcrumbs = decodedPathname.split("/");
  const breadcrumbMappings = {
    "dong-ho-nam": "Đồng hồ nam",
    "dong-ho-nu": "Đồng hồ nữ",
    "dong-ho-doi": "Đồng hồ đôi",
    "dong-ho-trang-tri": "Đồng hồ trang trí",
    "phu-kien-dong-ho": "Phụ kiện đồng hồ",
    "dong-ho-lobinni": "Đồng hồ LOBINNI",
    "dong-ho-kassaw": "Đồng hồ KASSAW",
    "dong-ho-lisheng": "Đồng hồ LISHENG",
    "dong-ho-lixing": "Đồng hồ LIXING",
    "dong-ho-border": "Đồng hồ BORDER",
    "dong-ho-teintop": "Đồng hồ TEINTOP",
  };
  return (
    <div className="breadcrumb-box">
      <div className="container">
        <div className="breadcrumb-content">
          <AiFillHome className="breadcrumb-icon" />
          <ul className="breadcrumb-list">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb}>
                {index === 0 ? (
                  <Link to={"/"} className="link-style">Trang chủ</Link>
                ) : index === breadcrumbs.length - 1 ? (
                  // Display non-clickable text for the last breadcrumb
                  breadcrumbMappings[breadcrumb] ||
                  breadcrumb
                    .replace(/-/g, " ")
                    .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
                ) : (
                  // Render a clickable link for other breadcrumbs
                  <Link to={`/${breadcrumb}`} className="link-style">
                    {breadcrumbMappings[breadcrumb] ||
                      breadcrumb
                        .replace(/-/g, " ")
                        .replace(/(^|\s)\S/g, (match) => match.toUpperCase())}
                  </Link>
                )}
                {index !== breadcrumbs.length - 1 && <span>/</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
