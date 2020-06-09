export default {
  branches: [],
  jobs: [],
  projects: {
    all: [],
    userProjects: [],
    starredProjects: [],
    selectedProject: {},
  },
  users: [],
  processors: {
    operations: [],
    algorithms: [],
  },
  mergeRequests: [],
  user: {
    membership: 1,
    id: null,
    username: null,
    email: null,
    token: null,
    auth: false,
    role: null,
    type: null,
    userInfo: {
      avatar_url: '',
    },
    meta: {
      closedInstructions: {
        EmptyDataVisualization: false,
        DataInstanceOverview: false,
        DataVisualizationOverview: false,
        NewExperiment: false,
        PipeLineView: false,
      },
    },
    globalColorMarker: null,
    isLoading: false,
  },
  actionModal: {
    title: 'Modal title',
    subtitle: '',
    content: '',
    positiveLabel: 'Accept',
    onPositive: (val) => {
      return Promise.resolve(val);
    },
    negativeLabel: 'Cancel',
    onNegative: () => Promise.resolve(false),
    ignoreLabel: '',
    isShown: false,
    closable: true,
  },
  groups: [],
};
