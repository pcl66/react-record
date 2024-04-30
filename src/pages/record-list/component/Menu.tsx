export const Menu = () => {
  return (
    <div>
      <div className="flex flex-col bg-purple-500 py-6 px-2 text-white">
        <span className="text-[22px]">未登录用户</span>
        <span className="text-[12px]">点击这里登录</span>
      </div>
      <div className="flex flex-col gap-5 p-5">
        <span>统计图表</span>
        <span>导出数据</span>
        <span>自定义分类</span>
        <span>记账提醒</span>
      </div>
    </div>
  )
}
