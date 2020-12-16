import { CirclePicker } from 'react-color';

export default function SketchPickerCom({
  backgroundColor,
  setBackgroundColor,
}) {
  return (
    <CirclePicker
      color={backgroundColor}
      onChangeComplete={(color) => setBackgroundColor(color.hex)}
    />
  );
}
