export const LinkItem: React.FC<{ link: string; text: string, color:string }> = ({
  link,
  text,
  color
}: {
  link: string;
  text: string;
  color: string;
}) => (
  <>
    <a
      href={link}
      className={`inline-flex items-center text-green-400 hover:underline mr-5`}
      target="_blank"
    >
      {text}
      <svg
        className="ml-2 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      > 
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
      </svg>
    </a>
  </>
);
