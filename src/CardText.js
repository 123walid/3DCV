import React from "react";
import { Text } from "@react-three/drei";

function CardText(props) {
  return (
    <Text
      rotation={props.rotation}
      position={props.position}
      maxWidth = {props.maxWidth}
      color={"black"}
      fontSize={props.fontSize}
      font="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap"
      anchorX="left"
      anchorY="middle"
      textAlign="center"
    >
      {props.text}
    </Text>
  );
}
export default CardText;