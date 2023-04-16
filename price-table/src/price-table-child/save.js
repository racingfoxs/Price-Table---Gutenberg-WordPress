import { RichText } from "@wordpress/block-editor";
import { useBlockProps } from "@wordpress/block-editor";

function FeatureItem({ value }) {
	return (
		<div>
			<RichText.Content
				tagName="p"
				value={value}
				className="my-custom-block-feature"
			/>
		</div>
	);
}

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save({
		className:"max-w-xs p-6 rounded-md shadow-md bg-gray-50 text-gray-900"
	});

	return (
		<div {...blockProps}>
			<RichText.Content
				tagName="h2"
				value={attributes.title}
				className="text-2xl text-white bg-black"
			/>
			{attributes.featureValues.map((featureValue, index) => (
				<FeatureItem key={index} value={featureValue} />
			))}
		</div>
	);
}
