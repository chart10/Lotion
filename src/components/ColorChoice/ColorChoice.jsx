import { colorPaletteOptions } from '../../utils/colorPalettes';
import '../NavDrawer/NavDrawer.scss';

const ColorChoice = ({ color, colorPalette, setColorPalette }) => {
  return (
    <div
      className={
        colorPalette.name === color
          ? `color-choice ${color} current`
          : `color-choice ${color}`
      }
      onClick={() => setColorPalette(colorPaletteOptions[color])}
      title={color}
    ></div>
  );
};
export default ColorChoice;
