import { __ } from "@wordpress/i18n";

const attributes = {
	title: {
		type: "string",
		default: "",
	},
	featureValues: {
		type: "array",
		default: ["Enter feature"],
	},
};

export default attributes;
