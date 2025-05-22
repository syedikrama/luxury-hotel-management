import React from 'react'
import Sidebar from './layout/Sidebar/Sidebar'
import Content from './layout/Content/Content'

export default function Dashboard() {
    return (
        <div>
            <div style={{ display: 'flex' }}>

                <Sidebar />
                <Content />
            </div>
        </div>
    )
}
