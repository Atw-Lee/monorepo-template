# What is this?

这是一个基于 Turborepo+pnpm+changesets+dumi 搭建的 monorepo 多包组件库。

## What's inside?

这个工程包含`packages`及`apps`

> 每个包都是 100%的 [TypeScript](https://www.typescriptlang.org/)

### Apps

- `docs`: 一个基于[dumi2](https://d.umijs.org/)搭建的组件静态站点

### Packages

- `eslint-config-custom`: 一个可被共享的自定义 eslint 配置，我们使用了 alloy 的规则，如果你需要自己拓展也没有问题
- `tsconfig`: 一个可被共享的 tsconfig 配置文件，我们设置了 base 和 react-library 两个配置，当然你也可以自己定义
- `utils`: 工具包
- `ui`: UI 组件包

## Develop

要开发所有应用程序和包，运行以下命令:

```
pnpm dev
```

你可以预览到 app 下的 docs 前端工程

## Build

要构建所有的应用和包，运行以下命令:

```
pnpm build
```

产物：

- `docs`——docs-dist
- `utils`——lib
- `ui`——es、lib、dist

## What you need to do

- 修改每个包的名称，前边的组织换成你需要的
- .npmrc 文件中的 registry 换成你的私有源
