import { getPosts } from '@/lib/posts';
import { Card } from '@/components/card';
import { Grid } from '@/components/grid';
import { GridItem } from '@/components/grid-item';

export default function Home() {
  const posts = getPosts();
  console.log(posts);
  
  return (
    <div className="min-h-screen">
      <main className="px-4 py-4">
        <Grid>
          {posts.map((post, i) => (
            <GridItem key={post.slug} colSpan={(i % 3 + 1) as 1 | 2 | 3}>
              <Card
                title={post.title}
                author="Heitor"
                date={post.date}
                excerpt={post.excerpt || ''}
                href={`/blog/${post.slug}`}
              />
            </GridItem>
          ))}
        </Grid>
      </main>
    </div>
  );
}