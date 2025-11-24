import climbingImage from "@/assets/climbing-wall.jpg";
import ziplineImage from "@/assets/zipline-platform.jpg";
import ropeImage from "@/assets/rope-course.jpg";
import lawnImage from "@/assets/open-lawn.jpg";
import shelterImage from "@/assets/shelter-bench.jpg";

const items = [
  {
    number: 21,
    title: "Rope & Obstacle Course",
    description: "A comprehensive rope and obstacle course system suspended between trees, featuring multiple difficulty levels. Designed for team building, physical challenges, and adventure training in a natural bushland setting.",
    image: ropeImage
  },
  {
    number: 22,
    title: "Zip-Line Platform",
    description: "Multi-level zip-line platform integrated into the eucalyptus forest canopy. Features state-of-the-art safety systems and provides exhilarating aerial experiences through the bushland landscape.",
    image: ziplineImage
  },
  {
    title: "Climbing Wall & Safety Stations",
    description: "Professional-grade outdoor climbing wall with varied routes and difficulty levels. Includes comprehensive safety stations and equipment storage, all designed to blend naturally with the surrounding environment.",
    image: climbingImage
  },
  {
    title: "Open Lawn Areas",
    description: "Spacious lawns surrounded by native bushland, perfect for picnics, outdoor yoga classes, group activities, and recreational sports. Maintained to support diverse uses while preserving natural aesthetics.",
    image: lawnImage
  },
  {
    title: "Resting Shelters & Benches",
    description: "Modern timber shelters and benches strategically placed throughout the zone. Providing comfortable resting spots while maintaining visual harmony with the natural bush landscape.",
    image: shelterImage
  }
];

export const SpecificItems = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Specific Items</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="space-y-12">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center animate-fade-up`}
            >
              <div className="flex-1">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-[360px] object-cover rounded-lg shadow-elevated"
                />
              </div>
              <div className="flex-1 space-y-4">
                {item.number && (
                  <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                    Item {item.number}
                  </div>
                )}
                <h3 className="text-3xl md:text-4xl font-bold">{item.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
