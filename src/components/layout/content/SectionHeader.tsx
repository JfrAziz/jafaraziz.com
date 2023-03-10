import type { FC } from "preact/compat";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, description }) => (
  <div class="space-y-2 md:space-x-4 md:flex items-end">
    <div class="text-gray-800 font-extrabold text-3xl lg:text-4xl">{title}</div>
    {description && <div class="text-gray-700">{description}</div>}
  </div>
);

export default SectionHeader;
