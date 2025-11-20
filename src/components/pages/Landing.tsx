import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FileText, Palette, FileDown, Zap } from 'lucide-react';
import { Highlighter } from '@/components/ui/highlighter';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center flex flex-col items-center max-w-4xl">

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-6 text-foreground pb-2">
          Master Your <Highlighter color="#93c5fd">PDF Highlights</Highlighter>
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Stop manually copying text. Automatically extract, categorize, and format your PDF highlights into structured Markdown or clean documents based on color.
        </p>
        <div className="flex gap-4">
          <Button size="lg" onClick={() => navigate('/app')} className="h-12 px-8 text-base font-bold border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">From PDF to <Highlighter color="#fef08a">Summary</Highlighter> in Seconds</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            You focus on reading and learning. Let us handle the note-taking organization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10" />

          <div className="flex flex-col items-center text-center bg-background p-4">
            <div className="h-24 w-24 rounded-full bg-primary/30 flex items-center justify-center mb-6 border-4 border-foreground text-3xl font-black text-foreground shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Highlight</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Annotate your PDFs with your favorite colors, just like you always have.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-background p-4">
            <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center mb-6 border-4 border-foreground text-3xl font-black text-foreground shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Upload your highlighted PDF to HighExt and let it work its magic.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-background p-4">
            <div className="h-24 w-24 rounded-full bg-accent flex items-center justify-center mb-6 border-4 border-foreground text-3xl font-black text-foreground shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Export</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Get perfectly formatted Markdown or a new PDF, categorized by your highlight colors.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-20 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Why use <Highlighter action="underline" color="#fdba74">HighExt?</Highlighter></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <Zap className="h-10 w-10 text-foreground mb-2 fill-secondary" />
                <CardTitle>Smart Extraction</CardTitle>
              </CardHeader>
              <CardContent>
                No more manual copy-pasting. HighExt intelligently pulls out all your highlights, saving you hours.
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <Palette className="h-10 w-10 text-foreground mb-2 fill-primary" />
                <CardTitle>Color Mapping</CardTitle>
              </CardHeader>
              <CardContent>
                Assign specific markdown formats to each highlight color, creating perfectly organized notes.
              </CardContent>
            </Card>

                        <Card className="bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                          <CardHeader>
                            <FileDown className="h-10 w-10 text-foreground mb-2 fill-accent" />
                            <CardTitle>Instant Export</CardTitle>
                          </CardHeader>
                          <CardContent>
                            Export your structured highlights as clean Markdown or a new, searchable PDF document.
                          </CardContent>
                        </Card>                      </div>                   </div>
                 </section>

                 {/* Use Cases Section */}
                 <section className="py-24 container mx-auto px-4 text-center">
                   <h2 className="text-3xl font-bold mb-12 tracking-tight">Built for Knowledge Workers</h2>
                   <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                     <div className="p-8 rounded-xl bg-primary/20 border-2 border-foreground shadow-[4px_4px_0px_0px_#93c5fd]">
                       <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                         🎓 For Students
                       </h3>
                       <p className="text-muted-foreground">
                         Turn 50-page textbook chapters into concise 5-page summaries. Perfect for creating Anki flashcards and reviewing for finals without re-reading the whole book.
                       </p>
                     </div>
                     <div className="p-8 rounded-xl bg-secondary/30 border-2 border-foreground shadow-[4px_4px_0px_0px_#fef08a]">
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
