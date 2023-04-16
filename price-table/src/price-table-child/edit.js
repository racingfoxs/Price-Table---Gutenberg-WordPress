import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { RichText } from "@wordpress/block-editor";
import { useBlockProps } from "@wordpress/block-editor";

function FeatureItem({ value, index, onChange, onRemove }) {
	return (
		<div className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-600 text-gray-600">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				className="flex-shrink-0 w-6 h-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
				></path>
			</svg>
			<RichText
				tagName="p"
				value={value}
				onChange={(content) => onChange(content, index)}
				placeholder={__("Enter feature")}
				className="my-custom-block-feature"
				aria-label={__("Feature {index}", { index: index + 1 })}
			/>
			<button
				onClick={() => onRemove(index)}
				aria-label={__("Remove feature {index}", { index: index + 1 })}
			>
				<span className=" items-center px-3 flex-shrink-0 text-blue-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-8 w-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
				</span>
			</button>
		</div>
	);
}
export default function Edit({ attributes, setAttributes }) {
	const [newFeature, setNewFeature] = useState("");
	const blockProps = useBlockProps({
		className: "max-w-xs p-6 rounded-md shadow-md bg-gray-50 text-gray-900",
	});
	const inputBlockProps = useBlockProps({
		className: "flex justify-start item-center gap-2",
	});
	const onTitleChange = (title) => {
		setAttributes({ title });
	};

	const onFeatureChange = (content, index) => {
		const featureValues = [...attributes.featureValues];
		featureValues[index] = content;
		setAttributes({ featureValues });
	};

	const onAddFeature = () => {
		const featureValues = [...attributes.featureValues, newFeature];
		setAttributes({ featureValues });
		setNewFeature("");
	};

	const onRemoveFeature = (index) => {
		const featureValues = [...attributes.featureValues];
		featureValues.splice(index, 1);
		setAttributes({ featureValues });
	};

	return (
		<div {...blockProps}>
			<RichText
				tagName="h2"
				value={attributes.title}
				onChange={onTitleChange}
				placeholder={__("Enter title")}
				className="my-custom-block-title"
				aria-label={__("Block title")}
			/>
			{attributes.featureValues.map((featureValue, index) => (
				<FeatureItem
					key={index}
					value={featureValue}
					index={index}
					onChange={onFeatureChange}
					onRemove={onRemoveFeature}
				/>
			))}
			<div {...inputBlockProps}>
				<input
					type="text"
					value={newFeature}
					onChange={(event) => setNewFeature(event.target.value)}
					placeholder={__("Enter new feature")}
					aria-label={__("New feature")}
				/>
				<button onClick={onAddFeature} aria-label={__("Add feature")}>
					<div className="flex-shrink-0">
						<div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-7 h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
						</div>
					</div>
				</button>
			</div>

			<div>
				<button
					type="button"
					className="px-8 py-3 font-semibold border rounded-full border-gray-800 text-gray-800"
				>
					Get Started
				</button>
				
			</div>
		</div>
	);
}
