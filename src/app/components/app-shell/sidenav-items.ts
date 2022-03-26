export const menuItems = [
    ['dashboard_customize', 'Dashboard', ['/dashboard']],
    ['groups', 'Students', ['/student']],
    ['library_books', 'Books', ['/books']],
    ['text_snippet', 'Materials', ['/materials']],
    ['dvr', 'Issue Book', ['/issue-book-dashboard']],
    ['record_voice_over', 'Author', ['/authors']],
    ['move_up', 'Promote Students', ['/promote-students']],
    ['person', 'Admin', ['/admin']],
].map(([icon, text, path]) => ({ icon, text, path }));