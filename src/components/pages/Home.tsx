import { useState } from 'react';
import FileUpload from "@/components/pages/FileUpload";
import ColorConfig from "@/components/pages/ColorConfig";
import ResultsDisplay from "@/components/pages/ResultsDisplay";
import { analyzePdf } from "@/lib/api";
import { FORMAT_OPTIONS, type ColorFormatConfig } from '@/lib/constants';

const Home = () => {
    const [pdfFile, setFile] = useState<File>()
    const [colors, setColors] = useState<string[]>()
    const [colorConfig, setColorConfig] = useState<ColorFormatConfig | undefined>()

    function handleColorConfigInitialState(fetchedColors: string[]) {
        const initialState: ColorFormatConfig = {};
        const values = Object.values(FORMAT_OPTIONS);
        fetchedColors.forEach((color, ind) => {
          initialState[color] =
            ind < values.length ? values[ind] : values[values.length - 1];
        });
        setColorConfig(initialState);
    }

    const handleFileSelect = async (file: File): Promise<void> => {
        setFile(file)
        const fetchedColors = await analyzePdf(file)
        setColors(fetchedColors)
        handleColorConfigInitialState(fetchedColors)
    };

    const handleColorConfigChange = (color: string, newFormat: string): void => {
      setColorConfig((prevState) => {
        if (!prevState) return undefined;
        return {
          ...prevState,
          [color]: newFormat,
        };
      });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center my-8">PDF Highlighter Extractor</h1>
            <FileUpload onFileSelect={handleFileSelect} />
            {colors !== undefined && colorConfig !== undefined && (
              <ColorConfig
                colors={colors}
                colorConfig={colorConfig}
                onColorConfigChange={handleColorConfigChange}
              />
            )}
            <ResultsDisplay />
        </div>
    );
};

export default Home;
