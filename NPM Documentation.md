<<<<<<< HEAD
Downloaded npm with the following lines of code:
# installs fnm (Fast Node Manager)
winget install Schniz.fnm
# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression
# download and install Node.js
fnm use --install-if-missing 22
# verifies the right Node.js version is in the environment
node -v # should print `v22.11.0`
# verifies the right npm version is in the environment
npm -v # should print `10.9.0`

Downloaded software from: 
# https://nodejs.org/en

Checking versions return the following lines:
C:\Program Files\Microsoft Visual Studio\2022\Community>npm -v
10.9.0

C:\Program Files\Microsoft Visual Studio\2022\Community>node -v
v20.17.0

## Create a `package.json`
Created a new javascript file for the node.js tutorial. Took some tries to be able to debug first lines of code. 


  ```bash
  $ npm init
  ```

- As a result a file called `package.json` will be created:
  {
  "name": "nodejstut",
  "version": "1.0.0",
  "description": "first node.jstut", 
  //The tutorial i followed was: https://www.freecodecamp.org/news/get-started-with-nodejs/
  "main": "app.js",
  "scripts": {
   "dev": "node --inspect app.js",
    "start": "node app.js"
  },
  "author": "sarah rio",
  "license": "ISC"
}

## Install _Chalk_ package

C:\Windows\System32>npm install chalk

up to date, audited 46 packages in 1s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Windows\System32>npm fund
System32
+-- https://github.com/chalk/chalk?sponsor=1
|   `-- chalk@5.3.0
+-- https://github.com/tinyhttp/tinyhttp?sponsor=1
|   `-- @tinyhttp/app@2.4.0, @tinyhttp/cookie@2.1.1, @tinyhttp/accepts@2.2.3, @tinyhttp/content-disposition@2.2.2
+-- https://paulmillr.com/funding/
|   `-- chokidar@4.0.1, readdirp@4.0.2
+-- https://github.com/sponsors/sindresorhus
|   `-- dot-prop@9.0.0, type-fest@4.26.1, sort-on@6.1.0
+-- https://github.com/eta-dev/eta?sponsor=1
|   `-- eta@3.5.0
`-- https://github.com/sponsors/typicode
    `-- lowdb@7.0.1, steno@4.0.2

## npm module cowsay installed: 
 _____________
< Hello world >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

## All installed packages:
C:\Users\kathy>npm list --all
kathy@ C:\Users\kathy
└─┬ cowsay@1.6.0
  ├── get-stdin@8.0.0
  ├─┬ string-width@2.1.1
  │ ├── is-fullwidth-code-point@2.0.0
  │ └─┬ strip-ansi@4.0.0
  │   └── ansi-regex@3.0.1
  ├── strip-final-newline@2.0.0
  └─┬ yargs@15.4.1
    ├─┬ cliui@6.0.0
    │ ├─┬ string-width@4.2.3
    │ │ ├── emoji-regex@8.0.0 deduped
    │ │ ├── is-fullwidth-code-point@3.0.0
    │ │ └── strip-ansi@6.0.1 deduped
    │ ├─┬ strip-ansi@6.0.1
    │ │ └── ansi-regex@5.0.1
    │ └─┬ wrap-ansi@6.2.0
    │   ├─┬ ansi-styles@4.3.0
    │   │ └─┬ color-convert@2.0.1
    │   │   └── color-name@1.1.4
    │   ├─┬ string-width@4.2.3
    │   │ ├── emoji-regex@8.0.0 deduped
    │   │ ├── is-fullwidth-code-point@3.0.0
    │   │ └── strip-ansi@6.0.1 deduped
    │   └─┬ strip-ansi@6.0.1
    │     └── ansi-regex@5.0.1
    ├── decamelize@1.2.0
    ├─┬ find-up@4.1.0
    │ ├─┬ locate-path@5.0.0
    │ │ └─┬ p-locate@4.1.0
    │ │   └─┬ p-limit@2.3.0
    │ │     └── p-try@2.2.0
    │ └── path-exists@4.0.0
    ├── get-caller-file@2.0.5
    ├── require-directory@2.1.1
    ├── require-main-filename@2.0.0
    ├── set-blocking@2.0.0
    ├─┬ string-width@4.2.3
    │ ├── emoji-regex@8.0.0
    │ ├── is-fullwidth-code-point@3.0.0
    │ └─┬ strip-ansi@6.0.1
    │   └── ansi-regex@5.0.1
    ├── which-module@2.0.1
    ├── y18n@4.0.3
    └─┬ yargs-parser@18.1.3
      ├── camelcase@5.3.1
      └── decamelize@1.2.0 deduped


GitHub Repo für npm tutorial erstellt.
Unter https://github.com/riosarah/WMC_NPM.git abrufbar.
=======
Downloaded npm with the following lines of code:
# installs fnm (Fast Node Manager)
winget install Schniz.fnm
# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression
# download and install Node.js
fnm use --install-if-missing 22
# verifies the right Node.js version is in the environment
node -v # should print `v22.11.0`
# verifies the right npm version is in the environment
npm -v # should print `10.9.0`

Downloaded software from: 
# https://nodejs.org/en

Checking versions return the following lines:
C:\Program Files\Microsoft Visual Studio\2022\Community>npm -v
10.9.0

C:\Program Files\Microsoft Visual Studio\2022\Community>node -v
v20.17.0

## Create a `package.json`
Created a new javascript file for the node.js tutorial. Took some tries to be able to debug first lines of code. 


  ```bash
  $ npm init
  ```

- As a result a file called `package.json` will be created:
  {
  "name": "nodejstut",
  "version": "1.0.0",
  "description": "first node.jstut", 
  //The tutorial i followed was: https://www.freecodecamp.org/news/get-started-with-nodejs/
  "main": "app.js",
  "scripts": {
   "dev": "node --inspect app.js",
    "start": "node app.js"
  },
  "author": "sarah rio",
  "license": "ISC"
}

## Install _Chalk_ package

C:\Windows\System32>npm install chalk

up to date, audited 46 packages in 1s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Windows\System32>npm fund
System32
+-- https://github.com/chalk/chalk?sponsor=1
|   `-- chalk@5.3.0
+-- https://github.com/tinyhttp/tinyhttp?sponsor=1
|   `-- @tinyhttp/app@2.4.0, @tinyhttp/cookie@2.1.1, @tinyhttp/accepts@2.2.3, @tinyhttp/content-disposition@2.2.2
+-- https://paulmillr.com/funding/
|   `-- chokidar@4.0.1, readdirp@4.0.2
+-- https://github.com/sponsors/sindresorhus
|   `-- dot-prop@9.0.0, type-fest@4.26.1, sort-on@6.1.0
+-- https://github.com/eta-dev/eta?sponsor=1
|   `-- eta@3.5.0
`-- https://github.com/sponsors/typicode
    `-- lowdb@7.0.1, steno@4.0.2

## npm module cowsay installed: 
 _____________
< Hello world >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

## All installed packages:
C:\Users\kathy>npm list --all
kathy@ C:\Users\kathy
└─┬ cowsay@1.6.0
  ├── get-stdin@8.0.0
  ├─┬ string-width@2.1.1
  │ ├── is-fullwidth-code-point@2.0.0
  │ └─┬ strip-ansi@4.0.0
  │   └── ansi-regex@3.0.1
  ├── strip-final-newline@2.0.0
  └─┬ yargs@15.4.1
    ├─┬ cliui@6.0.0
    │ ├─┬ string-width@4.2.3
    │ │ ├── emoji-regex@8.0.0 deduped
    │ │ ├── is-fullwidth-code-point@3.0.0
    │ │ └── strip-ansi@6.0.1 deduped
    │ ├─┬ strip-ansi@6.0.1
    │ │ └── ansi-regex@5.0.1
    │ └─┬ wrap-ansi@6.2.0
    │   ├─┬ ansi-styles@4.3.0
    │   │ └─┬ color-convert@2.0.1
    │   │   └── color-name@1.1.4
    │   ├─┬ string-width@4.2.3
    │   │ ├── emoji-regex@8.0.0 deduped
    │   │ ├── is-fullwidth-code-point@3.0.0
    │   │ └── strip-ansi@6.0.1 deduped
    │   └─┬ strip-ansi@6.0.1
    │     └── ansi-regex@5.0.1
    ├── decamelize@1.2.0
    ├─┬ find-up@4.1.0
    │ ├─┬ locate-path@5.0.0
    │ │ └─┬ p-locate@4.1.0
    │ │   └─┬ p-limit@2.3.0
    │ │     └── p-try@2.2.0
    │ └── path-exists@4.0.0
    ├── get-caller-file@2.0.5
    ├── require-directory@2.1.1
    ├── require-main-filename@2.0.0
    ├── set-blocking@2.0.0
    ├─┬ string-width@4.2.3
    │ ├── emoji-regex@8.0.0
    │ ├── is-fullwidth-code-point@3.0.0
    │ └─┬ strip-ansi@6.0.1
    │   └── ansi-regex@5.0.1
    ├── which-module@2.0.1
    ├── y18n@4.0.3
    └─┬ yargs-parser@18.1.3
      ├── camelcase@5.3.1
      └── decamelize@1.2.0 deduped


GitHub Repo für npm tutorial erstellt.
Unter https://github.com/riosarah/WMC_NPM.git abrufbar.
>>>>>>> 4e6415b3e0e9abc423a96bc720cc1bded1ecc3d6
