import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import { Wrapper } from 'components/Wrapper/Wrapper';

export const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((pathname) => pathname);

  return (
    <Wrapper>
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={pathname}>
            <Link to={routeTo} className={styles.link}>{pathname}</Link>
            {!isLast && ' / '}
          </span>
        );
      })}
    </Wrapper>
  );
};
