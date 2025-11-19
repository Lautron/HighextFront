import React from 'react';
import { FORMAT_OPTIONS, type ColorFormatConfig } from '@/lib/constants';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
    Button
} from "@/components/ui/button"

interface ColorConfigProps {
  colors: string[];
  colorConfig: ColorFormatConfig;
  onColorConfigChange: (color: string, newFormat: string) => void;
  onSubmit: () => void;
}

const ColorConfig: React.FC<ColorConfigProps> = ({
  colors,
  colorConfig,
  onColorConfigChange,
  onSubmit
}) => {
  return (
    <div>
      <h1>This is the color config!</h1>
      {colors.map((color) => (
        <div
          key={color}
          style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}
        >
          <span style={{ background: color }}>{color}</span>
          <Select
            value={colorConfig[color]}
            onValueChange={(value) => onColorConfigChange(color, value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a format" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(FORMAT_OPTIONS).map((key) => (
                <SelectItem key={color + key} value={key}>
                  {key}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    <Button onClick={onSubmit}>Send!</Button>
    </div>
  );
};

export default ColorConfig;
