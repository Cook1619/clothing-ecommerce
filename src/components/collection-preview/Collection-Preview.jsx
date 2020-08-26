import React from "react";
import CollectionItem from "../collection-item/Collection-Item";

import "./Collection-Preview.scss";

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="ttile">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
}
