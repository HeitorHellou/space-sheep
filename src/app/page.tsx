import { getPosts } from '@/lib/posts';
import { Card } from '@/components/card';
import { Grid } from '@/components/grid';
import { GridItem } from '@/components/grid-item';

export default function Home() {
  const posts = getPosts();
  
  return (
    <div className="min-h-screen">
      <main className="px-4 py-4">
        <Grid>
          {posts.map((post, i) => (
            <GridItem key={post.slug} colSpan={post.colSpan}>
              <Card
                title={post.title}
                author={post.author}
                date={post.date}
                excerpt={post.excerpt || ''}
                href={`/post/${post.slug}`}
              />
            </GridItem>
          ))}
        </Grid>
      </main>
    </div>
  );
}