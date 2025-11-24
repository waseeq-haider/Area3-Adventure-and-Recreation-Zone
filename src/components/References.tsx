import { Leaf, Layers, Users, Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import adventureZoneRef from "@/assets/Adventure zone.jfif";
import pathwayRef from "@/assets/pathway.jfif";

export const References = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">References</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Design inspiration and technical specifications for the Adventure & Recreation Zone
          </p>
        </div>

        {/* Reference Images Section */}
          <div className="mb-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-lg bg-accent/10">
              <ImageIcon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Visual References</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Adventure Zone Reference */}
            <Card className="border-border overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                <img
                  src={adventureZoneRef}
                  alt="Adventure Zone Reference"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
              </div>
              <CardHeader>
                <CardTitle>Adventure Zone Design Inspiration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  This reference showcases the integration of adventure activities within natural bushland settings.
                  The design emphasizes minimal environmental impact while maximizing visitor engagement through
                  strategically placed adventure elements like climbing walls, zip-lines, and rope courses that
                  blend seamlessly with the existing landscape topography.
                </p>
              </CardContent>
            </Card>

            {/* Pathway Reference */}
            <Card className="border-border overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pathwayRef}
                  alt="Natural Pathway Reference"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
              </div>
              <CardHeader>
                <CardTitle>Natural Pathway Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  The pathway design demonstrates sustainable trail construction using permeable granitic sand
                  and organic mulch materials. These natural surfaces provide comfortable walking experiences
                  while maintaining ecological balance, allowing rainwater infiltration and supporting native
                  vegetation growth along trail edges. The winding paths encourage exploration and discovery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical References Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Technical Specifications</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-nature-green-light">
                  <Leaf className="h-6 w-6 text-nature-green" />
                </div>
                <CardTitle>Planting References</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground italic">Eucalyptus melliodora</p>
                <p className="text-sm text-muted-foreground">Yellow Box - Native shade tree</p>
                <p className="text-muted-foreground italic mt-4">Acacia melanoxylon</p>
                <p className="text-sm text-muted-foreground">Blackwood - Native structural tree</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-earth-brown-light">
                  <Layers className="h-6 w-6 text-earth-brown" />
                </div>
                <CardTitle>Ground Surfaces</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="font-semibold">Granitic Sand Pathways</p>
                  <p className="text-sm text-muted-foreground">Natural, permeable main trails</p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Mulch Paths</p>
                  <p className="text-sm text-muted-foreground">Soft surface for forest areas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Landscape Designers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="font-semibold">Sandara Passos</p>
                  <p className="text-sm text-muted-foreground">Lead Designer</p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Veronica Bosque</p>
                  <p className="text-sm text-muted-foreground">Landscape Architect</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
