const createFrontPage = require("./create-pages/front-page")
const createAllPosts = require("./create-pages/posts")
const path = require( 'path' );

// Create all pages.
exports.createPages = async ( { actions, graphql } ) => {
	await createFrontPage( { actions, graphql } );
	// await createAllPosts( { actions, graphql } );

};


exports.onCreateWebpackConfig = ({ stage, actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'~': path.resolve(__dirname, '../../node_modules')
			}
		},
	})
};