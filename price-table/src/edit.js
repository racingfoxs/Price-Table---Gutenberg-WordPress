import { __ } from "@wordpress/i18n";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import "./editor.scss";
import "./price-table-child";


export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({});

	const blockPropsFlex = useBlockProps({
		className: "flex justify-center items-start"
	});

	const innerBlocksProps = useInnerBlocksProps(blockPropsFlex, {
		allowedBlocks: ["tailwind-wp-starter-code/price-table-child"],
		template: [["tailwind-wp-starter-code/price-table-child"]],
		templateLock: false,
		orientation: "horizontal",
	});

	return (
		<div {...blockProps}>
			<div>
				<div {...innerBlocksProps} />
			</div>
		</div>
	);
}
