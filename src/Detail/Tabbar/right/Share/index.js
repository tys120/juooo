import React from 'react'
import { ActionSheet,  Toast } from 'antd-mobile'

class Share extends React.Component{
    dataList = [
        { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
        { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
        { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
        { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
      ].map(obj => ({
        icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} alt="pic" />,
        title: obj.title,
      }));
    render(){
        return <div>
            <span className="iconfont icon-fenxiang" onClick={this.showShareActionSheet}></span>
        </div>
    }
    showShareActionSheet = () => {
        ActionSheet.showShareActionSheetWithOptions({
          options: this.dataList,
          // title: 'title',
          message: '请选择分享方式',
        },
        (buttonIndex) => {
          this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
          // also support Promise
          return new Promise((resolve) => {
            Toast.info('分享成功');
            setTimeout(resolve, 300);
          });
        });
      }
}
export default Share