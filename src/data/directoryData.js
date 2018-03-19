const directory = {
  path: '/',
  contents: ['open_this.txt', 'protected/'],
  children: [
    {
      path: '/protected',
      contents: ['..'],
      children: []
    }
  ]
};

export { directory };
