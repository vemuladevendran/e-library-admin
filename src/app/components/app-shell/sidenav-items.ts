export const menuItems = [
    ['dashboard_customize', 'Dashboard', ['/dashboard']],
    ['library_books', 'Books', ['/books']],
    ['dvr', 'Issue Book', ['/issue-book']],
    ['person', 'Admin', ['/admin']],
    ['groups', 'Students', ['/student']],
    ['record_voice_over', 'Author', ['/authors']],
].map(([icon, text, path]) => ({ icon, text, path }));