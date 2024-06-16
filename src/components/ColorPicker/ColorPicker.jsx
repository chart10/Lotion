// import './ColorPicker.scss';
import '../../assets/styles/globals.scss';
import { ColorChoice } from '../index';
import { useState } from 'react';
import { colorPaletteOptions } from '../../utils/colorPalettes';

const ColorPicker = () => {
  const [colorPalette, setColorPalette] = useState(colorPaletteOptions.default);

  return (
    <div className='color-picker'>
      <ColorChoice
        color='default'
        colorPalette={colorPalette}
        setColorPalette={setColorPalette}
      />
      <ColorChoice
        color='yellow'
        colorPalette={colorPalette}
        setColorPalette={setColorPalette}
      />
      <ColorChoice
        color='blue'
        colorPalette={colorPalette}
        setColorPalette={setColorPalette}
      />
      <ColorChoice
        color='purple'
        colorPalette={colorPalette}
        setColorPalette={setColorPalette}
      />
      {/* <ColorChoice color='blue' />
      <ColorChoice color='purple' /> */}
    </div>
  );
};
export default ColorPicker;
