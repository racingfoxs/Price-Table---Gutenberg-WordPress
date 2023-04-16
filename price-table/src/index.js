import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import attributes from "./arritubes";
import "tailwindcss/tailwind.css";

registerBlockType(metadata.name, {
	attributes,
	edit: (props) => <Edit {...props} />,

	save,
});
