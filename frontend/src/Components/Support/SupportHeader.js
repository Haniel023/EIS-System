import React from 'react'
import PropTypes from 'prop-types'


const SupportHeader = ({ title }) => {
    return (
        <div>
            <h1 className='supportHeader'>{title}</h1>
        </div>
    )
}

SupportHeader.defaultProps = {
    title: 'Support Page',
}

SupportHeader.protoTypes = {
    title: PropTypes.string.isRequired,
}

export default SupportHeader