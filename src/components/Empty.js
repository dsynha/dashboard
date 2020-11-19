import React from 'react'
import { Img } from 'react-image'

import Space from '../assets/images/space.svg';

export const Empty = () => {
    return (
        <div className="d-flex flex-column text-center" id="empty">
            <div>
                <Img src={Space} />
            </div>
            <div className="mt-4">
                <h2>There is still nothing here</h2>
            </div>
            <div>
                <span>Add some repositories by clicking add new repository</span>
            </div>
        </div>
    )
}
