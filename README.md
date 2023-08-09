# What is this?

这是一个基于 Turborepo+pnpm+changesets+dumi 搭建的 monorepo 多包组件库。

## What's inside?

这个工程包含`packages`及`apps`

> 每个包都是 100%的 [TypeScript](https://www.typescriptlang.org/)

### Apps

- `docs`: 一个基于[dumi2](https://d.umijs.org/)搭建的组件静态站点

### Packages

- `eslint-config-custom`: 一个可被共享的自定义 eslint 配置(包括 `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: 一个可被共享的 tsconfig 配置文件
- `utils`: 一个可被共享的工具类包
- `ui`: 一个在此工作区内可被共享的 UI 组件库

## Develop

要开发所有应用程序和包，运行以下命令:

```
pnpm dev
```

## Build

要构建所有的应用和包，运行以下命令:

```
pnpm build
```

产物：

- `docs`——docs-dist
- `utils`——lib
- `ui`——es/lib

## What you need to do

- 修改每个包的名称，前边的组织换成你需要的
- 。npmrc 文件中的 registry 换成你的私有源
