import type { FC } from "preact/compat";

interface TagProps {
  tag: string;
  className?: string;
}

const Tag: FC<TagProps> = ({ tag, className }) => (
  <a href={`/tags/${tag}`}>
    <div className={`flex items-center ${className}`}>
      <div className="bg-gray-800 text-white text-xs font-bold font-mono py-0.5 px-2 cursor-pointer select-none">
        {tag}
      </div>
    </div>
  </a>
);

export default Tag;
