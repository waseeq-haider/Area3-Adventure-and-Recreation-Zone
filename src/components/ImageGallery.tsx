// Final Mockup Images
import mockup1 from "@/assets/2 (2).png";
import mockup2 from "@/assets/3.png";
import mockup3 from "@/assets/4.png";
import mockup4 from "@/assets/5.png";
import mockup5 from "@/assets/6.png";
import mockupMain from "@/assets/Adventure & Recreation Zone.png";
import area3_01 from "@/assets/area3_01.png";
import area3_02 from "@/assets/area3_02.png";
import area3_03 from "@/assets/area3_03.png";

// Feature Images
import kidsAdventure from "@/assets/Adventures for Kids _ , PA.jfif";
import bushWalk from "@/assets/Bush walk.jfif";
import openLawns from "@/assets/Open lawns for picnics and outdoor classes.jfif";
import zipLine from "@/assets/zip line.jfif";

// Reference Images
import adventureZone from "@/assets/Adventure zone.jfif";
import pathway from "@/assets/pathway.jfif";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  // Final Mockups - Overview
  { src: mockupMain, alt: "Adventure & Recreation Zone - Main View", category: "Overview" },
  { src: area3_01, alt: "Area 3 - Perspective 1", category: "Overview" },
  { src: area3_02, alt: "Area 3 - Perspective 2", category: "Overview" },
  { src: area3_03, alt: "Area 3 - Perspective 3", category: "Overview" },
  { src: mockup1, alt: "Adventure Zone Layout View 1", category: "Overview" },
  { src: mockup2, alt: "Adventure Zone Layout View 2", category: "Overview" },
  { src: mockup3, alt: "Adventure Zone Layout View 3", category: "Overview" },
  { src: mockup4, alt: "Adventure Zone Layout View 4", category: "Overview" },
  { src: mockup5, alt: "Adventure Zone Layout View 5", category: "Overview" },

  // Feature Activities
  { src: zipLine, alt: "Zip-Line Adventure", category: "Activities" },
  { src: kidsAdventure, alt: "Adventures for Kids", category: "Activities" },
  { src: bushWalk, alt: "Bush Walk Trail", category: "Activities" },
  { src: openLawns, alt: "Open Lawns for Picnics and Outdoor Classes", category: "Landscapes" },

  // References
  { src: adventureZone, alt: "Adventure Zone Reference", category: "References" },
  { src: pathway, alt: "Natural Pathway", category: "References" }
];

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 cursor-pointer hover:text-primary transition-colors duration-300 animate-fade-up">Image Gallery</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Explore the complete visual documentation of Area 3
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-primary-foreground/80 mb-1">{image.category}</p>
                  <p className="text-lg font-semibold text-primary-foreground">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl p-0 bg-transparent border-none">
            <img
              src={selectedImage || ''}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
