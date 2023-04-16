import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import Edit from "./edit";
import save from "./save";
import attributes from "./arritubes";
import "./index.scss";


registerBlockType( 'tailwind-wp-starter-code/price-table-child', {
	title: 'Price Table Child',
	icon: 'smiley',
	category: 'widgets',
	parent: [ 'tailwind-wp-starter-code/price-table' ],
	attributes,
	edit: (props) => <Edit {...props} />,
	save,
} );
