import { colorPaletteOptions } from '../../utils/colorPalettes';
import '../NavDrawer/NavDrawer.scss';

const ColorChoice = ({ color, setColorPalette }) => {
  return (
    <div
      className={`color-choice ${color}`}
      onClick={() => setColorPalette(colorPaletteOptions[color])}
    ></div>
  );
};
export default ColorChoice;
