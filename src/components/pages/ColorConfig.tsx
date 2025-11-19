import React, { useState } from 'react';
import { FORMAT_OPTIONS, type ColorFormatConfig } from '@/lib/constants';

interface ColorConfigProps {
  colors: string[];
}

const ColorConfig: React.FC<ColorConfigProps> = ({ colors }) => {
  const values = Object.values(FORMAT_OPTIONS);
  const [colorConfig, setColorConfig] = useState<ColorFormatConfig>(() => {
    const initialState: ColorFormatConfig = {};
    colors.forEach((color, ind) => {
      initialState[color] =
        ind < values.length ? values[ind] : values[values.length - 1];
    });
    return initialState;
  });

  const handleFormatChange = (color: string, newFormat: string): void => {
    setColorConfig((prevState) => {
      return {
        ...prevState,
        [color]: newFormat,
      };
    });
  };

  return (
    <div>
      <h1>This is the color config!</h1>
      {colors.map((color) => (
        <div
          key={color}
          style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}
        >
          <span style={{ background: color }}>{color}</span>
          <select
            value={colorConfig[color]}
            onChange={(e) => handleFormatChange(color, e.target.value)}
          >
            {Object.entries(FORMAT_OPTIONS).map(([key, val]) => (
              <option key={key} value={val}>
                {key}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default ColorConfig;
