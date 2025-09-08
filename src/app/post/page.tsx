import { Post, PostMedia } from "@/components/post";

export default function Page() {
  return (
    <Post
      title="Building a Personal Blog with Next.js"
      author="Heitor"
      date="January 15, 2025"
      content={
        <>
          <p>
            This is how I built my personal blog using Next.js and Tailwind CSS. 
            The goal was to create something that feels handmade and personal, 
            not like another generic blog template.
          </p>

          <PostMedia
            src="/blog-screenshot.png"
            alt="Screenshot of the blog homepage"
            type="image"
            caption="The homepage with masonry-style grid layout"
          />

          <p>
            The masonry grid was the most challenging part. I wanted something 
            that felt organic but still maintained readability across different 
            screen sizes.
          </p>

          <PostMedia
            src="/demo-video.mp4"
            alt="Demo of the blog functionality"
            type="video"
            caption="Quick demo showing the responsive behavior"
          />

          <p>
            One thing I learned is that overthinking the design leads to 
            paralysis. Sometimes the simple solution is the right one.
          </p>

          <PostMedia
            src="/celebration.gif"
            alt="Celebration animation"
            type="gif"
            caption="How I felt when it finally worked"
          />
        </>
      }
    />
  );
}