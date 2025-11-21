import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { UploadCloud } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface FileUploadProps {
    onFileSelect: (file: File) => void
}
function FileUpload({ onFileSelect }: FileUploadProps) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            onFileSelect(acceptedFiles[0])
        }
    }, [onFileSelect])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <Card className="w-full max-w-md mx-auto mt-10">
            <CardContent className="p-6">
                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-colors flex flex-col items-center justify-center min-h-[200px] ${
                        isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:border-primary/50'
                    }`}
                >
                    <input {...getInputProps()} />
                    <UploadCloud className="h-12 w-12 text-muted-foreground mb-4" />
                    <div className="text-sm text-muted-foreground">
                        {isDragActive ? <p>Drop the PDF here...</p> : <p>Drag & drop a PDF here, or click to select</p>}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default FileUpload;
