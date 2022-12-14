const { slash } = require( `gatsby-core-utils` );
const singlePostPageTemplate = require.resolve(`../src/templates/post/index.js`);
// const {SeoFragment} = require( './fragments/seo/index.js' );

// Get all the posts.
const GET_POSTS = `
query GET_POSTS {
    allWpPost {
        slug
      }
    }

  }
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get all posts and posts, this will return the posts and posts.
		return await graphql( GET_POSTS )
			.then( ( { data } ) => {

				const { HWGraphQL: { posts } } = data;

				return { posts: posts };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e posts to create posts.
	await fetchPosts().then( ( { posts } ) => {

		// 2. Create Single PAGE: Loop through all posts and create single posts for posts.
		posts &&
		posts.map( ( page ) => {

			createPage( {
				path: `blog/${ page.slug }`,
				component: slash( singlePostPageTemplate ),
				context: { ...page }, // pass single post page data in context, so its available in the singlePagetTemplate in props.pageContext.
			} );

		} );

	} )

};