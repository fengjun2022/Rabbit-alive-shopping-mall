export type postLoginWxMinRequestBody = {
  /**
   * code 通过 wx.login() 获取
   */
  code: string;
  /**
   * 通过 getphonenumber 事件回调中获取
   */
  encryptedData: string;
  /**
   * 通过 getphonenumber 事件回调中获取
   */
  iv: string;
}

export type  postLoginWxMinItem = {
 /**
     * 用户名
     */
 account: string;
 /**
  * 用户头像
  */
 avatar: string;
 /**
  * 用户id
  */
 id: number;
 /**
  * 用户手机号
  */
 mobile: string;
 /**
  * 用户昵称
  */
 nickname: null | string;
 /**
  * 用于后续接口调用的token，有效期三天
  */
 token: string;
}