export interface LayoutProps {
	title?: string;
	description?: string;
}

export type Collection = "blog";

export type SocialLink = {
	name: SocialMedia;
	href: string;
};

export type SocialMedia =
	| "Github"
	| "Facebook"
	| "Instagram"
	| "LinkedIn"
	| "Email"
	| "Twitter"
	| "Twitch"
	| "YouTube"
	| "WhatsApp"
	| "Snapchat"
	| "Pinterest"
	| "TikTok"
	| "CodePen"
	| "Discord"
	| "GitLab"
	| "Reddit"
	| "Skype"
	| "Steam"
	| "Telegram"
	| "Mastodon";
