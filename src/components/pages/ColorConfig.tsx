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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
    <Card className="w-full max-w-2xl mx-auto mt-8 text-left">
      <CardHeader>
        <CardTitle>Configure Extraction</CardTitle>
        <CardDescription>Map your PDF highlight colors to Markdown formats.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {colors.map((color) => (
          <div
            key={color}
            className="flex items-center justify-between p-3 border rounded-lg bg-card"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full border shadow-sm" style={{ backgroundColor: color }} />
              <code className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground uppercase">{color}</code>
            </div>
            <Select
              value={colorConfig[color]}
              onValueChange={(value) => onColorConfigChange(color, value)}
            >
              <SelectTrigger className="w-[200px]">
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
      </CardContent>
      <CardFooter className='flex justify-center'>
        <Button onClick={onSubmit}>Extract Text</Button>
      </CardFooter>
    </Card>
  );
};

export default ColorConfig;
