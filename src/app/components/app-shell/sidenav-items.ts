export const menuItems = [
    ['dashboard_customize', 'Dashboard', ['/dashboard']],
    ['library_books', 'Books', ['/books']],
    ['person', 'Author', ['/author']],
].map(([icon, text, path]) => ({ icon, text, path }));