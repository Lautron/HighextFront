import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FileText, Palette, FileDown, Zap } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center flex flex-col items-center max-w-4xl">
        <div className="mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          Beta release
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent pb-2">
          Master Your PDF Highlights
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Stop manually copying text. Automatically extract, categorize, and format your PDF highlights into structured Markdown or clean documents based on color.
        </p>
        <div className="flex gap-4">
          <Button size="lg" onClick={() => navigate('/app')} className="h-12 px-8 text-base">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">From PDF to Summary in Seconds</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            You focus on reading and learning. Let us handle the note-taking organization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10" />

          <div className="flex flex-col items-center text-center bg-background p-4">
            <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center mb-6 border-4 border-background shadow-sm text-2xl font-bold text-primary">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Highlight</h3>
            <p className="text-muted-foreground">
              Read your PDF as usual. Use different colors for headers, definitions, and bold text.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-background p-4">
            <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center mb-6 border-4 border-background shadow-sm text-2xl font-bold text-primary">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload</h3>
            <p className="text-muted-foreground">
              Drop your file into HighExt. We scan for highlights and diagrams automatically.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-background p-4">
            <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center mb-6 border-4 border-background shadow-sm text-2xl font-bold text-primary">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Export</h3>
            <p className="text-muted-foreground">
              Get a structured summary with a Table of Contents, ready for your next exam.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-20 border-y">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Why use HighExt?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-muted">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Smart Extraction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upload any highlighted PDF. We automatically detect every highlight color and extract the text while preserving order.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-muted">
              <CardHeader>
                <Palette className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Color Mapping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Map specific colors to Markdown syntax. Turn yellow highlights into Headers and green ones into Blockquotes effortlessly.
                </p>
              </CardContent>
            </Card>

                        <Card className="bg-card/50 border-muted">
                          <CardHeader>
                            <FileDown className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Instant Export</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">
                              Preview your results immediately. Export as raw Markdown for your notes or generate a clean PDF with a table of contents.
                            </p>
                          </CardContent>
                        </Card>                      </div>                   </div>
                 </section>

                 {/* Use Cases Section */}
                 <section className="py-24 container mx-auto px-4 text-center">
                   <h2 className="text-3xl font-bold mb-12 tracking-tight">Built for Knowledge Workers</h2>
                   <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                     <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                       <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                         🎓 For Students
                       </h3>
                       <p className="text-muted-foreground">
                         Turn 50-page textbook chapters into concise 5-page summaries. Perfect for creating Anki flashcards and reviewing for finals without re-reading the whole book.
                       </p>
                     </div>
                     <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                       <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                         🔬 For Researchers
                       </h3>
                       <p className="text-muted-foreground">
                         Review bibliography efficiently. Color-code methodology, results, and key arguments, then extract them into a structured review document automatically.
                       </p>
                     </div>
                   </div>
                 </section>

                 {/* Footer */}
                 <footer className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">        <p>© {new Date().getFullYear()} HighExt. Built for researchers and developers.</p>
      </footer>
    </div>
  );
};

export default Landing;
