import { readFile } from "node:fs/promises";
import { SITE } from "config";
import satori, { type SatoriOptions } from "satori";
import sharp from "sharp";

const BASE64_LOGO =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFjSURBVHgB7ZY9TsNAEIXf2G6gygEIbIWSjgaSMtyAGwAnIJwg4QTACThCcgNcEtNQ2Sk3PoG7VGRYWwmy5Ni7kdayIvlr8rPPO0/2vPECLS0NQ6bCi/5gpj6usouYbuXyS+bXRW8omPgz/c4MP14uHk329WBOJ62j0WTrRFrdPw4apnEDhzyCQxDd3vWDTuQSJUYGVINNGDyCOcIh50OrUs2sNSD6gydVfArLqPg9qyT5lT1w1huOGHiDZVRcX2S0yPYtNZDm2nU2M9guDrzHYTDd/fbKimdDhakDu+XncRSM8/8U7oAQo852ognYRdL6tDAdCwb4ZF1P8XR8Sz9BlYHz/uAV23lvDeJk37ujYCDNuorGGJYhcGnxlKwJa816+P1TpfG6lzd3dWV9FQbafT3XBX55o313q9E6gXlz+vmsVxqQUTA3EaoDyT3sp6M9DxzRgYSZV0QkNbLdeoKWlmPhDzzzc3Jz944vAAAAAElFTkSuQmCC";

export interface OgData {
	title: string;
	date: Date;
}

/**
 * Opengraph template to generate svg
 */
const Template = (props: OgData) => (
	<div
		style={{
			height: "100%",
			width: "100%",
			display: "flex",
			backgroundColor: "white",
			backgroundImage:
				"radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
			backgroundSize: "100px 100px",
			fontFamily: "JetBrainsMono-Bold",
		}}
	>
		<div
			style={{
				padding: "20px",
				display: "flex",
				width: "100%",
				height: "100%",
				justifyContent: "center",
				alignItem: "stretch",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					border: "1px solid #374151",
					boxShadow: "5px 5px 0px #374151",
					width: "100%",
					height: "100%",
					padding: "10px",
				}}
			>
				<div
					style={{
						fontSize: "32px",
						fontWeight: "900",
						lineHeight: "3rem",
						padding: "10px 0 50px 0",
						color: "#374151",
						flex: 1,
						display: "flex",
						fontFamily: "PlusJakartaSans",
					}}
				>
					{props.title}
				</div>
				<div
					style={{
						fontSize: "16px",
						fontWeight: "900",
						color: "#374151",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div>
						{props.date.toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</div>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span style={{ marginRight: "16px" }}>Jafar Aziz</span>
						<img src={BASE64_LOGO} alt={props.title} width={24} height={24} />
					</div>
				</div>
			</div>
		</div>
	</div>
);

/**
 * generate filename / path for generated OG images
 *
 * @param filename filename in asset folder
 * @returns
 */
export const getOgImagePath = (filename: string = SITE.title) => {
	let path = filename;

	if (path.startsWith("/")) path = path.substring(1);

	if (path.endsWith("/")) path = path.substring(0, path.length - 1);

	if (path === "") path = SITE.title;

	return `./open-graph/${path}.png`;
};

/**
 * generate opengraph image with satori and return a buffer
 *
 * @param text
 */
const generateOgImage = async (
	text: string = SITE.title,
	date: Date = new Date(),
): Promise<Buffer> => {
	const options: SatoriOptions = {
		width: 600,
		height: 315,
		embedFont: true,
		fonts: [
			{
				name: "JetBrainsMono",
				data: await readFile("./src/assets/font/JetBrainsMono-Bold.ttf"),
				weight: 600,
				style: "normal",
			},
			{
				name: "PlusJakartaSans",
				data: await readFile("./src/assets/font/PlusJakartaSans-Bold.ttf"),
				weight: 900,
				style: "normal",
			},
		],
	};

	const svg = await satori(
		Template({
			title: text,
			date: date,
		}),
		options,
	);

	const sharpSvg = Buffer.from(svg);

	const buffer = await sharp(sharpSvg).toBuffer();

	return buffer;
};

export default generateOgImage;
