import PostCard, { PostProps } from "./post-card";
import SectionTitle from "./section-title";

export default function Posts({ postCardData }: { postCardData: PostProps }) {
  return (
    <>
      <section className="mt-10 scroll-m-28" id="posts">
        <SectionTitle title={"My Posts"} link={"#posts"} />
        <div className="mt-10">
          <PostCard {...postCardData} />
          <PostCard {...postCardData} />
        </div>
      </section>
    </>
  );
}
