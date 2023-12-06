export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }
  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const pathname = window.location.pathname
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html
      })

    /* const {pathname} = window.location desisturação 
            const {href, host, port} = window.location
            pode fazer isso com um monte de coisa ao mesmo tempo e economiza codigo
        */
  }
}

