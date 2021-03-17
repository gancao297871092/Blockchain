import React, { Component } from "react"
import { ListView } from 'antd-mobile'

class Index extends Component {
    constructor(props) {
        super(props)
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        })
        this.state = {
            dataSource
        }
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.data)
        })
    }

    render() {
        return (
            <ListView
                style={this.props.style}
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderRow={this.props.item}
                className="am-list"
                pageSize={4}
                useBodyScroll
                onEndReached={this.props.onEndReached}
                onEndReachedThreshold={10}
                onScroll={() => { console.log('scroll') }}
            />
        )
    }
}

export default Index