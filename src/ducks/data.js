const BASE_URL = '/';

const navItems = [
    {
      label: 'Home',
      url: BASE_URL,
      icon: 'HomeOutlined'

    },
    {
      label: 'Colors',
      url: BASE_URL + 'colors',
      icon: 'ColorLensOutlined'

    },
    {
      label: 'Units',
      url: BASE_URL + 'Components',
      icon: 'DeviceHubOutlined',
      subNavItems: [
        {
          label: 'Avatar',
          url: BASE_URL + 'Components/avatar',
          icon: 'NavigateNext'

        },
        {
          label: 'Button',
          url: BASE_URL + 'Components/button',
          icon: 'NavigateNext'

        },
        {
          label: 'Chips',
          url: BASE_URL + 'Components/chips',
          icon: 'NavigateNext'

        },
        {
          label: 'Dialog',
          url: BASE_URL + 'Components/dialog',
          icon: 'NavigateNext'

        },
        {
          label: 'Expend Panel*',
          url: BASE_URL + 'Components/panel',
          icon: 'NavigateNext'
        },
        {
          label: 'Info Card',
          url: BASE_URL + 'Components/infocard',
          icon: 'NavigateNext'

        },
        {
          label: 'Markdown',
          url: BASE_URL + 'Components/markdown',
          icon: 'NavigateNext'

        },
        {
          label: 'Nested List',
          url: BASE_URL + 'Components/nestedlist',
          icon: 'NavigateNext'
        },
        {
          label: 'Notification*',
          url: BASE_URL + 'Components/notification',
          icon: 'NavigateNext'

        },
        {
          label: 'Progress',
          url: BASE_URL + 'Components/progress',
          icon: 'NavigateNext'

        },
        {
          label: 'Search Field',
          url: BASE_URL + 'Components/searchfield',
          icon: 'NavigateNext'
        },
        {
          label: 'Spinner',
          url: BASE_URL + 'Components/spinner',
          icon: 'NavigateNext'

        },
        {
          label: 'Table',
          url: BASE_URL + 'Components/table',
          icon: 'NavigateNext'

        },
        {
          label: 'Tabs*',
          url: BASE_URL + 'Components/tabs',
          icon: 'NavigateNext'

        },
      ]
    },
    {
      label: 'Charts',
      url: BASE_URL + 'charts',
      icon: 'InsertChartOutlined',
      subNavItems: [
        {
          label: 'Area',
          url: BASE_URL + 'charts/area',
          icon: 'NavigateNext'

        },
        {
          label: 'Circular Grid Line',
          url: BASE_URL + 'charts/circulargridline',
          icon: 'NavigateNext'

        },
        {
          label: 'lineSeries',
          url: BASE_URL + 'charts/lineSeries',
          icon: 'NavigateNext'

        },
        {
          label: 'Horizontal Bar',
          url: BASE_URL + 'charts/horizontalbar',
          icon: 'NavigateNext'

        },
        {
          label: 'Line',
          url: BASE_URL + 'charts/line',
          icon: 'NavigateNext'

        },
        {
          label: 'LineMark',
          url: BASE_URL + 'charts/linemark',
          icon: 'NavigateNext'
        },
        {
          label: 'Pie',
          url: BASE_URL + 'charts/pie',
          icon: 'NavigateNext'

        },
        {
          label: 'Scatter Plot',
          url: BASE_URL + 'charts/scatterplot',
          icon: 'NavigateNext'

        },
        {
          label: 'Stacked Bar',
          url: BASE_URL + 'charts/stackbar',
          icon: 'NavigateNext'

        },
        {
          label: 'Vertical Bar',
          url: BASE_URL + 'charts/verticalbar',
          icon: 'NavigateNext'
        },
      ]
    },
    {
      label: 'Iconography',
      url: BASE_URL + 'icons',
      icon: 'TagFacesOutlined'

    }
];

const rightMenu = [
  {
    label: 'Material-UI',
    link: 'https://material-ui.com/'
  },
  {
    label: 'React',
    link: 'https://reactjs.org/'
  },
  {
    label: 'React-Vis',
    link: 'https://github.com/uber/react-vis'
  },
];


export default {navItems,rightMenu}
