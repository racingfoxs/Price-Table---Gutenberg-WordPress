import { useBlockProps } from "@wordpress/block-editor";
import { useInnerBlocksProps } from "@wordpress/block-editor";
import "tailwindcss/tailwind.css";

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save();
  const blockPropsFlex = useBlockProps.save({
		className: "flex justify-center items-center"
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockPropsFlex);
	return (
		<div {...blockProps}>
			<div {...innerBlocksProps} />
		</div>
	);
}
