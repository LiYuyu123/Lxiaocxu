import { proccessObject } from "./utils.js";
import {baseUrl} from "../config";

export const $http = (option) => {
    let commonHeaders = { "Content-Type": "application/json;charset=UTF-8" };
    const data = proccessObject(option.data) || {};
    const isError = option.isError || 1;
    let url = baseUrl + option.path
    const method = option.method || "get";
    let headers = Object.assign(commonHeaders);
    if (option.headers) {
        headers = Object.assign(commonHeaders, option.headers);
    }
    return new Promise((resolve,reject)=>{
        uni.requset({
            url,
            headers,
            data,
            method,
            dataType: "json",
            success:(res)=>{
                if (option.isThird === 1) {
                    resolve(res.data);
                } else {
                    if(res.data.code === 200) {
                        resolve(res.data)
                        if (option.successCB) {
                            option.successCB(res.data);
                        }
                    } else {
                        if (isError == 1) {
                            let msg = res.data.msg || "请求出错啦!";

                            // 此处不加延迟, 没法正确显示toast,初步判断是线程问题
                            setTimeout(() => {
                                // #ifdef MP-ALIPAY
                                uni.showToast({
                                    icon: "fail",
                                    title: msg,
                                });
                                // #endif
                                // #ifdef MP-WEIXIN
                                uni.showToast({
                                    icon: "none",
                                    title: msg,
                                });
                                // #endif
                            }, 20);
                        }
                        resolve(res.data);
                        if (option.errorCB) {
                            option.errorCB(res.data);
                        }
                    }
                }
            },
            fail: (err) => {
                reject(err);
                if (option.errorCB) {
                    option.errorCB(err);
                }
            },
            complete: () => {
                if (option.finallyCB) {
                    option.finallyCB();
                }
            },
        })
    })
}