/**
 * Created by nick on 2018/6/23.
 */
import React from "react";
import PropTypes from "prop-types";

import {PullToRefresh,ListView} from 'antd-mobile';

import ReactDOM from 'react-dom';
import ImmutablePropTypes from "react-immutable-proptypes";

function MyBody(props) {
  console.log('MyBody.props',props);
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];


export default class MyListView extends React.PureComponent{

  static propTypes = {
    dataLv:ImmutablePropTypes.listOf(
      ImmutablePropTypes.contains({
        key: PropTypes.string.isRequired
      })
    ).isRequired,
    hasMore:PropTypes.bool.isRequired,
    onEndReached:PropTypes.func.isRequired,
    onRefresh:PropTypes.func.isRequired,

    renderRow:PropTypes.func.isRequired,

    renderHeader:PropTypes.func,
    renderSeparator:PropTypes.func,
  };

  static defaultProps = {
    hasMore:true,
    dataLv:[

    ],
    renderHeader:() => {return <span>header1111111</span>},
    renderSeparator:(sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    ),
    renderRow:(rowData, sectionID, rowID) => {

      const obj = data[0];
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{obj.title}</div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
              <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span>¥ {rowID}</div>
            </div>
          </div>
        </div>
      );
    },
  };

  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    let dataLv = dataSource.cloneWithRows(props.dataLv.toArray());
    let isLoading = props.hasMore;

    this.state = {
      dataSource:dataLv,
      isLoading: isLoading,
      height: document.documentElement.clientHeight * 3 / 4,
    };
  }

  componentDidMount() {

    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.ref__lv).parentNode.offsetTop;
    // simulate initial Ajax
    this.props.onEndReached && this.props.onEndReached();
    this.setState({
      height: hei,
    });
  }
  onEndReached = (event) => {
    console.log('onEndReached',event);
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading || !this.props.hasMore) {
      return;
    }
    console.log('onEndReached1',event);

    this.setState({ isLoading: true });
    this.props.onEndReached && this.props.onEndReached();
  };

  onRefresh = ()=>{
    if(this.state.isRefreshing){
      return;
    }
    this.props.onRefresh && this.props.onRefresh();

  };

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps',nextProps,this.props);
    if (nextProps.dataLv !== this.props.dataLv) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.dataLv.toArray()),
        isLoading: false,
      });
    }else if(!nextProps.hasMore &&this.props.hasMore){
      this.setState({
        isLoading: false,
        isRefreshing: false,
      });
    }
  }
  render(){
    let {
      // dataLv,
      renderHeader,
      renderSeparator,
      renderRow,
      onEndReached,
      onRefresh,

    } = this.props;

    let {isLoading} = this.state;

    return (
      <ListView
        ref={ref => this.ref__lv = ref}
        dataSource={this.state.dataSource}
        renderHeader={renderHeader}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderBodyComponent={()=> <MyBody/>}
        renderRow={renderRow}
        renderSeparator={renderSeparator}
        style={{
          // height: this.state.height,
          height: 200,  //todo need change
          overflow: 'auto',
        }}
        pageSize={1}
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        pullToRefresh={<PullToRefresh
          refreshing={this.state.isRefreshing}
          onRefresh={this.onRefresh}
        />}
        onEndReachedThreshold={10}
      />
    );
  }
}
