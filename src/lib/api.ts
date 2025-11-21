import axios from 'axios';
import { DEFAULT_EXTRACTION_CONFIG, FORMAT_OPTIONS, type ColorFormatConfig } from './constants';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000') + '/api/v1';

export const analyzePdf = async (file: File): Promise<string[]> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(`${API_BASE_URL}/pdf/analyze`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if (response.status !== 200) {
    throw new Error('Failed to analyze PDF');
  }

  return response.data.colors;
};

export const extractText = async (
  file: File,
  config: ColorFormatConfig,
): Promise<string> => {
  const string_template_by_color = Object.fromEntries(
    Object.entries(config).map(([color, formatKey]) => [
      color,
      FORMAT_OPTIONS[formatKey as keyof typeof FORMAT_OPTIONS],
    ]),
  );

  const finalConfig = {
    ...DEFAULT_EXTRACTION_CONFIG,
    string_template_by_color,
  };

  const formData = new FormData();
  formData.append('file', file);
  formData.append('config', JSON.stringify(finalConfig));

  const response = await axios.post(`${API_BASE_URL}/pdf/extract`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if (response.status !== 200) {
    throw new Error('Failed to extract text');
  }

  return response.data.markdown;
};

export const convertMarkdownToPdf = async (markdown: string): Promise<Blob> => {
  const response = await axios.post(
    `${API_BASE_URL}/markdown/to-pdf`,
    { markdown },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'blob', // Important for receiving binary data
    },
  );

  if (response.status !== 200) {
    throw new Error('Failed to convert markdown to PDF');
  }

  return response.data;
};
