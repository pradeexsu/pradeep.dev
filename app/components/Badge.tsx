function Badge({ label }: any) {
  return (
    <span className="inline-flex px-[2px] text-xs items-center rounded border border-neutral-200 bg-neutral-50 leading-2 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      {label}
    </span>
  );
}

export default Badge;
