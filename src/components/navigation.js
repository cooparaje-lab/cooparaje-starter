import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Inicio",
    slug: "/",
    ariaLabel: "Volver al inicio",
  },

  {
    title: "Blog",
    slug: "/blog/",
    ariaLabel: "Ver las entradas del blog",
  },
  {
    title: "Categorias",
    slug: "/categorias/",
    ariaLabel: "Ver todas las categorias",
  },
  {
    title: "Etiquetas",
    slug: "/etiquetas/",
    ariaLabel: "Ver todas las etiquetas",
  },
  {
    title: "Licencia",
    slug: "/licencia/",
    ariaLabel: "Ver terminos y condiciones",
  },
]

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full">
    {routes.map((route, i) => {
      return (
        <Link
          key={i}
          onClick={closeMenu}
          activeClassName="font-bold"
          alt={route.ariaLabel}
          title={route.ariaLabel}
          aria-label={route.ariaLabel}
          to={route.slug}
          className="my-2 font-mono text-white cursor-pointer hover:text-indigo-100"
        >
          {route.title}
        </Link>
      )
    })}
  </nav>
)

export default Navigation
