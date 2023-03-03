import React from "react";
import { ItemList, StyledSpan } from "./Item.styled";
export const Item = ({
  story: { title, url, author, num_comments, point },
}) => (
  <ItemList>
    <StyledSpan widtn="40%">
      <a href={url}>{title}</a>
    </StyledSpan>
    <StyledSpan widtn="30%">{author}</StyledSpan>
    <StyledSpan width="10%">{num_comments}</StyledSpan>
    <StyledSpan width="10%">{point}</StyledSpan>
    <StyledSpan width="10%">
      <button type="button">Dismiss</button>
    </StyledSpan>
  </ItemList>
);
