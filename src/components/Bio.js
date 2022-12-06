import * as React from 'react'
import FullWidthImage from './FullWidthImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTwitter,
	faInstagram,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const Bio = ({
	author,
	descripcion,
	image,
	twitter,
	instagram,
	facebook,
	big,
	post,
}) => {
	const side = big ? '450px' : post ? '90px' : ''
	const imageStyles = big
		? {
				mixBlendMode: 'screen',
				filter: 'grayscale(89%) contrast(1.1) brightness(105%)',
				transitionProperty:
					'opacity, filter, transform, mix-blend-mode !important',
		  }
		: post
		? {
				position: 'relative',
				overflow: 'hidden',
				borderRadius: '50%',
				
		  }
		: {}


	return (
		<div className='bio shape-row'>
			<div
				className={
					big
						? 'shape-col-5-np shape-col-12-md-np bigBio'
						: 'shape-col-2-np  shape-col-4-md-np  shape-col-4-xs-np'
				}
			>
				{image?.childImageSharp && (
					<div className='img-container'>
						<FullWidthImage
							img={image}
							imgPosition='top left'
							height={side}
							width={side}
							style={{
								...imageStyles,
							}}
                            position={{justifyContent: 'right'}}
						/>
					</div>
				)}
			</div>

			<div
				className={
					big
						? 'shape-col-6 shape-col-12-md'
						: 'shape-col-10 shape-col-8-md shape-col-12-sm'
				}
			>
				{author && (
					<>
						<p>
							<span>{author}</span>
							<br></br>
							{descripcion || null}
							<br></br>
						</p>
						<ul>
							{twitter && (
								<li>
									<a href={`https://twitter.com/${twitter}`}>
										<FontAwesomeIcon icon={faTwitter} /> @
										{twitter.replace('@', '')}
									</a>
								</li>
							)}
							{instagram && (
								<li>
									<a href={`https://www.instagram.com/${instagram}`}>
										<FontAwesomeIcon icon={faInstagram} /> @
										{instagram.replace('@', '')}
									</a>
								</li>
							)}
							{facebook && (
								<li>
									<a href={`https://www.facebook.com/${facebook}`}>
										<FontAwesomeIcon icon={faFacebook} />{' '}
										{facebook.replace('@', '')}
									</a>
								</li>
							)}
						</ul>
					</>
				)}
			</div>
			<div className='shape-col-2'></div>

            
		</div>
	)
}

export default Bio
