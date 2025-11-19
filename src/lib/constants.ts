export const FORMAT_OPTIONS = {
  'Level 1 Header': '# {}',
  'Level 2 Header': '## {}',
  'Level 3 Header': '### {}',
  'Level 4 Header': '#### {}',
  'Bold Text': '**{}**',
  'Italic Text': '*{}*',
  'Blockquote': '> {}',
  'Normal Text': '{}',
};

export interface ColorFormatConfig {
  [color: string]: string;
}
