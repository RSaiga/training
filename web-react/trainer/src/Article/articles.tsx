import React from "react";

export const Articles = () => {
  const getStrings = () => ["記事１", "記事２"];

  const strings = getStrings();
  return (
      <div>
        <div>記事一覧</div>
        {
          strings.map(value => <div>{value}</div>)
        }
      </div>

  );
};