const directory = {
  path: '/',
  contents: ['open_this.txt', 'dir1/', 'dir2/'],
  children: [
    {
      path: '/dir1',
      contents: ['test1.txt'],
      children: []
    },
    {
      path: '/dir2',
      contents: ['test2.txt'],
      children: []
    }
  ]
};

export { directory };
