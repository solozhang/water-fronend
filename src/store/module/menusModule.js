let menus = [
  { id: 0, level: 1, name: '瀚源水平衡测试系统', type: "link", url: "/detail/quickstart" },
  {
    id: 1,
    level: 1,
    name: '项目数据',
    type: "button",
    isExpanded: false,
    isSelected: false,
    subMenu: [
      { id: 21, level: 2, name: '宇通客车', type: "link", url: "/detail/tutorial" },
      { id: 22, level: 2, name: '豫新发电', type: "link", url: "/detail/toh-pt1" },
      { id: 23, level: 2, name: '巩义水务局', type: "link", url: "/detail/toh-pt2" },
    ]
  },
  {
    id: 2,
    level: 1,
    name: '项目管理',
    type: "button",
    isExpanded: false,
    isSelected: false,
    subMenu: [
      { id: 31, level: 2, name: '宇通客车', type: "link", url: "/detail/architecture" },
      { id: 32, level: 2, name: '豫新发电', type: "link", url: "/detail/architecture" },
      { id: 33, level: 2, name: '巩义水务局', type: "link", url: "/detail/architecture" }
    ]
  },
  { id: 3, level: 1, name: '设备管理', type: "link", url: "/detail/api" },
  { id: 4, level: 1, name: '系统管理', type: "link", url: "/detail/api" }
];
let levelNum = 1;
let startExpand = []; // 保存刷新后当前要展开的菜单项
function setExpand(source, url) {
  let sourceItem = '';
  for (let i = 0; i < source.length; i++) {
    sourceItem = JSON.stringify(source[i]); // 把菜单项转为字符串
    if (sourceItem.indexOf(url) > -1) { // 查找当前 URL 所对应的子菜单属于哪一个祖先菜单
      if (source[i].type === 'button') { // 导航菜单为按钮
        source[i].isSelected = true; // 设置选中高亮
        source[i].isExpanded = true; // 设置为展开
        startExpand.push(source[i]);
// 递归下一级菜单，以此类推
        setExpand(source[i].subMenu, url);
      }
      break;
    }
  }
}
const state = {
  menus,
  levelNum
};
const mutations = {
  findParents(state, payload) {
    if (payload.menu.type === "button") {
      payload.menu.isExpanded = !payload.menu.isExpanded;
    } else if (payload.menu.type === "link") {
      if (startExpand.length > 0) {
        for (let i = 0; i < startExpand.length; i++) {
          startExpand[i].isSelected = false;
        }
      }
      startExpand = []; // 清空展开菜单记录项
      setExpand(state.menus, payload.menu.url);
    };
  },
  firstInit(state, payload) {
    setExpand(state.menus, payload.url);
  }
}
export default {
  state,
  mutations
};
