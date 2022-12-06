import * as React from 'react'
import { useLocation } from '@reach/router';

import Navbar from '../components/Navbar'
import { StickyContainer, Sticky } from 'react-sticky'


import Cursor from './Cursor'


import 'shapes/lib/main.css'

import './all.css'
import './styles.css'
import Hero from './Hero'

const TemplateWrapper = ({ children }) => {
	const { title, description } = {}
	const location = useLocation();
 
	const isRootPath = location.pathname === '/'
	const isAbout = location.pathname.includes('about')

	
	return (
		<StickyContainer>
			<div className={`${isAbout ? 'about' : ''}`}>
				<head>
					<html lang='es' />
					<title>{title}</title>
					<meta name='description' content={description} />
					<meta property="image" content="https://www.lasrepublicasdelosalvaje.blog/img/og-image.jpg"/>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href={`https://www.lasrepublicasdelosalvaje.blog/img/apple-touch-icon.png`}
					/>
					<link
						rel='icon'
						type='image/png'
						href={`https://www.lasrepublicasdelosalvaje.blog/img/favicon-32x32.png`}
						sizes='32x32'
					/>
					<link
						rel='icon'
						type='image/png'
						href={`https://www.lasrepublicasdelosalvaje.blog/img/favicon-16x16.png`}
						sizes='16x16'
					/>

					<link
						rel='mask-icon'
						href={`https://www.lasrepublicasdelosalvaje.blog/img/safari-pinned-tab.svg`}
					
					/>
					

	
					<meta property="og:type" content="website"/>
					<meta property="og:url" content={`https://www.lasrepublicasdelosalvaje.blog/`}/>
					<meta property="og:title" content={title}/>
					<meta property="og:description" content={description}/>
					<meta property="og:image" content={`https://www.lasrepublicasdelosalvaje.blog/img/og-image.jpg`}/>

			
					<meta property="twitter:card" content="summary_large_image"/>
					<meta property="twitter:url" content="https://www.lasrepublicasdelosalvaje.blog/"/>
					<meta property="twitter:title" content={title}/>
					<meta property="twitter:description" content={description}/>
					<meta property="twitter:image" content="https://www.lasrepublicasdelosalvaje.blog/img/og-image.jpg"/>

				</head>

				<Sticky topOffset={isRootPath ? 150 : 200}>
					{({ style, isSticky }) => {
						const indexClasses =
							isRootPath && isSticky ? 'full' : !isRootPath ? 'full' : ''
						const animate = isSticky
							? 'animate__animated animate__slideInDown'
							: ''

						return (
							<header
								style={style}
								className={`global-header ${indexClasses} ${animate} `}
							>
								<Navbar
									className={`${indexClasses} ${animate}`}
									full={isSticky}
								/>
							</header>
						)
					}}
				</Sticky>

				<div >
					{isRootPath ? <Hero></Hero>: <></>}
					{children}
				</div>
			
				<Cursor></Cursor>
			</div>
		</StickyContainer>
	)
}

export default TemplateWrapper
