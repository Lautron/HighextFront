import React from 'react';
import { FORMAT_OPTIONS, type ColorFormatConfig } from '@/lib/constants';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ColorConfigProps {
  colors: string[];
  colorConfig: ColorFormatConfig;
  onColorConfigChange: (color: string, newFormat: string) => void;
}

const ColorConfig: React.FC<ColorConfigProps> = ({
  colors,
  colorConfig,
  onColorConfigChange,
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
              {Object.entries(FORMAT_OPTIONS).map(([key, val]) => (
                <SelectItem key={key} value={val}>
                  {key}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  );
};

export default ColorConfig;
