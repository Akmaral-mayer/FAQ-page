import React from "react";
import styled from "styled-components";

const Breadcrumbs = styled.div`
  font-weight: 600;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  margin-top: 70px;
`;

const Crumb = styled.div`
  font-weight: 600;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  margin: 0 8px;
  cursor: ${(props) => (props.active ? "not-allowed" : "pointer")};
  color: ${(props) => (props.active ? "#000000" : "#2F66E3")};
`;

export function CustomBreadcrumbs() {
  return (
    <Breadcrumbs>
      <Crumb>Home</Crumb>/<Crumb active>FAQ</Crumb>
    </Breadcrumbs>
  );
}
