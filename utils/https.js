const baseURL="http://localhost:9999"
const fetch=(url,method="get",data={},header)=>{
    // let header = {
    //     'content-type': 'application/json',
    // };
    return new Promise(function(resolve, reject) {
        wx.showLoading({
          title: '加载中...',
        })
        wx.request({
            url: baseURL + url,
            method: method,
            data: method === "post" ? JSON.stringify(data) : data,
            header: header||{
                'content-type': 'application/json',
            },
            success(res) {
                let {code,message}=res.data;
                console.log("res:",res)
                if (code == 0) {
                    wx.hideLoading()
                    resolve(res);
                } else {
                    //其他异常
                    wx.showToast({title:message||""})
                    reject('运行时错误,请稍后再试');
                }
            },
            fail(err) {
                //请求失败
                wx.showToast({title:err.message||""})
                reject(err)
            }
        })
    })
}
module.exports={
    fetch:fetch,
    baseURL:baseURL
}