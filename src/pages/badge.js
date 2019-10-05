import React from "react";
import styled from "@emotion/styled";

const Badge = styled.span`
  background-color: ${props =>
    props.variantColor ? props.variantColor : "grey"};
  color: ${props => (props.color ? props.color : "#fff")};
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
`;

const PrimaryBadge = styled(Badge)`
  background-color: #ddd;
  color: #444;
`;

const BadgeComponentUsingEmotion = () => {
  return (
    <section>
      <h1>Badge component</h1>
      <PrimaryBadge>Value</PrimaryBadge>
      <Badge>default</Badge>
      <Badge variantColor="green">green</Badge>
      <Badge variantColor="red">red</Badge>
      <Badge variantColor="yellow" color="#444">
        yellow
      </Badge>
    </section>
  );
};

export default BadgeComponentUsingEmotion;
