# Dashboard routes

> Link
```json
[{
  path: "/",
  name: "Home",
  icon: <Compass size={size} strokeWidth={strokeWidth} />,
  badge: {
    type: "danger",
    value: "5"
  }
}]
```

Routes are dynamically defined in `/lib/routes.js` and follow the given structure.

##### Links

Where:

- path - path to your route
- name - the text appearing in the sidebar
- icon - icon element displayed in the sidebar
- badge - (optional) used to display the badge element. `type` takes any one of bootstrap color types.

##### Sub menus
> Link with submenu
```json
[{
  path: "/",
  name: "Home",
  icon: <Compass size={size} strokeWidth={strokeWidth} />,
  badge: {
    type: "danger",
    value: "5"
  },
  children: [
    {
      path: '/apps/calendar',
      name: 'Calendar'
    },
    {
      path: '/apps/messages',
      name: 'Messages'
    }
  ]
}]
```

Where:

- path - path to your route
- name - the text appearing in the sidebar
- icon - in React - icon element displayed in the sidebar, in Hugo - path to lottie animated icon
- badge - (optional) used to display the badge element. `type` takes any one of bootstrap color types.
- Children - an array of submenu objects. The object takes in path and name
