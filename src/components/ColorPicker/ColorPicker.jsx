// import './ColorPicker.scss';
import './ColorPicker.scss';
import { ColorChoice } from '../index';
import { useEffect, useState } from 'react';
import { colorPaletteOptions } from '../../utils/colorPalettes';

const ColorPicker = () => {
  const [colorPalette, setColorPalette] = useState(colorPaletteOptions.dark);
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--background-color',
      colorPalette.bgcolor
    );
    document.documentElement.style.setProperty(
      '--primary-color',
      colorPalette.primarycolor
    );
    document.documentElement.style.setProperty(
      '--secondary-color',
      colorPalette.secondarycolor
    );
    document.documentElement.style.setProperty(
      '--link-color',
      colorPalette.linkcolor
    );
    document.documentElement.style.setProperty(
      '--highlight-color',
      colorPalette.highlightcolor
    );
    document.documentElement.style.setProperty(
      '--caution-color',
      colorPalette.cautioncolor
    );
  }, [colorPalette]);

  return (
    <div className='color-picker'>
      <ColorChoice
        color='dark'
        colorPalette={colorPalette}
        setColorPalette={setColorPalette}
      />
      <ColorChoice
        color='light'
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
    </div>
  );
};
export default ColorPicker;
