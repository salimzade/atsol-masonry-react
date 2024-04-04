import React, {
  CSSProperties,
  Children,
  FC,
  ReactElement,
  ReactNode,
  cloneElement,
  useMemo
} from "react";

import { useWindowWidth } from "../hooks/grid.hooks";

interface ColumnsBreakPoints {
  [key: number]: number;
}

interface GridProps {
  columnsBreakpoints?: ColumnsBreakPoints;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}
const defaultColumnsCount: number = 1;

export const MasonryGrid: FC<GridProps> = (props) => {
  const {
    columnsBreakpoints = {
      320: 1,
      576: 2,
      768: 3,
      992: 3
    },
    children,
    className,
    style
  } = props;

  const windowWidth: number = useWindowWidth();

  const columnsCount: number = useMemo(() => {
    const breakPoints: number[] = Object.keys(columnsBreakpoints)
      .map(Number)
      .sort((a, b) => a - b);
    let count: number =
      breakPoints.length > 0
        ? columnsBreakpoints[breakPoints[0]]
        : defaultColumnsCount;

    breakPoints.forEach((breakPoint) => {
      if (breakPoint < windowWidth) {
        count = columnsBreakpoints[breakPoint];
      }
    });

    return count;
  }, [windowWidth, columnsBreakpoints]);

  return (
    <section
      className={className ? className : "masonry-grid"}
      style={style ? style : {}}
    >
      {Children.map(children, (child, index) =>
        cloneElement(child as ReactElement<any>, {
          key: index,
          columnsCount: columnsCount
        })
      )}
    </section>
  );
};

MasonryGrid.defaultProps = {
  columnsBreakpoints: {
    320: 1,
    576: 2,
    768: 3,
    992: 3
  },
  className: "masonry-grid",
  style: {}
};
