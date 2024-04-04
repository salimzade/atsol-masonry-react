import React, {
  CSSProperties,
  Children,
  FC,
  ReactNode,
  isValidElement
} from "react";

interface MasonryProps {
  gutter?: number;
  className?: string;
  columnsCount?: number;
  children?: ReactNode;
  style?: CSSProperties;
}
export const Masonry: FC<MasonryProps> = (props) => {
  const { gutter, className, columnsCount, children, style } = props;

  const columns: ReactNode[][] = Array.from(
    { length: columnsCount ?? 1 },
    () => []
  );

  Children.forEach(children, (child, index) => {
    if (isValidElement(child)) {
      columns[index % columns.length].push(child);
    }
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "stretch",
        boxSizing: "border-box",
        width: "100%",
        gap: gutter || 0,
        ...style
      }}
      className={className ? className : "masonry"}
    >
      {columns.map((column, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignContent: "stretch",
            flex: 1,
            width: 0,
            gap: gutter
          }}
          key={index}
        >
          {column.map((child) => child)}
        </div>
      ))}
    </div>
  );
};

Masonry.defaultProps = {
  columnsCount: 3,
  gutter: 0,
  className: "masonry",
  style: {}
};
