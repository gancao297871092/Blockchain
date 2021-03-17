import React, { useState } from "react"
import { ListView } from 'antd-mobile'

const Demo = () => {

    const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    })

    const [data, setData] = useState(dataSource.cloneWithRows([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))

    const onEndReached = () => {
        console.log('reach end')
    }

    const row = (rowData, sectionID, rowID) => {
        return <div style={{ width: 300, height: 50, background: 'red', marginTop: 20 }}>
        </div>
    }

    return <ListView
        dataSource={data}
        renderHeader={() => <span>header</span>}
        renderRow={row}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { console.log('scroll') }}
        scrollRenderAheadDistance={500}
        onEndReached={onEndReached}
        onEndReachedThreshold={10}
    />
}






export default Demo

