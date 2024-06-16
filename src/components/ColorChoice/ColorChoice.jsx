import { colorPaletteOptions } from '../../utils/colorPalettes';
import '../../assets/styles/globals.scss';

const ColorChoice = ({
  color,
  colorPalette,
  setColorPalette,
  backgroundColor,
}) => {
  const handleClick = (newColor) => {
    // setColorPalette{color}
    return;
  };

  return (
    <div className={`color-choice ${color}`} onClick={backgroundColor}></div>
  );
};
export default ColorChoice;
