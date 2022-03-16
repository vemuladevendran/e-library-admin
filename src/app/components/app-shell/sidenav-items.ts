export const menuItems = [
  ['dashboard_customize', 'Dashboard', ['/dashboard']],
  ['library_books', 'Books', ['/books']],
  ['library_books', 'Students', ['/student']],
  ['person', 'Author', ['/authors']],
].map(([icon, text, path]) => ({ icon, text, path }));
