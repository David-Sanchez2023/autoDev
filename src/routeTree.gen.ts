/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardLayoutImport } from './routes/_dashboard-layout'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardLayoutDashboardListarRegistrosIndexImport } from './routes/_dashboard-layout/dashboard/listar-registros/index'
import { Route as DashboardLayoutDashboardListarRegistrosByIdIndexImport } from './routes/_dashboard-layout/dashboard/listar-registros-by-id/index'

// Create/Update Routes

const DashboardLayoutRoute = DashboardLayoutImport.update({
  id: '/_dashboard-layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardLayoutDashboardListarRegistrosIndexRoute =
  DashboardLayoutDashboardListarRegistrosIndexImport.update({
    id: '/dashboard/listar-registros/',
    path: '/dashboard/listar-registros/',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)

const DashboardLayoutDashboardListarRegistrosByIdIndexRoute =
  DashboardLayoutDashboardListarRegistrosByIdIndexImport.update({
    id: '/dashboard/listar-registros-by-id/',
    path: '/dashboard/listar-registros-by-id/',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard-layout': {
      id: '/_dashboard-layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof DashboardLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard-layout/dashboard/listar-registros-by-id/': {
      id: '/_dashboard-layout/dashboard/listar-registros-by-id/'
      path: '/dashboard/listar-registros-by-id'
      fullPath: '/dashboard/listar-registros-by-id'
      preLoaderRoute: typeof DashboardLayoutDashboardListarRegistrosByIdIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/_dashboard-layout/dashboard/listar-registros/': {
      id: '/_dashboard-layout/dashboard/listar-registros/'
      path: '/dashboard/listar-registros'
      fullPath: '/dashboard/listar-registros'
      preLoaderRoute: typeof DashboardLayoutDashboardListarRegistrosIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
  }
}

// Create and export the route tree

interface DashboardLayoutRouteChildren {
  DashboardLayoutDashboardListarRegistrosByIdIndexRoute: typeof DashboardLayoutDashboardListarRegistrosByIdIndexRoute
  DashboardLayoutDashboardListarRegistrosIndexRoute: typeof DashboardLayoutDashboardListarRegistrosIndexRoute
}

const DashboardLayoutRouteChildren: DashboardLayoutRouteChildren = {
  DashboardLayoutDashboardListarRegistrosByIdIndexRoute:
    DashboardLayoutDashboardListarRegistrosByIdIndexRoute,
  DashboardLayoutDashboardListarRegistrosIndexRoute:
    DashboardLayoutDashboardListarRegistrosIndexRoute,
}

const DashboardLayoutRouteWithChildren = DashboardLayoutRoute._addFileChildren(
  DashboardLayoutRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof DashboardLayoutRouteWithChildren
  '/dashboard/listar-registros-by-id': typeof DashboardLayoutDashboardListarRegistrosByIdIndexRoute
  '/dashboard/listar-registros': typeof DashboardLayoutDashboardListarRegistrosIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof DashboardLayoutRouteWithChildren
  '/dashboard/listar-registros-by-id': typeof DashboardLayoutDashboardListarRegistrosByIdIndexRoute
  '/dashboard/listar-registros': typeof DashboardLayoutDashboardListarRegistrosIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_dashboard-layout': typeof DashboardLayoutRouteWithChildren
  '/_dashboard-layout/dashboard/listar-registros-by-id/': typeof DashboardLayoutDashboardListarRegistrosByIdIndexRoute
  '/_dashboard-layout/dashboard/listar-registros/': typeof DashboardLayoutDashboardListarRegistrosIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/dashboard/listar-registros-by-id'
    | '/dashboard/listar-registros'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/dashboard/listar-registros-by-id'
    | '/dashboard/listar-registros'
  id:
    | '__root__'
    | '/'
    | '/_dashboard-layout'
    | '/_dashboard-layout/dashboard/listar-registros-by-id/'
    | '/_dashboard-layout/dashboard/listar-registros/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardLayoutRoute: typeof DashboardLayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardLayoutRoute: DashboardLayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_dashboard-layout"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_dashboard-layout": {
      "filePath": "_dashboard-layout.tsx",
      "children": [
        "/_dashboard-layout/dashboard/listar-registros-by-id/",
        "/_dashboard-layout/dashboard/listar-registros/"
      ]
    },
    "/_dashboard-layout/dashboard/listar-registros-by-id/": {
      "filePath": "_dashboard-layout/dashboard/listar-registros-by-id/index.tsx",
      "parent": "/_dashboard-layout"
    },
    "/_dashboard-layout/dashboard/listar-registros/": {
      "filePath": "_dashboard-layout/dashboard/listar-registros/index.tsx",
      "parent": "/_dashboard-layout"
    }
  }
}
ROUTE_MANIFEST_END */
