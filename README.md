# imgur-uploader

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

1. 로그인 버튼을 누르면, imgur OAUTH 페이지로 이동
2. 사용자가 권한을 준다.
3. IMGUR가 AccessToken과 함께 우리 App으로 redirect
4. /oauth2/callback으로 오면, `AuthHandler` 컴포넌트 렌더
5. `AuthHandler` 컴포넌트에서 tocken 추출
6. 추출한 토큰으로 `vuex`의 `state.token`을 갱신
7. `/`으로 리다이렉트
