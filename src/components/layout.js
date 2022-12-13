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
