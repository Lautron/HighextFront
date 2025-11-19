import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/v1";

export const analyzePdf = async (file: File): Promise<string[]> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${API_BASE_URL}/pdf/analyze`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to analyze PDF");
  }

  return response.data.colors;
};

export const extractText = async (file: File, config: any): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("config", JSON.stringify(config));

  const response = await axios.post(`${API_BASE_URL}/pdf/extract`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to extract text");
  }

  return response.data.markdown;
};

export const convertMarkdownToPdf = async (markdown: string): Promise<Blob> => {
  const response = await axios.post(
    `${API_BASE_URL}/markdown/to-pdf`,
    { markdown },
    {
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "blob", // Important for receiving binary data
    }
  );

  if (response.status !== 200) {
    throw new Error("Failed to convert markdown to PDF");
  }

  return response.data;
};
