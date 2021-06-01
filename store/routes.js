const routes = {
  page1: {
    name: 'Page 1',
    path: '/page-1',
    children: [
      {
        name: 'Page 1.1',
        path: '/page-1/page-1-1',
        children: [
          {
            name: 'Page 1.1.1',
            path: '/page-1/page-1-1/page-1-1-1'
          },
          {
            name: 'Page 1.1.2',
            path: '/page-1/page-1-1/page-1-1-2'
          },
          {
            name: 'Page 1.1.3',
            path: '/page-1/page-1-1/page-1-1-3'
          },
          {
            name: 'Page 1.1.4',
            path: '/page-1/page-1-1/page-1-1-4'
          }
        ]
      },
      {
        name: 'Page 1.2',
        path: '/page-1/page-1-2',
        children: [
          {
            name: 'Page 1.2.1',
            path: '/page-1/page-1-2/page-1-2-1'
          },
          {
            name: 'Page 1.2.2',
            path: '/page-1/page-1-2/page-1-2-2'
          }
        ]
      },
      {
        name: 'Page 1.3',
        path: '/page-1/page-1-3'
      },
      {
        name: 'Page 1.4',
        path: '/page-1/page-1-4'
      },
      {
        name: 'Page 1.5',
        path: '/page-1/page-1-5'
      }
    ]
  },
  page2: {
    name: 'Page 2',
    path: '/page-2',
    children: [
      {
        name: 'Page 2.1',
        path: '/page-2/page-2-1'
      },
      {
        name: 'Page 2.2',
        path: '/page-2/page-2-2'
      },
      {
        name: 'Page 2.3',
        path: '/page-2/page-2-3',
        children: [
          {
            name: 'Page 2.3.1',
            path: '/page-2/page-2-3/page-2-3-1'
          },
          {
            name: 'Page 2.3.2',
            path: '/page-2/page-2-3/page-2-3-2'
          },
          {
            name: 'Page 2.3.3',
            path: '/page-2/page-2-3/page-2-3-3'
          }
        ]
      },
      {
        name: 'Page 2.4',
        path: '/page-2/page-2-4',
        children: [
          {
            name: 'Page 2.4.1',
            path: '/page-2/page-2-4/page-2-4-1'
          },
          {
            name: 'Page 2.4.2',
            path: '/page-2/page-2-4/page-2-4-2'
          },
          {
            name: 'Page 2.4.3',
            path: '/page-2/page-2-4/page-2-4-3'
          },
          {
            name: 'Page 2.4.4',
            path: '/page-2/page-2-4/page-2-4-4'
          }
        ]
      }
    ]
  },
  page3: {
    name: 'Page 3',
    path: '/page-3'
  },
  page4: {
    name: 'Page 4',
    path: '/page-4',
    children: [
      {
        name: 'Page 4.1',
        path: '/page-4/page-4-1'
      },
      {
        name: 'Page 4.2',
        path: '/page-4/page-4-2'
      },
      {
        name: 'Page 4.3',
        path: '/page-4/page-4-3'
      },
      {
        name: 'Page 4.4',
        path: '/page-4/page-4-4'
      },
      {
        name: 'Page 4.5',
        path: '/page-4/page-4-5'
      }
    ]
  },
  page5: {
    name: 'Page 5',
    path: '/page-5'
  }
}

const defaultState = {
  routes
}

export const state = () => ({ ...defaultState })

export const getters = {
  routes: state => state.routes
}

export const actions = {}

export const mutations = {}
