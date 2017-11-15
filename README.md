### create-react-app
start project
`npm start` or `yarn start`
bulid project
`npm run build` or `yarn build`

### problem
use antd component 需要 updating `scripts` in package.json file，but 修改后会导致webpack.config中配置的`alias`别名无法使用
antd的配置
```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom"
  },
```
