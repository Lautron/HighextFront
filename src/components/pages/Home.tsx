import FileUpload from "@/components/pages/FileUpload";
import ColorConfig from "@/components/pages/ColorConfig";
import ResultsDisplay from "@/components/pages/ResultsDisplay";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">PDF Highlighter Extractor</h1>
      <FileUpload />
      <ColorConfig />
      <ResultsDisplay />
    </div>
  );
};

export default Home;
