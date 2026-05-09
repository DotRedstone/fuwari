import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
  ExpressiveCodeConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "DotRedstone",
  subtitle: "DotRedstone",
  lang: "zh_CN",
  themeColor: {
    hue: 330, // 主题色的默认色调，从 0 到 360
    fixed: false, // 是否对访客隐藏主题色选择器
  },
  banner: {
    enable: false,
    src: "", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
    position: "center", // 等效于 object-position，默认为 center
    credit: {
      enable: false, // 是否显示横幅图片的版权文字
      text: "", // 要显示的版权文字
      url: "", // (可选) 原作者或艺术品页面的 URL 链接
    },
  },
  toc: {
    enable: true, // 是否在文章右侧显示目录
    depth: 2, // 目录中显示的最大标题深度，从 1 到 3
  },
  favicon: [
    // 保持此数组为空以使用默认 favicon
    // {
    //   src: '/favicon/icon.png',    // favicon 路径，相对于 /public 目录
    //   theme: 'light',              // (可选) 'light' 或 'dark'，仅当你为亮色和暗色模式设置了不同的 favicon 时设置
    //   sizes: '32x32',              // (可选) favicon 尺寸，仅当你拥有多种尺寸的 favicon 时设置
    // }
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: "GitHub",
      url: "https://github.com/DotRedstone", // 内部链接不应包含基础路径，因为它会自动添加
      external: true, // 是否显示外部链接图标，并在新标签页中打开
    },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: "https://oss.bdot.in/avatar/ee42c2b3569583cad9b857e954d90de3.png", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
  name: "点",
  bio: "",
  links: [
    {
      name: "GitHub",
      icon: "fa6-brands:github", // 访问 https://icones.js.org/ 查看可用图标列表
      url: "https://github.com/DotRedstone",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
  theme: "github-dark",
};

