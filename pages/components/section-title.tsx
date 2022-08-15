export default function SectionTitle({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <h4 className="text-xl font-medium text-rose-100/90" id="the-heart">
      <a
        className="before:content-['#'] before:absolute before:-ml-[1em] before:text-rose-100/0 hover:before:text-rose-100/50 pl-[1em] -ml-[1em]"
        href={link}
      >
        {title}
      </a>
    </h4>
  );
}
