import { useState } from 'react';
import FileUpload from "@/components/pages/FileUpload";
import ColorConfig from "@/components/pages/ColorConfig";
import ResultsDisplay from "@/components/pages/ResultsDisplay";
import { analyzePdf, extractText } from "@/lib/api";
import {
    FORMAT_OPTIONS,
    type ColorFormatConfig,
} from '@/lib/constants';

const Home = () => {
    const [pdfFile, setFile] = useState<File>()
    const [colors, setColors] = useState<string[]>()
    const [colorConfig, setColorConfig] = useState<ColorFormatConfig | undefined>()
    const [markdown, setMarkdown] = useState<string>("")

    function handleColorConfigInitialState(fetchedColors: string[]) {
        const initialState: ColorFormatConfig = {};
        const values = Object.keys(FORMAT_OPTIONS);
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

    const handleConfigSubmit = async () => {
        if (pdfFile === undefined || colorConfig === undefined) {
            console.error("pdfFile or colorConfig are undefined")
            return
        }
        const markdown = await extractText(pdfFile, colorConfig)
        setMarkdown(markdown)
    }

    return (
        <div className="container mx-auto py-12 px-4 max-w-6xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">HighExt</h1>
                <p className="text-xl text-muted-foreground">Extract and format highlighted text from your PDFs automatically.</p>
            </div>
            
            <FileUpload onFileSelect={handleFileSelect} />
            {colors !== undefined && colorConfig !== undefined && (
              <ColorConfig
                colors={colors}
                colorConfig={colorConfig}
                onColorConfigChange={handleColorConfigChange}
                onSubmit={handleConfigSubmit}
              />
            )}
            {markdown !== "" && <ResultsDisplay markdown={markdown}/>}
        </div>
    );
};

export default Home;
