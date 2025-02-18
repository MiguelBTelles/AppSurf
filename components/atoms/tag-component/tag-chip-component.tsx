import React from "react";
import { Chip } from "react-native-paper";

interface TagChipProps {
  tag: string;
}

export function TagChipComponent({ tag }: TagChipProps) {
  return (
    <Chip 
      mode="outlined"
      textStyle={{ fontSize: 12 }}
      style={{alignSelf: 'flex-start'}}
    >
      {tag}
    </Chip>
  );
}
