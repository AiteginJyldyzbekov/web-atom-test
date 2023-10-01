"use client";
import TextDisplay from "@component/components/atoms/text-display";
import { ElipsisTextProps } from "@component/types/ElipsisText";
import { useState } from "react";

const EllipsisText: React.FC<ElipsisTextProps> = ({ len, children = "" }) => {
  const [ellipsis, setEllipsis] = useState(() => children?.length > len);
  return (
    <>
      <span style={{ wordBreak: "break-word", display: "inline-block" }}>
        {ellipsis && (
          <div
            onClick={() => {
              setEllipsis(!ellipsis);
            }}
          >
            <TextDisplay>{`${children.slice(0, len)}... `}</TextDisplay>
            <p style={{ cursor: "pointer" }}>Open</p>
          </div>
        )}
        {!ellipsis && <TextDisplay>{children}</TextDisplay>}
      </span>
    </>
  );
};

export default EllipsisText;
