import React from "react";
import styles from "./styles.module.css";
import { Link, useLocation } from "react-router-dom";
import { ROUTE } from "../../router";


export const Breadcrumb = ({onClick}: any) => {
  const crumbs = [];
  const currentPath = useLocation().pathname;

  if (currentPath === "/") {
    return null;
  }

  if (currentPath !== "/") {
    crumbs.push({ path: ROUTE.HOME, title: "Главная" });

    const pathArr = currentPath.split("/");

    if (pathArr[1] === "product-card") {
      crumbs.push({
        path: `${ROUTE.HOME}/${pathArr[2]}` as ROUTE,
        title: "Имя",
      });
    } else if (pathArr[1] === "catalog") {
      crumbs.push({ path: ROUTE.MOVIES, title: "Косметика и гигиена" });

      if (pathArr.length > 2) {
        crumbs.push({ path: currentPath as ROUTE, title: "Имя" });
      }
    }
  }


  const breadcrumbItems = crumbs.map((crumb, index) => {
    const isLast = index === crumbs.length - 1;
    const isCurrent = crumb.path === currentPath;

    return (
      <li
        key={index}
        className={
          isCurrent ? styles.item_active : styles.Item
        }
      >
        {isLast ? (
          <span className={isCurrent ? styles.active_text : styles.text}>
            {crumb.title}
          </span>
        ) : (
          <Link to={crumb.path} className={styles.breadcrumbLink}>
            {crumb.title}
          </Link>
        )}
      </li>
    );
  });



  return (
    <nav aria-label={styles.nav}>
        <ol className={styles.breadcrumb}>
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              {item}
              {index < breadcrumbItems.length - 1 && (
                <div onClick={onClick} className={styles.separator} />
              )}
            </React.Fragment>
          ))}
        </ol>
    </nav>
  );
};
