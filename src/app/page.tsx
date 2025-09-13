import { Card } from "@/components/card";
import { Grid } from "@/components/grid";
import { GridItem } from "@/components/grid-item";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="px-4 py-4">
        <Grid>
          <GridItem colSpan={1} rowSpan={1}>
            <Card
              title="Title"
              author="Author"
              date="01/01/01"
              excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac ultricies odio. Maecenas turpis libero, imperdiet sit amet dui a, lacinia cursus eros. Sed sit amet sem commodo libero facilisis malesuada. Maecenas pharetra arcu quis fringilla pellentesque. Suspendisse varius leo sed est tempus tincidunt ut ac leo. Donec diam nibh, porta at sem ut, volutpat laoreet orci. Donec sit amet sodales tellus. Sed elementum tellus sed venenatis convallis"
              href="#"
            />
          </GridItem>

          <GridItem colSpan={2} rowSpan={1}>
            <Card
              title="Another Title"
              author="Author"
              date="01/01/01"
              excerpt="Sed sit amet sem commodo libero facilisis malesuada..."
              href="#"
            />
          </GridItem>

          <GridItem colSpan={3} rowSpan={1}>
            <Card
              title="Another Title"
              author="Author"
              date="01/01/01"
              excerpt="Sed sit amet sem commodo libero facilisis malesuada..."
              href="#"
            />
          </GridItem>
        </Grid>
      </main>
    </div>
  );
}
