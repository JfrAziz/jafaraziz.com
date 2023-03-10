import { SOCIALS } from "config";
import type { FC } from "preact/compat";
import type { SocialLink } from "types";

const SocialLinkItem: FC<SocialLink> = ({ href, name }) => (
  <a
    class="font-mono text-sm"
    href={href}
    target="_blank"
    referrerpolicy="no-referrer"
  >
    {name}
  </a>
);

const SocialLinks: FC = () => {
  return (
    <span>
      {SOCIALS.map((item, i, row) =>
        i + 1 !== row.length ? (
          <span>
            <SocialLinkItem {...item} />,{" "}
          </span>
        ) : (
          <span>
            or <SocialLinkItem {...item} />
          </span>
        )
      )}
    </span>
  );
};

export default SocialLinks;
