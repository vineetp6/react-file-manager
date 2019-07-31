import React from 'react'

const Footer = () => {
	const SwitchMobileView = () => console.log('Mobile View!')
	const SwitchTabletView = () => console.log('Tablet View!')
	const SwitchDesktopView = () => console.log('Desktop View!')
	return (
		<footer className="window__footer">
			<span>Footer</span>
			<div className="window__responsive__actions">
				<div onClick={() => SwitchMobileView()}>M</div>
				<div onClick={() => SwitchTabletView()}>T</div>
				<div onClick={() => SwitchDesktopView()}>D</div>
			</div>
		</footer>
	)
}

export default Footer
