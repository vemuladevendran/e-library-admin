export const menuItems = [
    ['dashboard_customize', 'Dashboard', ['/dashboard']],
    ['library_books', 'Books', ['/books']],
    ['person', 'Admin', ['/admin']],
    ['record_voice_over', 'Author', ['/authors']],
].map(([icon, text, path]) => ({ icon, text, path }));