import React from 'react'
import { Link } from 'gatsby'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import FullWidthImage from './FullWidthImage'

const sumDigit = (id, sum = 0) => {
	if (id) {
		return sumDigit(Math.floor(id / 10), sum + (id % 10))
	}
	return sum
}

const getStyleKey = (id) => {
	while (id > 9) {
		id = sumDigit(id)
	}
	return id
}

const PostDetails = ({ post, id }) => {
	const title = post?.frontmatter?.title || post?.fields.slug
	const tags = post?.frontmatter?.tags || []
	const image = post?.frontmatter?.hero.childImageSharp
	const getKey = getStyleKey(id)
	const styleImg = [
		{
			width: '100%',
			height: '220px',
		},
		{ width: '70%', height: '210px', marginLeft: '15%' },
		{ width: '75%', height: '250px',  },

		{ width: '90%', height: '170px', marginLeft: '5%' },
		{
			width: '100%',
			height: '200px',
		},
		{ width: '50%', height: '250px', marginLeft: '25%' },
		{ width: '70%', height: '290px', marginLeft: '15%' },
		{ width: '55%', height: '200px', marginLeft: '22.5%' },
		{
			width: '100%',
			height: '200px',
		},
		{ width: '50%', height: '250px', marginLeft: '25%' },
	]

	const imageF = !!image ? getImage(image) : null

	return (
		<div className='shape-col-6 shape-col-12-sm post-item-list'>
			<article className='post-list-item'>
				<Link to={post.fields?.slug} itemProp='url'>
					<div
						className='img-container'
						style={{
							...styleImg[0],
							
						
						}}
					>
					
						<FullWidthImage height='100%' img={imageF} imgPosition='top'  style={{
									...styleImg[0],
									width: '100%',
									
									marginLeft: '0',
									
									
								}}/>
						
					</div>
					<h3
						style={{
							marginLeft: styleImg[0].marginLeft,
						}}
					>
						<span itemProp='headline'>{title}</span>
					</h3>
				</Link>
				<div
					className='info'
					style={{
						width: styleImg[0].width,
						marginLeft: styleImg[0].marginLeft,
					}}
				>
					<div className='tags'>
						{[tags[0], tags[1]].map((tag, key) => {
							return <>{tag ? <span key={key}>{tag}</span> : <></>}</>
						})}
					</div>
					<div className='date'>{post.frontmatter.date}</div>
				</div>
			</article>
		</div>
	)
}

export default PostDetails
