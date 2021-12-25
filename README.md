# eatComplete
Nutritional meal recommender app
By Ian Hafkenschiel


## License

Copyright 2021
All rights reserved.
Distribution of the software in any form is only allowed with explicit, prior permission from the owner.

## Install dependencies

```sh
yarn
```

## Running locally

Run backend from Github repo `eatcomplete-backend-express`

Run front end:
```
yarn dev
```

This will start up a create-react-app on port `3000`

Create-react-app will auto hot-reload any changes in front-end directory

Navigate to `http://localhost:3000` in your browser.

## Building front-end

```sh
yarn build:front-end
```

## Architecture

1. Package Manager - Yarn
2. Linter - ESLint + Airbnb Style
3. Formatter - Prettier
4. Pre-commit hooks - Husky
5. Language - TypeScript *WIP
6. Query Language/Server - Apollo + GraphQL
7. Frontend framework - React 18 Alpha
8. Data Architecture - Relay*
9. UI Component Library - Material UI
10. Theme - Devias Material Kit
11. UI Component Explorer - Storybook*

* Not yet implemented