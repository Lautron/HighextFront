import { useState } from 'react';
import FileUpload from "@/components/pages/FileUpload";
import ColorConfig from "@/components/pages/ColorConfig";
import ResultsDisplay from "@/components/pages/ResultsDisplay";
import { analyzePdf } from "@/lib/api";

const Home = () => {
    const [pdfFile, setFile] = useState<File>()
    const [colors, setColors] = useState<string[]>()

    const handleFileSelect = async (file: File): Promise<void> => {
        setFile(file)
        const colors = await analyzePdf(file)
        setColors(colors)
    };
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center my-8">PDF Highlighter Extractor</h1>
            <FileUpload onFileSelect={handleFileSelect} />
            {colors !== undefined && <ColorConfig colors={colors}/>}
            <ResultsDisplay />
        </div>
    );
};

export default Home;
