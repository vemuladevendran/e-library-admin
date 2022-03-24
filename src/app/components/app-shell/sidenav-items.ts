export const menuItems = [
    ['dashboard_customize', 'Dashboard', ['/dashboard']],
    ['library_books', 'Books', ['/books']],
    ['text_snippet', 'Materials', ['/materials']],
    ['dvr', 'Issue Book', ['/issue-book-dashboard']],
    ['person', 'Admin', ['/admin']],
    ['groups', 'Students', ['/student']],
    ['record_voice_over', 'Author', ['/authors']],
].map(([icon, text, path]) => ({ icon, text, path }));