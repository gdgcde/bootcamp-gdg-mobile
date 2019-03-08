UP AND RUNNING

I. Glogal dependencies

    1. Install Node 8+
    2. Run "yarn global add expo-cli"

II. Creating project

    1. Run "expo init AwesomeProject"
    2. Selecte blank template
    3. This has installed the following packages: react, react-native and expo, you can see on package.json

III. Start project

    1. Run "yarn start" or "expo start"

IV. Run and debugging
Cuando desarrollas con Expo, normalmente se escribe código y ejecuta el metro bundler [1] en su computadora local,
pero luego se desea cargar la aplicación en su teléfono.
También el cliente Expo abre el Expo dev tools, un panel de control para desarrollar la aplicación.

    1. The Expo dev tools run on http://localhost:19002/
    2. The Expo app run on http://localhost:19001/debugger-ui

V. Making your first changes

    1. Can't see your changes?

       a. Live reloading (default) [2] or Hot reloading [3]
       c. Development mode
       d. Restart the app

    2. Manually reloading the app

VI. Basic concepts

    1. State (branch state)
    2. Props (branch props, check commits)
    3. Style (branch styles)
    4. Network (branch network)

VII. Twitter app

Refs:
[1] Es un servidor http que compila el código JS usando Babel y sirve en el Expo app.
[2] Reload or refreshes the entire app if a file changes, losing the state of the app.
[3] Only refreshes the files that were changed without loging the state of the app.
