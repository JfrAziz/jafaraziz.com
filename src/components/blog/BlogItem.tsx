import type { FC } from "preact/compat";
import { getPostPath } from "@utils/blog";
import Tag from "@components/layout/content/Tag";
import type { BlogFronmatter } from "content/_schemas";

interface BlogItemProps extends BlogFronmatter {
  slug: string;
}

const BlogItem: FC<BlogItemProps> = ({ date, tags, title, slug }) => {
  return (
    <li className="text-sm text-gray-700 flex flex-col-reverse items-start border-b border-gray-200 md:border-none md:flex-row md:items-center md:space-x-4">
      <div className="flex whitespace-nowrap space-x-4">
        <div className="select-none font-mono mb-1 px-2 bg-gray-800 text-white md:mb-0 md:px-0 md:bg-inherit md:text-gray-700">
          {date.toISOString().split("T")[0]}
        </div>
        <div className="select-none text-white text-xs font-bold min-w-max hidden md:flex md:items-center">
          <Tag tag={tags[0] ?? "no tags"} />
        </div>
      </div>
      <div className="line-clamp-2 mb-2 md:line-clamp-1 md:mb-0 md:underline hover:cursor-pointer">
        <a href={getPostPath(slug)}>{title}</a>
      </div>
    </li>
  );
};

export default BlogItem;
