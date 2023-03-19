// interface Rule {
//   message: string
//   required?: boolean
//   pattern?: RegExp | string
// }

// interface Rules {
//   [key: string]: Rule[]
// }

// // 验证表单数据
// export const validate = (form: AnyObject, rules: Rules) => {
//   // 校验结果
//   let valid = true
//   // 遍历规则
//   for (let key in rules) {
//     // 获取规则数组，校验每个规则是否通过
//     rules[key].forEach((rule) => {
//       // 处理验证规则
//       if (rule.required) rule.pattern = /[\S]+/
//       // 兼容用户书写字符串格式的正则
//       const reg = new RegExp(rule.pattern as RegExp)
//       // 数据验证
//       if (!reg.test(form[key] || '')) {
//         // 提示用户
//         uni.showToast({ icon: 'none', title: rule.message })
//         // 修改校验结果为假
//         return (valid = false)
//       }
//     })
//     // 如果遇到假值，直接退出遍历
//     if (!valid) break
//   }
//   // 返回校验结果
//   return valid
// }
interface DAMNU_ENABLE {
  [key: string]: boolean // 字段扩展声明
}

import type { addTheShippingAddressParameter } from '@/types/addrees'
// addTheShippingAddressParameter
export const validate = (form: addTheShippingAddressParameter) => {
  for (let key in form) {

    if (
      form[key as keyof typeof form] === '' ||
      form[key as keyof typeof form] === undefined
    ) {
    if(typeof form[key as keyof typeof form] === 'string'){
      form[key as keyof typeof form]
    }
      uni.showToast({
        title: '请填写完整地址',
        icon: 'error',
        mask: true,
      })
      return false
    }
  }
  return form
}
