const directory = {
  path: '/',
  contents: ['open_this.txt', 'protected/', '..'],
  children: [
    {
      path: '/protected',
      contents: ['test1.txt'],
      children: []
    }
  ]
};

export { directory };
