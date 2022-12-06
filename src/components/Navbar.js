import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { StickyContainer, Sticky } from 'react-sticky'

import { useLocation } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTwitter,
	faInstagram,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

// import SearchBar from "./searchBar"
// import Contacto from "../../site/settings/contacto.json"
import {
	iconMontana2,
	iconBisonte,
	iconHojitas,
	iconMontana,
	iconPulpo,
	iconHongos,
	iconVibora,
	iconArbol,
	iconLobo,
} from '../../site/img/iconos'

const Navbar = ({ data, full, className }) => {
	const { contacto } = {ontacto: ''}
	const location = useLocation()
	const path = location.pathname

	const {twitter,
		instagram} = contacto || {}
	const [id, setId] = useState(0)
	const findIcon = [
		iconMontana2,
		iconBisonte,
		iconHojitas,
		iconMontana,
		iconPulpo,
		iconHongos,
		iconVibora,
		iconArbol,
		iconLobo,
	]

	useEffect(() => {
		const interval = setInterval(() => {
			setId(() => Math.floor(Math.random() * (9 - 1 + 1) + 1))
		}, 10000)
		return () => clearInterval(interval)
	}, [])

	const isContactOrAbout =
		location.pathname.includes('contact') || location.pathname.includes('tags')
			? 'green'
			: location.pathname.includes('about')
			? 'about-header'
			: ''

	return (
		<div className='shape-row header'>
			<div className={`${!full ? 'flag-header-green' : ''} flag-header`}>
				<Link to='/' itemProp='url'>
					<img src={findIcon[id] || iconMontana2} alt='icon' />
				</Link>
			</div>
			<div className='item'>
				<div className='block first'>
					<Link to={'/contact'} itemProp='url'>
						Contacto
					</Link>
				</div>

				<div className='block text'>
					<Link to='/about' itemProp='url'>
						Acerca de
					</Link>
				</div>

				{twitter ? (
					<div className='block'>
						<a
							href={`https://twitter.com/${twitter}`}
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</div>
				) : null}

				{instagram ? (
					<div className='block'>
						<a
							href={`https://www.instagram.com/${instagram}`}
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</div>
				) : null}
			</div>

			{/* {full && (
        <div className="end">
          <SearchBar data={data} />
        </div>
      )} */}
		</div>
	)
}

export default Navbar
