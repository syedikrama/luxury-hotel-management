import React from 'react'
import Sidebar from '../layout/Sidebar/Sidebar'
import RoomList from './RoomList'
import Content from '../layout/Content/Content'
import ContentTop from '../components/ContentTop/ContentTop'
export default function Rooms() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ width: '100%' }}>
                <ContentTop />
                <RoomList />
            </div>
            {/* <Content /> */}
        </div>
    )
}
