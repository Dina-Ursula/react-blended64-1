import React from "react";
import { Item } from "./Item/Item";

const List = ({ stories }) => {
  return (
    <ul>
      {stories.map((story) => (
        <Item key={story.objectID} story={story} />
      ))}
    </ul>
  );
};

export default List;
