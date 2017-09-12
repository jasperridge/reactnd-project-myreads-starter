import React, { Component } from 'react'
import Shelf from './Shelf'

class Bookshelf extends Component {
	render() {
		const { books } = this.props
		return <Shelf />
	}
}

export default Bookshelf
