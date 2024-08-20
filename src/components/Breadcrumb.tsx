import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  link: string;
}

interface BreadcrumbProps {
  path: Array<BreadcrumbItem>;
}

const Breadcrumb = ({ path = [] }: BreadcrumbProps) => {
  const [pathLength, setPathLength] = useState<number>(0);

  useEffect(() => {
    setPathLength(path.length);
  }, [path]);

  return (
    <React.Fragment>
      <div className="flex gap-2.5 font-medium">
        <span>
          <Link to="/dashboard" className="hover:text-darkGray">
            Dashboard
          </Link>{' '}
          /
        </span>
        {path.map((item, index) => (
          <span key={index}>
            <Link
              className={
                pathLength - 1 === index
                  ? 'text-anchor hover:text-opacity-80'
                  : 'hover:text-darkGray'
              }
              to={item.link}
              data-testid={`${item.name}-breadcrumb`}
            >
              {item.name}
            </Link>
            {pathLength - 1 === index ? null : ' /'}
          </span>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Breadcrumb;
