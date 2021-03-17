import React, { useState, useEffect } from "react"
import { ListView } from 'antd-mobile'

const Index = ({ item, header, style = {} }) => {

    const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
    })

    const [data, setData] = useState(dataSource.cloneWithRows([]))
    const [rdata, setRdata] = useState([])
    
    // const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch()
    }, [])

    const fetch = () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12]
        setData(dataSource.cloneWithRows(list))
        setRdata(list)
    }

    const onEndReached = () => {
        console.log(1)
        // const newList = rdata.concat([7, 8, 9])
        // setData(dataSource.cloneWithRows(newList))
        // setRdata(newList)
    }

    return <ListView
        style={style}
        dataSource={data}
        renderHeader={header}
        renderRow={item}
        className="am-list"
        pageSize={4}
        // useBodyScroll
        scrollRenderAheadDistance={500}
        onEndReached={onEndReached}
        onEndReachedThreshold={10}
    />
}

export default Index

